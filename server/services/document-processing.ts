import { storage } from "../storage";
import { DocumentChunk, FAQEntry } from "@shared/schema";
import { faqData } from "../data/faq-data";
import { commonQuestions } from "../data/common-questions";

/**
 * Processes document text into chunks for easier search and retrieval
 * @param text Document text to process
 * @param source Source citation information
 * @returns Array of document chunks
 */
function processDocumentText(text: string, source: string): DocumentChunk[] {
  // Split text into paragraphs
  const paragraphs = text.split(/\n\s*\n/);
  
  // Create chunks from paragraphs
  return paragraphs
    .filter(p => p.trim().length > 10) // Skip very short paragraphs
    .map(p => ({
      content: p.trim(),
      source
    }));
}

/**
 * Extracts FAQ entries from document text
 * This is a simplified implementation - in a production system,
 * we would use more sophisticated NLP techniques
 */
function extractFAQs(documentChunks: DocumentChunk[]): FAQEntry[] {
  // In a real implementation, we would parse the document to extract questions and answers
  // For this example, we'll use predefined FAQ data from faq-data.ts
  return faqData;
}

/**
 * Loads initial data from documents into storage
 */
export async function loadInitialData(): Promise<void> {
  // In a real implementation, this would read from PDF files
  // For this example, we're using the predefined data
  
  // Process orientation document for cirurgias
  const cirurgiasSource = "Orientações e Fluxo para Cirurgias de Afirmação de Gênero";
  const cirurgiasChunks = processDocumentText(
    "O Ambulatório de Saúde Integral para Travestis e Transexuais (ASITT) do Centro de Referência e Treinamento DST/Aids da Secretaria de Estado da Saúde de São Paulo (ASITT/CRT/SES) é o serviço que regula a fila de espera para as cirurgias realizadas em hospitais parceiros e coordena o fluxo de encaminhamento para as cirurgias.\n\n" +
    "É a unidade que se responsabiliza pelo usuário. Todo contato com o ASITT deverá ser realizado através da Unidade da Rede Sampa Trans.\n\n" +
    "A pessoa usuária nunca deve enviar ou comparecer ao ASITT diretamente. A responsável pelo contato com o ASITT é a Unidade da Rede Sampa Trans mais próxima.\n\n" +
    "Informamos que, até o presente momento, os procedimentos cirúrgicos disponibilizados pelos hospitais parceiros para o encaminhamento através do ASITT são:\n\n" +
    "• cirurgia de redesignação genital: para mulheres trans, travestis e pessoas transfemininas;\n" +
    "• mamoplastia masculinizadora e histerectomia: para homens trans e pessoas transmasculinas.\n\n" +
    "As demais cirurgias, mesmo que previstas na Portaria do MS, não são ofertadas pelo SUS em São Paulo.\n\n" +
    "Os critérios de inclusão para cirurgia de redesignação genital para mulheres trans/travestis ou pessoas transfemininas são:\n\n" +
    "• Acima de 21 anos para entrar na fila;\n" +
    "• Ter inscrição no Cartão Nacional do SUS – CNS;\n" +
    "• Precisa ter matrícula no CRT AIDS (essa identificação é realizada pelo ASITT no momento do cadastro e enviada para a Unidade da Rede SAMPA Trans);\n" +
    "• Quando nome for retificado é necessário cópia do RG atualizado e quando houver retificação de sexo, é necessário cópia da certidão de nascimento.\n" +
    "• Morar em São Paulo (Estado ou Município);\n" +
    "• A cirurgia pode ocorrer com a usuária de até 75 anos (precisa ser colocada na fila até 62 anos);\n" +
    "• Epilação a laser (será avaliada por profissional do ASITT);\n" +
    "• O IMC acima de 27 pode dificultar o pós-operatório;\n" +
    "• Rede de apoio pós-cirurgia;\n" +
    "• Dados cadastrais atualizados; e\n" +
    "• Relatório(s) atualizado(s) com acompanhamento de 2 anos.",
    cirurgiasSource
  );
  
  // Process CFM resolution document
  const cfmSource = "Resolução CFM N° 2.427/2025";
  const cfmChunks = processDocumentText(
    "Art. 1° Consideram-se as seguintes definições:\n" +
    "I – pessoa transgênero: indivíduo cuja identidade de gênero não corresponde ao sexo de nascimento, não implicando necessariamente intervenção médica;\n" +
    "II – incongruência de gênero: discordância acentuada e persistente entre o gênero vivenciado de um indivíduo e o sexo atribuído, sem necessariamente implicar sofrimento;\n" +
    "III – disforia de gênero: grave desconforto ou sofrimento que algumas pessoas experienciam devido a sua incongruência de gênero. O diagnóstico de disforia de gênero deverá seguir os critérios do Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5-TR) ou o que vier a atualizá-lo.\n\n" +
    "Art. 5° Fica vedado ao médico prescrever bloqueadores hormonais para tratamento de incongruência de gênero ou disforia de gênero em crianças e adolescentes.\n\n" +
    "Art. 6° Sobre a terapia hormonal cruzada:\n" +
    "§ 1° Definida como a administração de hormônios sexuais para induzir características secundárias condizentes com a identidade de gênero do paciente.\n" +
    "§ 2° Esta terapia está vedada antes dos 18 (dezoito) anos de idade.\n" +
    "§ 3° O paciente que optar por terapia hormonal cruzada deverá:\n" +
    "I – iniciar avaliação médica, com ênfase em acompanhamento psiquiátrico e endocrinológico por, no mínimo, 1 (um) ano antes do início da terapia hormonal, conforme PTS;\n" +
    "II – obter avaliação cardiovascular e metabólica com parecer médico favorável antes do início do tratamento;\n" +
    "III – não apresentar doença psiquiátrica grave, além da disforia, ou qualquer outra doença que contraindique a terapia hormonal cruzada.\n\n" +
    "Art. 7° No âmbito da atenção médica especializada a pessoa transgênero para cirurgias de redesignação de gênero, fica determinado que:\n" +
    "§ 2° Os procedimentos cirúrgicos de afirmação de gênero previstos nesta Resolução somente poderão ser realizados após acompanhamento prévio de, no mínimo, 1 (um) ano por equipe médica, conforme PTS.\n" +
    "§ 3° Ficam vedados os procedimentos cirúrgicos de afirmação de gênero nas seguintes situações:\n" +
    "I – em pessoas diagnosticadas com transtornos mentais que contraindiquem tais intervenções;\n" +
    "II – antes dos 18 (dezoito) anos de idade;\n" +
    "III – antes dos 21 (vinte e um) anos de idade quando as cirurgias implicarem potencial efeito esterilizador, em conformidade com a Lei n° 14.443, de 2 de setembro de 2022.",
    cfmSource
  );
  
  // Process manual document
  const manualSource = "Manual de uso do SAIPS - Processo Transexualizador";
  const manualChunks = processDocumentText(
    "O Processo Transexualizador foi instituído no Sistema Único de Saúde (SUS) em 2008, por meio da Portaria GM/MS nº 1.707, de 18 de agosto, e regulamentado, à época, pela Portaria SAS nº 457, de 19 de agosto de 2008. Em 2013 esse programa foi redefinido e ampliado, por meio da Portaria GM/MS nº 2.803, de 19 de novembro. Hoje a normativa do Processo Transexualizador está publicada no Anexo 1 do Anexo XXI da Portaria de Consolidação GM/MS nº 2, de 28 de setembro de 2017.\n\n" +
    "Essa normativa estabelece as diretrizes de assistência aos usuários do SUS com demanda para transição de gênero, bem como as normas para a habilitação de serviços do Processo Transexualizador.\n\n" +
    "De acordo com a portaria supracitada, são definidas duas modalidades de habilitação dos serviços nessa especialidade:\n" +
    "• Modalidade Ambulatorial: consiste nas ações de âmbito ambulatorial, quais sejam acompanhamento clínico, acompanhamento pré e pós-operatório e hormonioterapia, destinadas a promover atenção especializada no Processo Transexualizador no SUS e realizadas em estabelecimento de saúde cadastrado no Sistema de Cadastro Nacional de Estabelecimentos de Saúde (SCNES) que possua condições técnicas, instalações físicas e recursos humanos adequados conforme descrito no Anexo A do Anexo 1 do Anexo XXI; e\n" +
    "• Modalidade Hospitalar: consiste nas ações de âmbito hospitalar, quais sejam realização de cirurgias e acompanhamento pré e pós-operatório, destinadas a promover atenção especializada no Processo Transexualizador no SUS e realizadas em estabelecimento de saúde cadastrado no SCNES que possua condições técnicas, instalações físicas e recursos humanos adequados conforme descrito no Anexo A do Anexo 1 do Anexo XXI.",
    manualSource
  );
  
  // Combine all chunks
  const allChunks = [...cirurgiasChunks, ...cfmChunks, ...manualChunks];
  
  // Load chunks into storage
  storage.loadDocumentChunks(allChunks);
  
  // Extract and load FAQs
  const faqs = extractFAQs(allChunks);
  storage.loadFAQs([...faqs, ...commonQuestions]);
  
  console.log(`Loaded ${allChunks.length} document chunks and ${faqs.length + commonQuestions.length} FAQs`);
}
