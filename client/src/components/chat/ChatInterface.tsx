import { useEffect, useRef, useState } from "react";
import TopicPills from "./TopicPills";
import MessageInput from "./MessageInput";
import ChatMessage from "./ChatMessage";
import { useChat } from "@/hooks/use-chat";
import { Button } from "@/components/ui/button";
import { Trash, Settings, Maximize2, Minimize2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Message } from "@/types";
import RobotAvatar from "@/components/ui/RobotAvatar";
import Robot3D from "@/components/3d/Robot3DContainer";
import TypingIndicator from "@/components/ui/TypingIndicator";

export default function ChatInterface() {
  const { messages, sendMessage, clearConversation, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showRobot3D, setShowRobot3D] = useState(true);
  
  // Initial welcome message
  const welcomeMessage: Message = {
    id: 0,
    role: "assistant",
    content: `Olá! Sou a assistente virtual para informações sobre cuidados em saúde para pessoas trans no SUS.

Posso ajudar com:

• Fluxos de atendimento no sistema de saúde
• Critérios e documentos para intervenções de mudança corporal
• Locais de atendimento e unidades de referência
• Direitos na área da saúde

Como posso ajudar você hoje?`,
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
    <div className="bg-white overflow-hidden border border-gray-200">
      {/* Top bar minimalista e profissional */}
      <div className="p-2 bg-[#2C5282] text-white flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <h2 className="font-medium text-sm">diversidadebarrafunda.org</h2>
          </div>
        </div>
        
        <div className="flex">
          <Button 
            onClick={clearConversation} 
            variant="ghost" 
            size="sm" 
            className="text-white text-xs"
          >
            Nova conversa
          </Button>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="chat-height overflow-y-auto px-4 py-5 bg-white h-[450px]">
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
          
          {/* Loading indicator com design mais sóbrio */}
          {isLoading && (
            <div className="flex items-start mb-6 animate-fade-in">
              <div className="mt-1.5 flex-shrink-0">
                <RobotAvatar size="sm" className="shadow-sm" />
              </div>
              <div className="ml-3 bg-white rounded-md rounded-tl-none py-3 px-4 border border-gray-200 shadow-sm">
                <TypingIndicator visible={isLoading} />
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
