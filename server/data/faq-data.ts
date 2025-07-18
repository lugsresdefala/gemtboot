import { FAQEntry } from "@shared/schema";
import { ageCriteriaFAQ, imcCriteriaFAQ } from "./age-criteria-update";

export const faqData: FAQEntry[] = [
  {
    question:
      "Quais são os critérios para realizar a cirurgia de redesignação genital?",
    answer:
      "De acordo com as orientações do Processo Transexualizador para cirurgia de redesignação genital para mulheres trans, travestis ou pessoas transfemininas, os critérios de inclusão são:\n\n• Acima de 18 anos para procedimentos em geral\n• Acima de 21 anos apenas para cirurgias que comprometem a fertilidade (conforme Lei n° 14.443/2022)\n• Ter inscrição no Cartão Nacional do SUS – CNS\n• Precisa ter matrícula no CRT (essa identificação é realizada pelo ASITT no momento do cadastro)\n• Morar em São Paulo (Estado ou Município)\n• A cirurgia pode ocorrer com a usuária de até 75 anos (precisa ser colocada na fila até 62 anos)\n• Epilação a laser (será avaliada por profissional do ASITT)\n• Rede de apoio pós-cirurgia\n• Dados cadastrais atualizados\n• Relatório(s) atualizado(s) com acompanhamento de 2 anos\n\nO tempo médio de espera é de 8 a 10 anos, com aproximadamente 24 cirurgias realizadas por ano.",
    source:
      "Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 4-5",
    category: "cirurgias",
  },
  {
    question: "Existe alguma restrição de idade para hormonização?",
    answer:
      "Sim, de acordo com a Resolução CFM N° 2.427/2025, a hormonização está vedada antes dos 18 (dezoito) anos de idade. Além disso, a resolução também veda o uso de bloqueadores hormonais para tratamento de incongruência de gênero ou disforia de gênero em crianças e adolescentes (Art. 5°).\n\nPara iniciar a hormonização após os 18 anos, a pessoa deverá:\n• Iniciar avaliação médica, com ênfase em acompanhamento psiquiátrico e endocrinológico por, no mínimo, 1 ano antes do início da hormonização\n• Obter avaliação cardiovascular e metabólica com parecer médico favorável\n• Não apresentar doença psiquiátrica grave ou qualquer outra doença que contraindique a hormonização",
    source: "Resolução CFM N° 2.427/2025, Art. 5° e Art. 6°",
    category: "hormonizacao",
  },
  {
    question:
      "Quais documentos preciso para acessar os serviços de saúde para pessoas trans?",
    answer:
      "Para acessar os serviços de saúde para pessoas trans no âmbito da Portaria do Processo Transexualizador, você precisará de:\n\n• Cartão Nacional do SUS (CNS)\n• Documento de identidade com foto (RG)\n• Comprovante de residência\n\nCaso tenha feito retificação de nome e/ou sexo, também é necessário apresentar a cópia do RG atualizado e, quando houver retificação de sexo, é necessário cópia da certidão de nascimento.",
    source:
      "Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 2-3",
    category: "documentos",
  },
  {
    question: "Quanto tempo dura o acompanhamento para cirurgia?",
    answer:
      "De acordo com a Resolução CFM N° 2.427/2025 e os protocolos do Processo Transexualizador, os procedimentos cirúrgicos de afirmação de gênero somente poderão ser realizados após acompanhamento prévio de, no mínimo, 1 (um) ano por equipe médica.\n\nJá para a inclusão na fila da cirurgia de redesignação genital, é necessário ter relatório(s) atualizado(s) com acompanhamento de 2 anos. O tempo médio de espera na fila para cirurgia de redesignação genital é de 8 a 10 anos.",
    source:
      "Resolução CFM N° 2.427/2025, Art. 7° e Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 4",
    category: "cirurgias",
  },
  {
    question: "Onde posso obter atendimento pelo processo transexualizador?",
    answer:
      "O atendimento pelo processo transexualizador é realizado nas unidades da Rede SAMPA Trans para residentes em São Paulo. Para outros estados, consulte as unidades habilitadas pelo Ministério da Saúde.\n\nPara cirurgia de redesignação genital para mulheres trans/travestis, a referência é o Hospital Mario Covas (02 cirurgias/mês).\n\nPara mamoplastia masculinizadora para homens trans, as referências são: Hospital Diadema, Hospital Mario Degni e Hospital Pedreira (10 cirurgias/mês).\n\nPara histerectomia para homens trans, a referência é o Hospital Mario Degni (04 cirurgias/mês).",
    source:
      "Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 3-4",
    category: "unidades",
  },
  {
    question: "Como funciona o contato com o ASITT?",
    answer:
      "O Ambulatório de Saúde Integral para Travestis e Transexuais (ASITT) do Centro de Referência e Treinamento DST/Aids da Secretaria de Estado da Saúde de São Paulo é o serviço que regula a fila de espera para as cirurgias realizadas em hospitais parceiros.\n\nTodo contato com o ASITT deverá ser realizado através da Unidade da Rede Sampa Trans mais próxima.\n\nImportante: A pessoa usuária NUNCA deve enviar ou comparecer ao ASITT diretamente. A responsável pelo contato com o ASITT é a Unidade da Rede Sampa Trans.",
    source: "Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 1",
    category: "fluxos",
  },
  {
    question:
      "Quais procedimentos cirúrgicos estão disponíveis pelo SUS em São Paulo?",
    answer:
      "Atualmente, os procedimentos cirúrgicos disponibilizados pelos hospitais parceiros para o encaminhamento através do ASITT são:\n\n• Cirurgia de redesignação genital: para mulheres trans, travestis e pessoas transfemininas;\n• Mamoplastia masculinizadora e histerectomia: para homens trans e pessoas transmasculinas.\n\nAs demais cirurgias, mesmo que previstas na Portaria do MS, não são ofertadas pelo SUS em São Paulo.",
    source:
      "Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 1-2",
    category: "cirurgias",
  },
  {
    question: "O que pode impedir a cirurgia de redesignação genital?",
    answer:
      "Alguns fatores que podem impedir a cirurgia de redesignação genital são:\n\n• Não estar com relatórios atualizados;\n• Não estar tomando hormônios de forma regular (se for necessário);\n• Silicone industrial no quadril (nesse caso, pode-se solicitar avaliação do ASITT);\n• Não estar com a depilação a laser completa;\n• Ter transtornos mentais que contraindiquem a intervenção;\n• Ter menos de 21 anos (para cirurgias com potencial efeito esterilizador).",
    source:
      "Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 5 e Resolução CFM N° 2.427/2025, Art. 7°",
    category: "cirurgias",
  },
  {
    question: "Como funciona a hormonização?",
    answer:
      "A hormonização é definida como a administração de hormônios sexuais para induzir características secundárias condizentes com a identidade de gênero da pessoa. Os hormônios utilizados são:\n\n• Testosterona, para induzir o desenvolvimento dos caracteres sexuais secundários masculinos em homens trans e pessoas transmasculinas;\n• Estrogênio, para induzir o desenvolvimento dos caracteres sexuais secundários femininos em mulheres trans, travestis e pessoas transfemininas;\n• Antiandrogênio, que pode ser utilizado para atenuar o crescimento dos pelos corporais e as ereções espontâneas até a realização da orquiectomia.\n\nO uso de estrógenos ou testosterona deve ser mantido ao longo da vida da pessoa, com monitoramento médico regular dos fatores de risco.",
    source: "Resolução CFM N° 2.427/2025, Anexo I",
    category: "hormonizacao",
  },
  {
    question:
      "Quais são as modalidades de habilitação dos serviços no Processo Transexualizador?",
    answer:
      "De acordo com a Portaria do Ministério da Saúde que institui o Processo Transexualizador, são definidas duas modalidades de habilitação dos serviços:\n\n• Modalidade Ambulatorial: consiste nas ações de âmbito ambulatorial, que incluem acompanhamento clínico, acompanhamento pré e pós-operatório e hormonização, destinadas a promover atenção especializada para pessoas trans no SUS.\n\n• Modalidade Hospitalar: consiste nas ações de âmbito hospitalar, que incluem realização de cirurgias e acompanhamento pré e pós-operatório, destinadas a promover atenção especializada para pessoas trans no SUS.",
    source: "Manual de uso do SAIPS - Processo Transexualizador, pág. 3",
    category: "habilitacao",
  },
  // Add the new clarification FAQs
  ageCriteriaFAQ,
  imcCriteriaFAQ,
];
