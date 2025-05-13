import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import robotImage from "@assets/Sem título.png";

interface SplashScreenProps {
  onComplete?: () => void;
  className?: string;
}

export default function SplashScreen({ onComplete, className }: SplashScreenProps) {
  const [stage, setStage] = useState<'logo' | 'transition' | 'robot' | 'complete'>('logo');
  
  useEffect(() => {
    // Logo stage (initial)
    const logoTimer = setTimeout(() => {
      setStage('transition');
    }, 1500);
    
    return () => clearTimeout(logoTimer);
  }, []);
  
  useEffect(() => {
    if (stage === 'transition') {
      // Transition stage
      const transitionTimer = setTimeout(() => {
        setStage('robot');
      }, 1200);
      
      return () => clearTimeout(transitionTimer);
    }
    
    if (stage === 'robot') {
      // Robot stage (final animation)
      const robotTimer = setTimeout(() => {
        setStage('complete');
        if (onComplete) onComplete();
      }, 1800);
      
      return () => clearTimeout(robotTimer);
    }
  }, [stage, onComplete]);
  
  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-primary-900 to-primary-950",
      stage === 'complete' && "opacity-0 pointer-events-none transition-opacity duration-500",
      className
    )}>
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Logo (G com círculo) */}
        <div className={cn(
          "absolute w-32 h-32 rounded-full border-8 border-primary-300 flex items-center justify-center transition-all duration-1000 ease-in-out",
          stage === 'logo' ? "opacity-100 scale-100" : 
          stage === 'transition' ? "opacity-80 scale-150 border-primary-400" : 
          "opacity-0 scale-200"
        )}>
          <span className={cn(
            "text-6xl font-bold text-primary-300 transition-all duration-1000", 
            stage === 'logo' ? "opacity-100" : 
            stage === 'transition' ? "opacity-70 scale-110 rotate-45" : 
            "opacity-0 scale-150 rotate-90"
          )}>
            G
          </span>
        </div>
        
        {/* Elementos de transição (pontos que se formam em partes do robô) */}
        <div className={cn(
          "absolute inset-0 transition-all duration-1000",
          stage === 'transition' ? "opacity-100" : "opacity-0"
        )}>
          {/* Pontos que se transformam na cabeça */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 w-3 h-3 bg-secondary-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-1/4 right-1/3 transform translate-x-1/2 w-3 h-3 bg-secondary-400 rounded-full animate-pulse delay-100"></div>
          
          {/* Pontos que se transformam no corpo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 w-2 h-2 bg-primary-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 w-2 h-2 bg-primary-400 rounded-full animate-pulse delay-300"></div>
          
          {/* Pontos que se transformam nas pernas */}
          <div className="absolute bottom-1/4 left-2/5 transform -translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full animate-pulse delay-400"></div>
          <div className="absolute bottom-1/4 right-2/5 transform translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full animate-pulse delay-400"></div>
        </div>
        
        {/* Robô (aparece no final) */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-1000",
          stage === 'robot' || stage === 'complete' ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}>
          <img 
            src={robotImage} 
            alt="GEM-T Robot" 
            className={cn(
              "w-auto h-auto max-w-full max-h-full object-contain",
              stage === 'robot' && "animate-bounce-light"
            )}
            style={{
              filter: 'drop-shadow(0 0 20px rgba(0, 149, 255, 0.6))'
            }}
          />
        </div>
        
        {/* Texto que aparece durante a animação */}
        <div className={cn(
          "absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center text-white font-medium transition-all duration-500",
          stage === 'logo' ? "opacity-100" : 
          stage === 'transition' ? "opacity-100 -translate-y-4" : 
          stage === 'robot' ? "opacity-100 -translate-y-8" : 
          "opacity-0"
        )}>
          {stage === 'logo' && "Carregando GEM-T..."}
          {stage === 'transition' && "Inicializando sistemas..."}
          {stage === 'robot' && "Bem-vindo(a) ao GEM-T"}
        </div>
      </div>
    </div>
  );
}