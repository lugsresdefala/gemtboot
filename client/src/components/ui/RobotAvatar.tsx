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
    sm: "w-20 h-20",
    md: "w-24 h-24", 
    lg: "w-32 h-32"
  };
  
  return (
    <div 
      className={cn(
        "flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      <img 
        src={gemtLogo} 
        alt="Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
