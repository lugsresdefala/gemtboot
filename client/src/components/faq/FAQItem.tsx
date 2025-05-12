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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button 
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-neutral-darkest">{faq.question}</h3>
        <ChevronDown 
          className={cn(
            "text-neutral-light transition-transform duration-300",
            isOpen && "transform rotate-180"
          )} 
          size={18}
        />
      </button>
      
      <div 
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="p-4 border-t border-neutral-lightest">
          <div className="text-neutral-dark whitespace-pre-line">
            {faq.answer}
          </div>
          
          {faq.source && (
            <div className="mt-3 p-3 bg-neutral-lightest rounded-lg">
              <p className="text-neutral-dark text-sm">
                <i className="fas fa-info-circle text-primary-dark mr-1"></i> 
                Fonte: {faq.source}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
