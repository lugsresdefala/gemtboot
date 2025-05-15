import { cn } from '@/lib/utils';
import robotImage from "@assets/Sem título.png";

interface Robot3DProps {
  width?: number;
  height?: number;
  className?: string;
  state?: 'idle' | 'listening' | 'processing' | 'speaking';
}

export default function Robot3D({ 
  width = 300, 
  height = 300, 
  className,
  state = 'idle'
}: Robot3DProps) {
  // Classes baseadas no estado
  const stateClass = 
    state === 'speaking' ? 'animate-pulse' : 
    state === 'processing' ? 'animate-spin-slow' : 
    state === 'listening' ? 'animate-bounce-light' : 
    'animate-floating';
  
  return (
    <div 
      className={cn("relative", className)}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        borderRadius: '12px',
        overflow: 'visible',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img 
        src={robotImage} 
        alt="GEM-T Robot" 
        className={cn("w-auto h-auto max-w-full max-h-full object-contain", stateClass)}
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(0, 149, 255, 0.6))'
        }}
      />
    </div>
  );
}