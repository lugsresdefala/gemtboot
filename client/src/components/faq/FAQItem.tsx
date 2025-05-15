import { useState } from "react";
import { FAQEntry } from "@/types";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface FAQItemProps {
  faq: FAQEntry;
}

export default function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="glass-dark backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
      <button 
        className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-pink-500/50 group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className={cn(
          "font-medium text-white/90 leading-tight pr-4 transition-all duration-300 group-hover:text-white",
          isOpen && "text-[#FFD1DC]"
        )}>
          {faq.question}
        </h3>
        
        <div className={cn(
          "flex-shrink-0 h-9 w-9 rounded-full bg-[#0A3255]/30 flex items-center justify-center transition-all duration-500 border border-white/10",
          isOpen ? "bg-gradient-to-r from-[#FFD1DC] to-[#0A3255] text-white transform rotate-[360deg]" : "group-hover:bg-[#0A3255]/50"
        )}>
          <ChevronDown 
            className={cn(
              "transition-transform duration-500",
              isOpen && "transform rotate-180"
            )} 
            size={18}
          />
        </div>
      </button>
      
      <div 
        className={cn(
          "transition-all duration-500 overflow-hidden",
          isOpen ? "max-h-[800px]" : "max-h-0"
        )}
      >
        <div className="p-6 border-t border-white/5 bg-gradient-to-b from-[#0A3255]/30 to-[#062140]/30">
          <div className="text-white/90 whitespace-pre-line leading-relaxed prose prose-invert prose-p:leading-relaxed max-w-none">
            <ReactMarkdown>{faq.answer}</ReactMarkdown>
          </div>
          
          {faq.source && (
            <div className="mt-5 p-4 glass rounded-xl border border-white/5 animate-pulse-glow">
              <div className="text-white/90 flex items-center">
                <div className="bg-gradient-to-r from-[#FFD1DC] to-[#0A3255] p-2 rounded-lg mr-3 text-white">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div>
                  <span className="text-[#FFD1DC] text-sm">Fonte</span>
                  <span className="block text-white/90 font-medium">{faq.source}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
