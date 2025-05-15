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
    <div className="p-3 border-t border-gray-200 bg-white">
      <form className="flex items-center max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <div className="relative flex-grow">
          <input 
            type="text" 
            placeholder="Digite sua dúvida..." 
            className="w-full py-2 pl-3 pr-8 bg-white border-b border-gray-300 focus:outline-none focus:border-[#2C5282]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          
          {message && (
            <Button 
              type="button" 
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 p-0" 
              onClick={() => setMessage("")}
            >
              <X size={12} />
            </Button>
          )}
        </div>
        
        <Button 
          type="submit" 
          size="sm"
          disabled={!message.trim() || isLoading}
          className={`ml-2 ${
            !message.trim() || isLoading
              ? "bg-gray-100 text-gray-400"
              : "bg-[#2C5282] text-white"
          }`}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
