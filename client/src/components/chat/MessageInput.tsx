import { useState, FormEvent, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Paperclip, X, Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
  isLoading?: boolean;
}

export default function MessageInput({ onSendMessage, isLoading = false }: MessageInputProps) {
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Submit on Enter (but not with Shift+Enter)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  return (
    <div className="p-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
      <form className="flex items-center max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <Button 
          type="button" 
          variant="ghost" 
          size="icon"
          className="text-gray-400 hover:text-gray-600 transition-colors rounded-md hover-scale" 
          title="Enviar arquivo"
        >
          <Paperclip size={18} />
        </Button>
        
        <div className="relative flex-grow mx-3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="h-4 w-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
          <input 
            type="text" 
            placeholder="Digite sua dúvida sobre cuidados em saúde para pessoas trans..." 
            className="input-field pl-10 pr-10 bg-gray-50 border-[#FFD1DC]/30 focus:border-[#0A3255] focus:ring-[#0A3255]/20"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          
          {message && (
            <Button 
              type="button" 
              variant="ghost"
              size="icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors bg-transparent rounded-md hover-scale" 
              title="Limpar"
              onClick={() => setMessage("")}
            >
              <X size={14} />
            </Button>
          )}
        </div>
        
        <Button 
          type="submit" 
          size="icon"
          disabled={!message.trim() || isLoading}
          className={`p-2.5 rounded-md hover-scale ${
            !message.trim() || isLoading
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#FFD1DC] to-[#0A3255] text-white shadow-md hover:shadow-lg hover:shadow-[#FFD1DC]/20 transition-all duration-300" 
          }`}
        >
          <Send size={16} className="animate-pulse" />
        </Button>
      </form>
    </div>
  );
}
