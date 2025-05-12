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
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Top bar with title */}
      <div className="p-4 bg-gradient-to-r from-primary-dark to-secondary-dark text-white flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-comment-medical mr-2"></i>
          <h2 className="font-semibold">Assistente do Processo Transexualizador - Projeto Diversidade Barra Funda</h2>
        </div>
        
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={clearConversation} 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-primary-light hover:bg-transparent"
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
                  className="text-white hover:text-primary-light hover:bg-transparent"
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
      <div className="chat-height overflow-y-auto p-4 custom-scrollbar bg-[#f5f7fb] bg-opacity-60">
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
          <div className="flex items-start mb-4 animate-fade-in">
            <RobotAvatar size="sm" />
            <div className="ml-2 bg-white rounded-lg rounded-tl-none py-3 px-4 shadow-sm">
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
      
      {/* Input Bar */}
      <MessageInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}
