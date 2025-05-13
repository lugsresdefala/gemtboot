import { storage } from "../storage";
import { DocumentChunk } from "@shared/schema";

interface ResponseData {
  content: string;
  source?: string;
}

/**
 * Busca de documentos melhorada com correspondência de relevância
 */
async function findRelevantDocuments(query: string): Promise<DocumentChunk[]> {
  // Extrai palavras-chave da consulta
  const keywords = query
    .toLowerCase()
    .replace(/[^\w\sàáâãéêíóôõúç]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2);
  
  // Obter todos os fragmentos de documentos
  const documents = await storage.searchDocuments('');
  
  // Calcula a pontuação para cada documento
  const scoredDocs = documents.map(doc => {
    const docText = doc.content.toLowerCase();
    let score = 0;
    
    // Pontuação baseada em palavras-chave
    keywords.forEach(keyword => {
      if (docText.includes(keyword)) {
        score += 2;
        
        // Mais pontos se aparecer várias vezes
        const matches = docText.split(keyword).length - 1;
        if (matches > 1) {
          score += matches;
        }
      }
    });
    
    // Pontuação extra para frases completas
    if (docText.includes(query.toLowerCase())) {
      score += 10;
    }
    
    // Verificar se o documento contém palavras específicas relacionadas à consulta
    // Mapeia tópicos comuns para termos relacionados
    const topicMap: {[key: string]: string[]} = {
      'hormonizacao': ['hormon', 'estrogen', 'testoste', 'antiandrogen'],
      'cirurgia': ['cirurg', 'redesignação', 'mastectomia', 'mamoplastia', 'histerectomia'],
      'documentos': ['document', 'rg', 'identidade', 'certidão', 'cartão sus']
    };
    
    // Verifica se a consulta pode estar relacionada a um tópico específico
    Object.entries(topicMap).forEach(([topic, terms]) => {
      if (keywords.some(k => terms.some(term => k.includes(term)))) {
        // Verifica se o documento contém termos relacionados a este tópico
        if (terms.some(term => docText.includes(term))) {
          score += 5;
        }
      }
    });
    
    return { doc, score };
  });
  
  // Ordena por pontuação e retorna os melhores resultados
  return scoredDocs
    .sort((a, b) => b.score - a.score)
    .filter(item => item.score > 2)
    .slice(0, 3)
    .map(item => item.doc);
}

/**
 * Melhorada a correspondência de perguntas com FAQs
 */
async function findMatchingFAQs(query: string) {
  const normalizedQuery = query.toLowerCase();
  const faqs = await storage.getFAQs();
  
  // Extrai palavras-chave da consulta
  const queryWords = normalizedQuery
    .replace(/[^\w\sàáâãéêíóôõúç]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2);
  
  // Pontuação para cada FAQ baseada em correspondência de palavras-chave
  const scoredFaqs = faqs.map(faq => {
    const questionLower = faq.question.toLowerCase();
    const categoryLower = (faq.category || '').toLowerCase();
    
    // Verifica correspondência exata
    if (questionLower === normalizedQuery) {
      return { faq, score: 100 };
    }
    
    // Verifica correspondência de categoria
    if (normalizedQuery.includes(categoryLower) && categoryLower) {
      return { faq, score: 50 };
    }
    
    // Conta quantas palavras da consulta estão na pergunta
    let score = 0;
    queryWords.forEach(word => {
      if (questionLower.includes(word)) {
        score += 5;
      }
      
      // Dá pontuação extra para correspondências no início da pergunta
      if (questionLower.startsWith(word)) {
        score += 10;
      }
    });
    
    // Verifica se a consulta é uma variação da pergunta
    if (questionLower.includes(normalizedQuery)) {
      score += 30;
    }
    
    return { faq, score };
  });
  
  // Ordena e filtra FAQs com pontuação mínima
  return scoredFaqs
    .filter(item => item.score > 5)
    .sort((a, b) => b.score - a.score)
    .map(item => item.faq);
}

/**
 * Generates a response based on the user query
 */
export async function generateResponse(query: string): Promise<ResponseData> {
  // Check if the query matches any FAQs
  const matchingFAQs = await findMatchingFAQs(query);
  
  if (matchingFAQs.length > 0) {
    const bestMatch = matchingFAQs[0];
    return {
      content: bestMatch.answer,
      source: bestMatch.source
    };
  }
  
  // Search for relevant documents
  const relevantDocs = await findRelevantDocuments(query);
  
  if (relevantDocs.length > 0) {
    // Use the most relevant document for the response
    const bestDoc = relevantDocs[0];
    
    return {
      content: bestDoc.content,
      source: bestDoc.source
    };
  }
  
  // Fallback response if no relevant information is found
  return {
    content: "Desculpe, não encontrei informações específicas sobre esse assunto nos documentos oficiais sobre assistência à saúde de pessoas trans. Você pode tentar reformular sua pergunta ou consultar diretamente a unidade de saúde mais próxima."
  };
}
