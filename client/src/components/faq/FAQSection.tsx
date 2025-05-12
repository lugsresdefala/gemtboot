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
      <div className="mt-8 mb-4">
        <h2 className="text-xl font-semibold text-neutral-darkest mb-4">Perguntas Frequentes</h2>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-14 bg-neutral-lightest"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="mt-8 mb-4">
        <h2 className="text-xl font-semibold text-neutral-darkest mb-4">Perguntas Frequentes</h2>
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }
  
  // Show only the first 5 FAQs
  const displayFaqs = faqs.slice(0, 5);
  
  return (
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-semibold text-neutral-darkest mb-4">Perguntas Frequentes</h2>
      
      <div className="space-y-4">
        {displayFaqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
        
        {displayFaqs.length === 0 && (
          <div className="bg-neutral-lightest p-4 rounded-lg text-center text-neutral-dark">
            Nenhuma pergunta frequente encontrada nesta categoria.
          </div>
        )}
      </div>
    </div>
  );
}
