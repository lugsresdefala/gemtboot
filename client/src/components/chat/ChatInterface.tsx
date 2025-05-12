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
    content: `Olá! Eu sou o GEM-T, assistente virtual do Projeto Diversidade Barra Funda para informações sobre o Processo Transexualizador no SUS. Como posso ajudar você hoje?

Você pode me perguntar sobre:
- Fluxos e procedimentos para cirurgias
- Critérios de elegibilidade para o processo
- Documentos necessários
- Orientações sobre hormônios`,
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Top bar with title */}
      <div className="p-4 bg-gradient-to-r from-[#1976d2] to-[#7b1fa2] text-white flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <RobotAvatar size="sm" />
          <h2 className="font-semibold text-lg">GEM-T · Processo Transexualizador</h2>
        </div>
        
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={clearConversation} 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-white hover:bg-white/20 transition-colors"
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
                  className="text-white hover:text-white hover:bg-white/20 transition-colors"
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
          faq: "Quais são as perguntas frequentes sobre o processo transexualizador?",
          fluxos: "Como funciona o fluxo do processo transexualizador?",
          criterios: "Quais são os critérios para participar do processo transexualizador?",
          especialistas: "Quais especialistas participam do processo transexualizador?",
          unidades: "Onde posso encontrar unidades que oferecem o processo transexualizador?"
        };
        
        sendMessage(topicQueries[topic]);
      }} />
      
      {/* Chat Messages */}
      <div className="chat-height overflow-y-auto px-4 py-6 custom-scrollbar bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto">
          {/* Welcome message if no messages yet */}
          {messages.length === 0 && (
            <ChatMessage message={welcomeMessage} />
          )}
          
          {/* Actual conversation messages */}
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex items-start mb-6 animate-fade-in">
              <RobotAvatar size="sm" className="mt-1" />
              <div className="ml-3 bg-white rounded-xl rounded-tl-none py-3 px-4 border border-gray-200 shadow-sm">
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
