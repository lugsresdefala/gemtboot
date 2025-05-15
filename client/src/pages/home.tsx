import { Helmet } from "react-helmet";
import ChatInterface from "@/components/chat/ChatInterface";
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
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-4xl px-4">
            <ChatInterface />
          </div>
        </main>
      </div>
    </>
  );
}
