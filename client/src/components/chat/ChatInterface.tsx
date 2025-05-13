import { useEffect, useRef } from "react";
import TopicPills from "./TopicPills";
import MessageInput from "./MessageInput";
import ChatMessage from "./ChatMessage";
import { useChat } from "@/hooks/use-chat";
import { Button } from "@/components/ui/button";
import { Trash, Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Message } from "@/types";
import RobotAvatar from "@/components/ui/RobotAvatar";

export default function ChatInterface() {
  const { messages, sendMessage, clearConversation, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initial welcome message
  const welcomeMessage: Message = {
    id: 0,
    role: "assistant",
    content: `Olá! Sou a GEM-T, assistente virtual do Projeto Diversidade Barra Funda. Como posso ajudar com informações sobre cuidados em saúde para pessoas trans?

Posso esclarecer dúvidas sobre:
• Acesso a cuidados em saúde no SUS
• Fluxos de atendimento
• Critérios para procedimentos
• Unidades de referência

Selecione um dos tópicos acima ou digite sua pergunta.`,
    source: "",
    timestamp: new Date(),
    conversationId: "welcome"
  };
  
  // Scroll to bottom of messages whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden border border-slate-100">
      {/* Top bar with title */}
      <div className="p-4 bg-[#0F766E] text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-1.5 rounded-md">
            <RobotAvatar size="sm" />
          </div>
          <div>
            <h2 className="font-medium text-base">GEM-T</h2>
            <p className="text-[11px] text-white/80">Diversidade Barra Funda</p>
          </div>
        </div>
        
        <div className="flex gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={clearConversation} 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-white hover:text-white hover:bg-white/10"
                >
                  <Trash size={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-xs">Limpar conversa</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8 text-white hover:text-white hover:bg-white/10"
                >
                  <Settings size={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-xs">Configurações</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      {/* Topic Pills */}
      <TopicPills onTopicSelect={(topic) => {
        // Handle topic selection by sending a query about that topic
        const topicQueries = {
          faq: "Quais são as perguntas frequentes sobre os cuidados em saúde para pessoas trans?",
          fluxos: "Como funciona o fluxo de cuidados em saúde para pessoas trans no SUS?",
          criterios: "Quais são os critérios para acessar os serviços de saúde para pessoas trans?",
          especialistas: "Quais especialistas participam dos cuidados em saúde para pessoas trans?",
          unidades: "Onde posso encontrar unidades que oferecem cuidados em saúde para pessoas trans?"
        };
        
        sendMessage(topicQueries[topic]);
      }} />
      
      {/* Chat Messages */}
      <div className="chat-height overflow-y-auto p-4 custom-scrollbar bg-slate-50">
        <div>
          {/* Welcome message if no messages yet */}
          {messages.length === 0 && (
            <div className="mb-4">
              <ChatMessage message={welcomeMessage} />
            </div>
          )}
          
          {/* Actual conversation messages */}
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex items-start mb-4 animate-fade-in">
              <div className="mt-1 flex-shrink-0">
                <RobotAvatar size="sm" />
              </div>
              <div className="ml-2 bg-white rounded-md rounded-tl-none py-3 px-3 border border-slate-200">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input Bar */}
      <MessageInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}
