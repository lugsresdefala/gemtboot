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
        <div className="mt-1 flex-shrink-0">
          <RobotAvatar size="sm" className="shadow-sm" />
        </div>
      )}
      
      <div className={cn(
        "rounded-md max-w-3xl", 
        isBot 
          ? "ml-3 bg-white rounded-tl-none border border-gray-200 shadow-sm px-4 py-3" 
          : "mr-3 bg-gray-100 rounded-tr-none shadow-sm px-4 py-3"
      )}>
        <div className={cn(
          "whitespace-pre-line prose prose-neutral prose-p:leading-relaxed prose-headings:text-gray-800",
          isBot ? "text-gray-700" : "text-gray-800"
        )}>
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
        
        {/* Show source reference if available */}
        {isBot && message.source && (
          <div className="mt-3 text-xs text-gray-500 flex items-center border-t border-gray-100 pt-2">
            <div className="bg-gray-100 p-1 rounded mr-2 text-gray-600">
              <i className="fas fa-file-alt"></i>
            </div>
            <span>Fonte: <span className="text-gray-700 font-medium">{message.source}</span></span>
          </div>
        )}
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A365D] flex items-center justify-center text-white shadow-sm mt-1">
          <i className="fas fa-user text-xs"></i>
        </div>
      )}
    </div>
  );
}
