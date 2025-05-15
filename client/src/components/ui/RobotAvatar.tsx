import { cn } from "@/lib/utils";
import gemtLogo from "@assets/gemtlogo.png";

interface RobotAvatarProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function RobotAvatar({ 
  size = "md", 
  className 
}: RobotAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8", // Tamanho ajustado
    md: "w-10 h-10", // Tamanho ajustado
    lg: "w-12 h-12" // Tamanho ajustado
  };
  
  return (
    <div 
      className={cn(
        "rounded-full overflow-hidden flex items-center justify-center", // Removed shadow-lg for transparency
        sizeClasses[size],
        className
      )}
    >
      <img 
        src={gemtLogo} 
        alt="Assistente Virtual Logo" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}
