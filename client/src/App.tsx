import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Sobre from "@/pages/sobre";
import Contato from "@/pages/contato";
import { Helmet } from "react-helmet";
import SplashScreen from "@/components/ui/SplashScreen";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Removendo splash screen
  const [showSplash, setShowSplash] = useState(false);
  
  const handleSplashComplete = () => {
    setShowSplash(false);
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>GEM-T | Diversidade Barra Funda</title>
          <meta name="description" content="Assistente virtual do Projeto Diversidade Barra Funda para informações sobre cuidados em saúde para pessoas trans no SUS, fluxos, critérios e recomendações." />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta property="og:title" content="GEM-T | Diversidade Barra Funda" />
          <meta property="og:description" content="Assistente virtual do Projeto Diversidade Barra Funda para informações sobre cuidados em saúde para pessoas trans no SUS." />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
        
        {/* Tela de splash com a animação de logo → robô */}
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
