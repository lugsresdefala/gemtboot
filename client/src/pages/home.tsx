import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatInterface from "@/components/chat/ChatInterface";
import FAQSection from "@/components/faq/FAQSection";
import { Script } from "@/components/ui/script";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GEM-T | Diversidade Barra Funda</title>
      </Helmet>
      
      {/* Font Awesome Script */}
      <Script>
        {`
          // Load Font Awesome
          (function() {
            const css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            css.integrity = 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==';
            css.crossOrigin = 'anonymous';
            css.referrerPolicy = 'no-referrer';
            document.head.appendChild(css);
          })();
        `}
      </Script>
      
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <Header />
        
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <div className="mb-3 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Assistente de Saúde Trans no SUS</h1>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Tire suas dúvidas sobre fluxos, critérios e orientações relacionadas ao cuidado em saúde para pessoas trans.
              </p>
            </div>
            
            <div className="mt-6 mb-16">
              <ChatInterface />
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 text-center">
                Perguntas Frequentes
              </h2>
              <FAQSection />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
