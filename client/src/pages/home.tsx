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

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#062140] via-[#0A3255] to-[#0F4880] text-white relative overflow-hidden">
        {/* Partículas e efeitos de fundo decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#FFD1DC] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-80 right-10 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-[#0F4880] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YTEyIDEyIDAgMCAxIDEyIDEyaC02eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <Header />

        <main className="flex-grow relative z-10">
          {/* Hero section com design mais dramático */}
          <div className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
            <div className="container-app">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-block mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[#FFD1DC] text-xs font-medium tracking-wider uppercase border border-white/10">
                      ✨ Plataforma Inclusiva
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FFD1DC] to-white animate-gradient">
                    Acolhimento e Informação para Pessoas Trans
                  </h1>

                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                    Informações acessíveis sobre fluxos, critérios e cuidados em
                    saúde para pessoas trans no SUS.
                  </p>
                </div>
              </div>
            </div>

            {/* Chat section com design visual moderno */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#062140] -z-10"></div>
              <div className="container-app">
                <div className="max-w-5xl mx-auto">
                  <div className="relative p-1 rounded-2xl bg-gradient-to-r from-[#FFD1DC] via-white to-[#0A3255] shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FFD1DC] via-white to-[#0A3255] opacity-30 blur-xl -z-10 transform scale-105"></div>
                    <div className="bg-gradient-to-b from-[#062140] to-[#0A3255] rounded-xl overflow-hidden border border-white/5">
                      <ChatInterface />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ section com novo design */}
          <div className="relative bg-[#062140]/80 backdrop-blur-md py-16 md:py-24">
            <div className="container-app space-y-component">
              <div className="text-center mb-12">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[#FFD1DC] text-xs font-medium tracking-wider uppercase border border-white/10 mb-4">
                  Suporte & Auxílio
                </span>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFD1DC]">
                  Perguntas Frequentes
                </h2>
              </div>

              <div className="relative">
                <div className="absolute -top-40 -right-20 w-72 h-72 bg-[#FFD1DC] rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"></div>
                <div className="relative z-10">
                  <FAQSection />
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
