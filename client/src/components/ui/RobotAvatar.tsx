import { cn } from "@/lib/utils";

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
  
  const iconSize = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-2xl"
  };
  
  return (
    <div 
      className={cn(
        "bg-neutral-dark rounded-full p-1 flex items-center justify-center shadow-lg",
        sizeClasses[size],
        className
      )}
    >
      <div className={cn("text-primary-light", iconSize[size])}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-full h-full"
        >
          <path d="M12 2C9.791 2 8 3.791 8 6v2H5c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2v-8c0-1.105-.895-2-2-2h-3V6c0-2.209-1.791-4-4-4zm0 2c1.103 0 2 .897 2 2v2h-4V6c0-1.103.897-2 2-2zm0 7c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"/>
        </svg>
      </div>
    </div>
  );
}
