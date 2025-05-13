import { cn } from '@/lib/utils';
import robotImage from "@assets/Sem título.png";

interface Robot3DProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Robot3D({ width = 300, height = 300, className }: Robot3DProps) {
  return (
    <div 
      className={cn("relative robot-image-container animate-floating", className)}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    >
      <img 
        src={robotImage} 
        alt="GEM-T Robot 3D" 
        className="w-full h-full object-contain hover:scale-105 transition-all duration-300"
        style={{ 
          filter: 'drop-shadow(0 0 15px rgba(0, 149, 255, 0.5))'
        }}
      />
    </div>
  );
}