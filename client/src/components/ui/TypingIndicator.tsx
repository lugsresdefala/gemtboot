import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingIndicatorProps {
  className?: string;
  visible?: boolean;
}

export default function TypingIndicator({
  className,
  visible = true,
}: TypingIndicatorProps) {
  const [dots, setDots] = useState<number[]>([0, 1, 2]);

  useEffect(() => {
    if (!visible) return;

    // Add animation to simulate natural typing rhythm
    const interval = setInterval(() => {
      setDots((prev) => {
        // Randomly skip a dot occasionally for natural effect
        if (Math.random() > 0.85) {
          const skip = Math.floor(Math.random() * 3);
          return prev.filter((_, i) => i !== skip);
        }
        // Make sure we have all 3 dots
        if (prev.length < 3) {
          const missing = [0, 1, 2].filter((n) => !prev.includes(n));
          return [...prev, ...missing];
        }
        return [0, 1, 2];
      });
    }, 300);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={cn("typing-indicator flex items-center", className)}>
      {dots.map((dot) => (
        <span
          key={dot}
          style={{
            animationDelay: `${dot * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}
