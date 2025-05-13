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
      
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="mb-4 text-center">
              <h1 className="text-xl font-bold text-slate-800 mb-2">Informações sobre cuidados em saúde para pessoas trans</h1>
              <p className="text-slate-600 text-sm">
                Tire suas dúvidas sobre fluxos, critérios e acesso a cuidados em saúde para pessoas trans no SUS.
              </p>
            </div>
            
            <div className="mb-8">
              <ChatInterface />
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
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
