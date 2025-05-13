import { useState, useEffect } from "react";
import FAQItem from "./FAQItem";
import { FAQEntry } from "@/types";
import { fetchFAQs } from "@/lib/api";

interface FAQSectionProps {
  category?: string;
}

export default function FAQSection({ category }: FAQSectionProps) {
  const [faqs, setFaqs] = useState<FAQEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function loadFAQs() {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await fetchFAQs(category);
        setFaqs(data);
      } catch (err) {
        console.error("Error loading FAQs:", err);
        setError("Erro ao carregar as perguntas frequentes.");
      } finally {
        setIsLoading(false);
      }
    }
    
    loadFAQs();
  }, [category]);
  
  if (isLoading) {
    return (
      <div>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-md shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-12 bg-slate-50"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div>
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-sm">
          {error}
        </div>
      </div>
    );
  }
  
  // Show only the first 6 FAQs
  const displayFaqs = faqs.slice(0, 6);
  
  return (
    <div>
      <div className="grid grid-cols-1 gap-3">
        {displayFaqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
        
        {displayFaqs.length === 0 && (
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200 text-center text-slate-600 text-sm">
            Nenhuma pergunta frequente encontrada nesta categoria.
          </div>
        )}
      </div>
    </div>
  );
}
