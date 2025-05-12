import { Message } from "@/types";
import RobotAvatar from "@/components/ui/RobotAvatar";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === "assistant";
  
  return (
    <div className={cn(
      "flex items-start mb-4",
      isBot ? "animate-slide-up" : "justify-end animate-fade-in"
    )}>
      {isBot && (
        <RobotAvatar size="sm" />
      )}
      
      <div className={cn(
        "rounded-lg p-4 shadow-sm max-w-3xl", 
        isBot ? "ml-2 bg-white rounded-tl-none" : "mr-2 bg-primary bg-opacity-10 rounded-tr-none"
      )}>
        <div className="text-neutral-darkest whitespace-pre-line">
          {message.content}
        </div>
        
        {/* Show source reference if available */}
        {isBot && message.source && (
          <div className="mt-3 text-xs text-neutral flex items-center border-t border-neutral-lightest pt-2">
            <i className="fas fa-file-alt mr-1"></i>
            <span>Fonte: {message.source}</span>
          </div>
        )}
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-white shadow-md">
          <i className="fas fa-user text-xs"></i>
        </div>
      )}
    </div>
  );
}
