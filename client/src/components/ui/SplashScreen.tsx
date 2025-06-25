import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import robotImage from "@assets/Sem título.png";
import "@/components/ui/animation.css";

interface SplashScreenProps {
  onComplete?: () => void;
  className?: string;
}

export default function SplashScreen({
  onComplete,
  className,
}: SplashScreenProps) {
  const [stage, setStage] = useState<
    "logo" | "transition" | "robot" | "complete"
  >("logo");

  useEffect(() => {
    // Logo stage (initial)
    const logoTimer = setTimeout(() => {
      setStage("transition");
    }, 1500);

    return () => clearTimeout(logoTimer);
  }, []);

  useEffect(() => {
    if (stage === "transition") {
      // Transition stage
      const transitionTimer = setTimeout(() => {
        setStage("robot");
      }, 1200);

      return () => clearTimeout(transitionTimer);
    }

    if (stage === "robot") {
      // Robot stage (final animation)
      const robotTimer = setTimeout(() => {
        setStage("complete");
        if (onComplete) onComplete();
      }, 1800);

      return () => clearTimeout(robotTimer);
    }
  }, [stage, onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-primary-900 to-primary-950",
        stage === "complete" &&
          "opacity-0 pointer-events-none transition-opacity duration-500",
        className,
      )}
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Logo (G com círculo) */}
        <div
          className={cn(
            "absolute w-32 h-32 rounded-full border-8 border-primary-300 flex items-center justify-center transition-all duration-1000 ease-in-out",
            stage === "logo"
              ? "opacity-100 scale-100 animate-pulse-subtle"
              : stage === "transition"
                ? "opacity-80 scale-150 border-primary-400 animate-scale-up"
                : "opacity-0 scale-200",
          )}
        >
          <span
            className={cn(
              "text-6xl font-bold text-primary-300 transition-all duration-1000",
              stage === "logo"
                ? "opacity-100"
                : stage === "transition"
                  ? "opacity-70 scale-110 rotate-45"
                  : "opacity-0 scale-150 rotate-90",
            )}
          >
            G
          </span>
        </div>

        {/* Container para a transformação do logo ao robô */}
        <div
          className={cn(
            "absolute w-48 h-48 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            stage === "transition" ? "animate-logo-to-robot" : "opacity-0",
            stage === "robot" ? "hidden" : "",
          )}
        ></div>

        {/* Elementos de transição (pontos que se formam em partes do robô) */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-1000",
            stage === "transition" ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Pontos que se transformam na cabeça */}
          <div
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-300 rounded-full animate-light-point"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="absolute top-1/4 left-1/3 transform -translate-x-1/2 w-3 h-3 bg-secondary-400 rounded-full animate-light-point"
            style={{ animationDelay: "100ms" }}
          ></div>
          <div
            className="absolute top-1/4 right-1/3 transform translate-x-1/2 w-3 h-3 bg-secondary-400 rounded-full animate-light-point"
            style={{ animationDelay: "150ms" }}
          ></div>

          {/* Pontos que se transformam no corpo */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full animate-light-point"
            style={{ animationDelay: "200ms" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 transform -translate-x-1/2 w-2 h-2 bg-primary-400 rounded-full animate-light-point"
            style={{ animationDelay: "300ms" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 transform translate-x-1/2 w-2 h-2 bg-primary-400 rounded-full animate-light-point"
            style={{ animationDelay: "350ms" }}
          ></div>

          {/* Pontos que se transformam nas pernas */}
          <div
            className="absolute bottom-1/4 left-2/5 transform -translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full animate-light-point"
            style={{ animationDelay: "400ms" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-2/5 transform translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full animate-light-point"
            style={{ animationDelay: "450ms" }}
          ></div>
        </div>

        {/* SVG outline que precede o robô completo */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            stage === "transition" ? "opacity-100" : "opacity-0",
          )}
        >
          <svg
            width="120"
            height="160"
            viewBox="0 0 120 160"
            fill="none"
            className={cn(
              "absolute z-10",
              stage === "transition" ? "animate-outline-appear" : "",
            )}
          >
            <path
              d="M60 20 C 40 20, 30 30, 30 40 L 30 100 C 30 110, 40 120, 60 120 C 80 120, 90 110, 90 100 L 90 40 C 90 30, 80 20, 60 20 Z"
              stroke="#009dff"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="60"
              cy="30"
              r="20"
              stroke="#009dff"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="40"
              y1="60"
              x2="20"
              y2="70"
              stroke="#009dff"
              strokeWidth="2"
            />
            <line
              x1="80"
              y1="60"
              x2="100"
              y2="70"
              stroke="#009dff"
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="120"
              x2="45"
              y2="140"
              stroke="#009dff"
              strokeWidth="2"
            />
            <line
              x1="70"
              y1="120"
              x2="75"
              y2="140"
              stroke="#009dff"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Robô (aparece no final) */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-1000",
            stage === "robot" || stage === "complete"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-50",
          )}
        >
          <img
            src={robotImage}
            alt="GEM-T Robot"
            className={cn(
              "w-auto h-auto max-w-full max-h-full object-contain",
              stage === "robot" && "animate-float",
            )}
            style={{
              filter: "drop-shadow(0 0 20px rgba(0, 149, 255, 0.6))",
            }}
          />
        </div>

        {/* Texto que aparece durante a animação */}
        <div
          className={cn(
            "absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center text-white font-medium transition-all duration-500",
            stage === "logo"
              ? "opacity-100"
              : stage === "transition"
                ? "opacity-100 -translate-y-4"
                : stage === "robot"
                  ? "opacity-100 -translate-y-8"
                  : "opacity-0",
          )}
        >
          {stage === "logo" && "Carregando GEM-T..."}
          {stage === "transition" && "Inicializando sistemas..."}
          {stage === "robot" && "Bem-vindo(a) ao GEM-T"}
        </div>
      </div>
    </div>
  );
}
