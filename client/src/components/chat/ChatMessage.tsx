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
      "flex items-start mb-5",
      isBot ? "" : "justify-end"
    )}>
      {isBot && (
        <div className="mt-1 flex-shrink-0 mr-2">
          <div className="w-6 h-6 bg-[#2C5282] flex items-center justify-center text-white text-[10px]">R</div>
        </div>
      )}
      
      <div className={cn(
        "max-w-3xl", 
        isBot 
          ? "bg-white border-l-2 border-[#2C5282] px-3 py-2" 
          : "bg-gray-50 px-3 py-2"
      )}>
        <div className={cn(
          "whitespace-pre-line prose prose-neutral prose-p:leading-relaxed prose-sm prose-headings:text-gray-800",
          isBot ? "text-gray-700" : "text-gray-800"
        )}>
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
        
        {/* Show source reference if available */}
        {isBot && message.source && (
          <div className="mt-2 text-[10px] text-gray-500">
            <span>Fonte: <span className="text-gray-700">{message.source}</span></span>
          </div>
        )}
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 ml-2 mt-1">
          <div className="w-6 h-6 bg-gray-300 flex items-center justify-center text-white text-[10px]">U</div>
        </div>
      )}
    </div>
  );
}
