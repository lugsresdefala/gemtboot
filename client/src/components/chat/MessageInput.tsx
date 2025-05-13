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
    <div className="p-5 border-t border-purple-100 bg-white">
      <form className="flex items-center max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <Button 
          type="button" 
          variant="ghost" 
          size="icon"
          className="text-purple-300 hover:text-[#6A1B9A] transition-colors rounded-full" 
          title="Enviar arquivo"
        >
          <Paperclip size={20} />
        </Button>
        
        <div className="relative flex-grow mx-3">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <div className="h-5 w-5 text-purple-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
          <input 
            type="text" 
            placeholder="Digite sua dúvida sobre cuidados em saúde para pessoas trans..." 
            className="w-full py-3 pl-12 pr-10 bg-[#F3E5F5]/50 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6A1B9A] focus:border-transparent transition-all shadow-sm hover:shadow-md"
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
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-purple-600 transition-colors bg-transparent rounded-full" 
              title="Limpar"
              onClick={() => setMessage("")}
            >
              <X size={16} />
            </Button>
          )}
        </div>
        
        <Button 
          type="submit" 
          size="icon"
          disabled={!message.trim() || isLoading}
          className={`p-3.5 rounded-full transition-all duration-300 ${
            !message.trim() || isLoading
              ? "bg-purple-100 text-purple-300 cursor-not-allowed"
              : "bg-gradient-to-r from-[#4A148C] to-[#6A1B9A] text-white shadow-md hover:shadow-lg hover:scale-105 transform"
          }`}
        >
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
}
