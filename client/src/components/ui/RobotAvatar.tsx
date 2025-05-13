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
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };
  
  return (
    <div 
      className={cn(
        "rounded-full overflow-hidden flex items-center justify-center shadow-lg",
        sizeClasses[size],
        className
      )}
    >
      <img 
        src={gemtLogo} 
        alt="GEM-T Logo" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}
