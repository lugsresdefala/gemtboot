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
      "flex items-start mb-6",
      isBot ? "animate-slide-up" : "justify-end animate-fade-in"
    )}>
      {isBot && (
        <RobotAvatar size="sm" className="mt-1" />
      )}
      
      <div className={cn(
        "rounded-xl p-4 max-w-3xl", 
        isBot 
          ? "ml-3 bg-white rounded-tl-none border border-gray-200 shadow-sm" 
          : "mr-2 bg-[#e3f2fd] rounded-tr-none"
      )}>
        <ReactMarkdown className="text-gray-800 whitespace-pre-line prose prose-sm">
          {message.content}
        </ReactMarkdown>
        
        {/* Show source reference if available */}
        {isBot && message.source && (
          <div className="mt-3 text-xs text-gray-500 flex items-center border-t border-gray-100 pt-2">
            <i className="fas fa-file-alt mr-2"></i>
            <span>Fonte: {message.source}</span>
          </div>
        )}
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1976d2] flex items-center justify-center text-white shadow-md">
          <i className="fas fa-user text-xs"></i>
        </div>
      )}
    </div>
  );
}
