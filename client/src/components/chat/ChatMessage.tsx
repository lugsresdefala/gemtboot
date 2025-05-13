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
      "flex items-start mb-8",
      isBot ? "animate-slide-up" : "justify-end animate-fade-in"
    )}>
      {isBot && (
        <div className="mt-1.5 flex-shrink-0">
          <RobotAvatar size="sm" className="shadow-md" />
        </div>
      )}
      
      <div className={cn(
        "rounded-2xl max-w-3xl", 
        isBot 
          ? "ml-4 bg-white rounded-tl-none border border-purple-100 shadow-md px-5 py-4" 
          : "mr-3 bg-gradient-to-br from-[#E1BEE7] to-[#CE93D8] rounded-tr-none shadow-md px-5 py-4"
      )}>
        <div className={cn(
          "whitespace-pre-line prose prose-purple prose-p:leading-relaxed prose-headings:text-purple-900",
          isBot ? "text-slate-700" : "text-purple-900 font-medium"
        )}>
          {message.content}
        </div>
        
        {/* Show source reference if available */}
        {isBot && message.source && (
          <div className="mt-4 text-xs text-slate-500 flex items-center border-t border-purple-50 pt-3">
            <div className="bg-[#F3E5F5] p-1.5 rounded-md mr-2 text-[#6A1B9A]">
              <i className="fas fa-file-alt"></i>
            </div>
            <span>Fonte: <span className="text-purple-900 font-medium">{message.source}</span></span>
          </div>
        )}
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-[#6A1B9A] to-[#4A148C] flex items-center justify-center text-white shadow-lg mt-1.5">
          <i className="fas fa-user text-xs"></i>
        </div>
      )}
    </div>
  );
}
