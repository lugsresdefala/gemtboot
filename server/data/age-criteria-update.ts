import { FAQEntry } from "@shared/schema";

// Additional FAQ entry to clarify age criteria
export const ageCriteriaFAQ: FAQEntry = {
  question: "Qual é a idade mínima para diferentes procedimentos?",
  answer:
    "A idade mínima varia conforme o tipo de procedimento:\n\n" +
    "• **18 anos**: Para a maioria dos procedimentos cirúrgicos de afirmação de gênero\n" +
    "• **21 anos**: Apenas para cirurgias que comprometem a fertilidade (conforme Lei n° 14.443/2022)\n\n" +
    "Exemplos de cirurgias que comprometem fertilidade:\n" +
    "• Cirurgia de redesignação genital para mulheres trans\n" +
    "• Histerectomia para homens trans\n\n" +
    "Procedimentos que não comprometem fertilidade (18 anos):\n" +
    "• Mamoplastia masculinizadora\n" +
    "• Outros procedimentos de feminização facial ou masculinização",
  source: "Lei n° 14.443/2022 e Resolução CFM N° 2.427/2025",
  category: "criterios",
};

// Additional FAQ entry to clarify IMC criteria
export const imcCriteriaFAQ: FAQEntry = {
  question: "O IMC é um critério obrigatório para cirurgias?",
  answer:
    "O IMC (Índice de Massa Corporal) não é um critério geral obrigatório para todas as cirurgias de afirmação de gênero.\n\n" +
    "• O IMC 27 é um **parâmetro técnico** utilizado especificamente por alguns cirurgiões para mamoplastia masculinizadora\n" +
    "• Este parâmetro visa otimizar os resultados cirúrgicos e reduzir complicações pós-operatórias\n" +
    "• Não deve ser aplicado como critério para outros procedimentos\n" +
    "• A avaliação é individualizada e considera diversos fatores além do IMC\n\n" +
    "Cada procedimento tem suas próprias considerações técnicas específicas.",
  source: "Protocolos técnicos cirúrgicos - Orientações ASITT",
  category: "criterios",
};
