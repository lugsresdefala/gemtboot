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
        <div className="mt-1 flex-shrink-0">
          <RobotAvatar size="sm" />
        </div>
      )}
      
      <div className={cn(
        "rounded-md max-w-[85%]", 
        isBot 
          ? "ml-2 bg-white border border-slate-200 px-3 py-2 rounded-tl-none" 
          : "mr-2 bg-[#0F766E]/10 px-3 py-2 rounded-tr-none"
      )}>
        <div className={cn(
          "whitespace-pre-line text-sm leading-normal",
          isBot ? "text-slate-800" : "text-slate-800"
        )}>
          {message.content}
        </div>
        
        {/* Show source reference if available */}
        {isBot && message.source && (
          <div className="mt-2 text-xs text-slate-500 flex items-center border-t border-slate-100 pt-2">
            <i className="fas fa-file-alt mr-1.5"></i>
            <span>Fonte: {message.source}</span>
          </div>
        )}
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0F766E] flex items-center justify-center text-white mt-1">
          <i className="fas fa-user text-[10px]"></i>
        </div>
      )}
    </div>
  );
}
