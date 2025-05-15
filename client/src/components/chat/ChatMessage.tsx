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
      "flex items-start space-stack-lg",
      isBot ? "animate-slide-up" : "justify-end animate-fade-in"
    )}>
      {isBot && (
        <div className="mt-1 flex-shrink-0 hover-glow">
          <RobotAvatar size="sm" className="shadow-sm" />
        </div>
      )}
      
      <div className={cn(
        "rounded-md max-w-3xl", 
        isBot 
          ? "ml-3 bg-white rounded-tl-none border border-gray-200 shadow-md px-4 py-3 animate-scale-in" 
          : "mr-3 bg-gray-100 rounded-tr-none shadow-md px-4 py-3 animate-slide-in-left"
      )}>
        <div className={cn(
          "whitespace-pre-line prose prose-neutral prose-p:leading-relaxed prose-headings:text-gray-800",
          isBot ? "text-body" : "text-body font-medium"
        )}>
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
        
        {/* Show source reference if available */}
        {isBot && message.source && (
          <div className="mt-3 text-caption flex items-center border-t border-gray-100 pt-2">
            <div className="badge badge-outline mr-2">
              <i className="fas fa-file-alt space-inline-xs"></i>
              Fonte
            </div>
            <span className="text-gray-700 font-medium">{message.source}</span>
          </div>
        )}
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] flex-center text-white shadow-md mt-1 hover-glow">
          <i className="fas fa-user text-xs"></i>
        </div>
      )}
    </div>
  );
}
