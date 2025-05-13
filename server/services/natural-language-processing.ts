import { storage } from "../storage";
import { DocumentChunk } from "@shared/schema";

interface ResponseData {
  content: string;
  source?: string;
}

/**
 * Simple keyword matching for document search
 * In a production system, this would use proper NLP techniques
 */
async function findRelevantDocuments(query: string): Promise<DocumentChunk[]> {
  // Convert query to keywords
  const keywords = query
    .toLowerCase()
    .replace(/[^\w\sàáâãéêíóôõúç]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  // Get all document chunks
  const documents = await storage.searchDocuments('');
  
  // Score each document based on keyword matches
  const scoredDocs = documents.map(doc => {
    const docText = doc.content.toLowerCase();
    let score = 0;
    
    keywords.forEach(keyword => {
      if (docText.includes(keyword)) {
        score += 1;
      }
    });
    
    return { doc, score };
  });
  
  // Sort by score and take the top results
  return scoredDocs
    .sort((a, b) => b.score - a.score)
    .filter(item => item.score > 0)
    .slice(0, 3)
    .map(item => item.doc);
}

/**
 * Simple keyword matching for FAQ search
 */
async function findMatchingFAQs(query: string) {
  const normalizedQuery = query.toLowerCase();
  const faqs = await storage.getFAQs();
  
  return faqs.filter(faq => 
    faq.question.toLowerCase().includes(normalizedQuery) ||
    normalizedQuery.includes(faq.question.toLowerCase().substring(0, 10))
  );
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
