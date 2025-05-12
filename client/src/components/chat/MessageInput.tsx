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
    <div className="p-4 border-t border-neutral-light bg-white">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <Button 
          type="button" 
          variant="ghost" 
          size="icon"
          className="text-neutral-light hover:text-primary transition-colors" 
          title="Enviar arquivo"
        >
          <Paperclip size={20} />
        </Button>
        
        <div className="relative flex-grow mx-2">
          <input 
            type="text" 
            placeholder="Digite sua dúvida sobre o Processo Transexualizador..." 
            className="w-full py-3 px-4 bg-neutral-lightest border border-neutral-light rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-light hover:text-primary transition-colors bg-transparent" 
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
          className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-colors shadow-sm"
        >
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
}
