import { cn } from "@/lib/utils";
import gemtLogo from "@assets/ChatGPT Image 12 de mai. de 2025, 11_49_15.png";

interface RobotAvatarProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function RobotAvatar({ 
  size = "md", 
  className 
}: RobotAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };
  
  return (
    <div 
      className={cn(
        "relative flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      {/* Robot SVG wireframe style */}
      <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full"
      >
        {/* Robot head (wireframe style) */}
        <rect x="10" y="8" width="28" height="26" rx="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Antenna */}
        <line x1="24" y1="8" x2="24" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="2" r="1" stroke="currentColor" strokeWidth="2" />
        
        {/* Eyes */}
        <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
        
        {/* Mouth */}
        <path d="M16 28h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Body */}
        <rect x="14" y="34" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
        
        {/* Lines connecting head and body */}
        <line x1="18" y1="34" x2="18" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="34" x2="30" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
