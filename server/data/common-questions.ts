import { FAQEntry } from "@shared/schema";

// Common questions that users might ask to establish a base knowledge
export const commonQuestions: FAQEntry[] = [
  {
    question: "O que é o Processo Transexualizador?",
    answer:
      "O Processo Transexualizador é um conjunto de estratégias de atenção à saúde instituído no Sistema Único de Saúde (SUS) que visa atender às pessoas que apresentam incongruência de gênero. Foi instituído oficialmente em 2008 e ampliado em 2013, oferecendo assistência integral a pessoas trans que desejam realizar a transição de gênero, incluindo acompanhamento clínico, hormonioterapia e procedimentos cirúrgicos.",
    source: "Manual de uso do SAIPS - Processo Transexualizador, pág. 3",
    category: "geral",
  },
  {
    question: "Quem pode acessar o Processo Transexualizador?",
    answer:
      "O Processo Transexualizador é destinado a pessoas trans (homens trans, mulheres trans e travestis) e não-binárias que apresentam incongruência de gênero e desejam realizar procedimentos de modificação corporal e acompanhamento clínico especializado. O acesso ocorre através das unidades da Rede SAMPA Trans (no caso de São Paulo) ou serviços habilitados pelo Ministério da Saúde em outros estados.",
    source: "Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 1",
    category: "geral",
  },
  {
    question: "O que é incongruência de gênero?",
    answer:
      "Incongruência de gênero é definida como a discordância acentuada e persistente entre o gênero vivenciado de um indivíduo e o sexo atribuído, sem necessariamente implicar sofrimento. Já a disforia de gênero refere-se ao grave desconforto ou sofrimento que algumas pessoas experienciam devido a sua incongruência de gênero.",
    source: "Resolução CFM N° 2.427/2025, Art. 1°",
    category: "geral",
  },
  {
    question: "Como iniciar o Processo Transexualizador?",
    answer:
      "Para iniciar o Processo Transexualizador, você deve procurar uma unidade da Rede SAMPA Trans (no caso de São Paulo) ou um serviço habilitado pelo Ministério da Saúde em seu estado. Leve seus documentos pessoais (RG e CPF), cartão do SUS e comprovante de residência. Na unidade, você passará por uma avaliação inicial e será encaminhado para acompanhamento com equipe multiprofissional.",
    source: "Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 2",
    category: "fluxos",
  },
  {
    question: "Quanto tempo dura o processo até a cirurgia?",
    answer:
      "O tempo para realização de cirurgias varia conforme o procedimento. Para cirurgia de redesignação genital, é necessário um acompanhamento mínimo de 2 anos antes de entrar na fila, e o tempo de espera na fila pode chegar a 8-10 anos. Para outras cirurgias, como mamoplastia masculinizadora, o tempo de espera geralmente é menor. Todas as cirurgias exigem pelo menos 1 ano de acompanhamento prévio por equipe médica.",
    source:
      "Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 4 e Resolução CFM N° 2.427/2025, Art. 7°",
    category: "cirurgias",
  },
  {
    question: "O que é o ASITT?",
    answer:
      "O ASITT (Ambulatório de Saúde Integral para Travestis e Transexuais) é um serviço do Centro de Referência e Treinamento DST/Aids da Secretaria de Estado da Saúde de São Paulo que regula a fila de espera para cirurgias de afirmação de gênero realizadas em hospitais parceiros. O ASITT é responsável por gerenciar os encaminhamentos e avaliar os critérios para inclusão nas filas de espera para procedimentos cirúrgicos.",
    source: "Orientações e Fluxo para Cirurgias de Afirmação de Gênero, pág. 1",
    category: "unidades",
  },
];
