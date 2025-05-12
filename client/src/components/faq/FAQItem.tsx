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
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow">
      <button 
        className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#1565c0] focus:ring-inset"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-slate-800 leading-tight pr-4">{faq.question}</h3>
        <div className={cn(
          "flex-shrink-0 h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center transition-all duration-300",
          isOpen && "bg-[#1565c0] text-white"
        )}>
          <ChevronDown 
            className={cn(
              "transition-transform duration-300",
              isOpen && "transform rotate-180"
            )} 
            size={18}
          />
        </div>
      </button>
      
      <div 
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="p-5 border-t border-slate-100 bg-slate-50/30">
          <div className="text-slate-700 whitespace-pre-line leading-relaxed">
            {faq.answer}
          </div>
          
          {faq.source && (
            <div className="mt-4 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
              <p className="text-slate-600 text-sm flex items-center">
                <div className="bg-[#e3f2fd] p-1.5 rounded-md mr-2 text-[#1565c0]">
                  <i className="fas fa-info-circle"></i>
                </div>
                <span>Fonte: <span className="font-medium">{faq.source}</span></span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
