export interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  source: string;
  timestamp: Date;
  conversationId: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
  source: string;
  category?: string;
}

export interface ChatResponse {
  userMessage: Message;
  assistantMessage: Message;
}

export type TopicType =
  | "faq"
  | "fluxos"
  | "criterios"
  | "especialistas"
  | "unidades";

export interface TopicPill {
  id: TopicType;
  label: string;
  icon: string;
}
