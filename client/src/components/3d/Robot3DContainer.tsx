import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import robotImage from "@assets/Sem título.png";

interface Robot3DContainerProps {
  width?: number;
  height?: number;
  className?: string;
  state?: "idle" | "listening" | "processing" | "speaking";
}

export default function Robot3DContainer({
  width = 300,
  height = 300,
  className,
  state = "idle",
}: Robot3DContainerProps) {
  // Animation state for the robot
  const [animation, setAnimation] = useState<string>("animate-floating");

  // Update animation based on the robot state
  useEffect(() => {
    switch (state) {
      case "speaking":
        setAnimation("animate-pulse");
        break;
      case "processing":
        setAnimation("animate-spin-slow");
        break;
      case "listening":
        setAnimation("animate-bounce-light");
        break;
      default:
        setAnimation("animate-floating");
    }
  }, [state]);

  // Render robot image with appropriate animation
  return (
    <div
      className={cn("relative", className)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "16px",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, hsl(217, 33%, 17%), hsl(215, 35%, 23%))",
        boxShadow: "var(--card-shadow)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid hsla(207, 90%, 50%, 0.2)",
      }}
    >
      {/* Elementos decorativos inspirados nas cores da bandeira trans */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(207,90%,64%)] via-[hsl(0,0%,95%)] to-[hsl(340,75%,65%)]" />

      {/* Robô com filtros de cores baseados na bandeira trans */}
      <img
        src={robotImage}
        alt="GEM-T Robot"
        className={cn(
          "w-auto h-auto max-w-full max-h-[90%] object-contain",
          animation,
        )}
        style={{
          filter:
            state === "speaking"
              ? "drop-shadow(var(--glow-pink-trans))"
              : state === "processing"
                ? "drop-shadow(var(--glow-blue-trans))"
                : state === "listening"
                  ? "drop-shadow(var(--glow-white-trans))"
                  : "drop-shadow(var(--glow-blue-trans))",
        }}
      />
    </div>
  );
}
