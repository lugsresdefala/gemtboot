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
    <div className="bg-white rounded-md shadow-sm overflow-hidden border border-slate-200 hover:shadow transition-shadow">
      <button 
        className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-[#0F766E] focus:ring-inset"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-slate-800 text-sm leading-tight pr-3">{faq.question}</h3>
        <div className={cn(
          "flex-shrink-0 h-6 w-6 rounded bg-slate-100 flex items-center justify-center transition-all",
          isOpen && "bg-[#0F766E] text-white"
        )}>
          <ChevronDown 
            className={cn(
              "transition-transform",
              isOpen && "transform rotate-180"
            )} 
            size={16}
          />
        </div>
      </button>
      
      <div 
        className={cn(
          "transition-all duration-200 overflow-hidden",
          isOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <div className="text-slate-700 text-sm whitespace-pre-line leading-relaxed">
            {faq.answer}
          </div>
          
          {faq.source && (
            <div className="mt-4 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
              <div className="text-slate-600 text-sm flex items-center">
                <span className="bg-[#0F766E]/10 p-1.5 rounded-md mr-2 text-[#0F766E]">
                  <i className="fas fa-info-circle"></i>
                </span>
                <span>Fonte: <span className="font-medium">{faq.source}</span></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
