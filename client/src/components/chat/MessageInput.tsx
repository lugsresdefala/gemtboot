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
    <div className="p-3 border-t border-slate-200 bg-white">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <div className="relative flex-grow">
          <input 
            type="text" 
            placeholder="Digite sua dúvida sobre cuidados em saúde..." 
            className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0F766E] focus:border-[#0F766E]"
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
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 h-6 w-6" 
              onClick={() => setMessage("")}
            >
              <X size={14} />
            </Button>
          )}
        </div>
        
        <Button 
          type="submit" 
          size="sm"
          disabled={!message.trim() || isLoading}
          className={`ml-2 px-3 py-2 rounded transition-colors ${
            !message.trim() || isLoading
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-[#0F766E] text-white hover:bg-[#0c5954]"
          }`}
        >
          <Send size={16} className="mr-1" />
          <span className="text-xs">Enviar</span>
        </Button>
      </form>
    </div>
  );
}
