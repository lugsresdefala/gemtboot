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
    <div className="p-4 border-t border-gray-200 bg-white">
      <form className="flex items-center max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <Button 
          type="button" 
          variant="ghost" 
          size="icon"
          className="text-gray-400 hover:text-[#1976d2] transition-colors" 
          title="Enviar arquivo"
        >
          <Paperclip size={20} />
        </Button>
        
        <div className="relative flex-grow mx-3">
          <input 
            type="text" 
            placeholder="Digite sua dúvida sobre o Processo Transexualizador..." 
            className="w-full py-3 px-5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1976d2] focus:border-transparent transition-all shadow-sm"
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
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors bg-transparent" 
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
          className={`p-3 rounded-full transition-all duration-200 ${
            !message.trim() || isLoading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#1976d2] hover:bg-[#1565c0] text-white shadow-md"
          }`}
        >
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
}
