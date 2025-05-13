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
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-purple-100">
      {/* Top bar with title */}
      <div className="p-5 bg-gradient-to-r from-[#4A148C] to-[#6A1B9A] text-white flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-white/10 p-2 rounded-lg shadow-inner">
            <RobotAvatar size="md" />
          </div>
          <div>
            <h2 className="font-bold text-lg tracking-tight">GEM-T</h2>
            <p className="text-xs text-purple-200/80">Projeto Diversidade Barra Funda</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={clearConversation} 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-white hover:bg-white/10 transition-all rounded-full"
                >
                  <Trash size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Limpar conversa</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-white hover:bg-white/10 transition-all rounded-full"
                >
                  <Settings size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Configurações</p>
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
      <div className="chat-height overflow-y-auto px-5 py-8 custom-scrollbar bg-gradient-to-b from-[#f8fafc] to-[#F3E5F5]/30">
        <div className="max-w-4xl mx-auto">
          {/* Welcome message if no messages yet */}
          {messages.length === 0 && (
            <div className="mb-6">
              <ChatMessage message={welcomeMessage} />
            </div>
          )}
          
          {/* Actual conversation messages */}
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex items-start mb-8 animate-fade-in">
              <div className="mt-1.5 flex-shrink-0">
                <RobotAvatar size="sm" className="shadow-md" />
              </div>
              <div className="ml-4 bg-white rounded-2xl rounded-tl-none py-4 px-5 border border-purple-100 shadow-md">
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
