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
        <title>GEM-T | CSEBF</title>
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
      
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Header />
        
        <main className="flex-grow">
          <div className="container-app layout-section space-y-section">
            <div className="text-center space-y-element">
              <h1 className="heading-primary mb-3">Informações sobre cuidados em saúde para pessoas trans</h1>
              <p className="text-purple-700 max-w-3xl mx-auto text-lg font-light">
                Tire suas dúvidas sobre fluxos, critérios e acesso a cuidados em saúde para pessoas trans no SUS.
              </p>
            </div>
            
            <div>
              <ChatInterface />
            </div>
            
            <div className="space-y-component">
              <h2 className="heading-secondary text-center">
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
