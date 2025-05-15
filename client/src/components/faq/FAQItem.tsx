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
    <div className="card-xl overflow-hidden border-purple-100 hover:shadow-lg transition-shadow">
      <button 
        className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[var(--color-faq-button-active)] focus:ring-inset"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-[var(--color-faq-question)] leading-tight pr-4">{faq.question}</h3>
        <div className={cn(
          "flex-shrink-0 h-8 w-8 rounded-full bg-[var(--color-faq-button-bg)] flex items-center justify-center transition-all duration-300",
          isOpen && "bg-[var(--color-faq-button-active)] text-white transform scale-110"
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
          isOpen ? "max-h-[800px]" : "max-h-0"
        )}
      >
        <div className="p-5 border-t border-purple-50 bg-[var(--color-faq-button-bg)]/20">
          <div className="text-slate-700 whitespace-pre-line leading-relaxed prose prose-purple prose-p:leading-relaxed max-w-none">
            {faq.answer}
          </div>
          
          {faq.source && (
            <div className="mt-4 p-4 bg-white rounded-xl border border-purple-100 shadow-sm">
              <div className="text-slate-600 flex items-center">
                <div className="bg-[var(--color-faq-source-bg)] p-2 rounded-lg mr-3 text-[var(--color-faq-source-text)]">
                  <i className="fas fa-info-circle"></i>
                </div>
                <span>Fonte: <span className="text-[var(--color-faq-question)] font-medium">{faq.source}</span></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
