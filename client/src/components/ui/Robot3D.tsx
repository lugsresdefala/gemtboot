import { useState } from 'react';
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
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Função para lidar com o movimento do mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    
    // Calcular posição relativa do mouse
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Transformar para ângulos (-15 a 15 graus)
    const rotateX = (y - 0.5) * -20; // Invertido para movimento natural
    const rotateY = (x - 0.5) * 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  // Resetar rotação quando o mouse sai
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };
  
  // Determinar classe de animação com base no estado
  const stateAnimationClass = 
    state === 'speaking' ? 'animate-talking' : 
    state === 'processing' ? 'animate-processing' : 
    state === 'listening' ? 'animate-listening' : 
    'animate-floating';
  
  // Efeito de brilho baseado no estado
  const glowColor = 
    state === 'speaking' ? 'rgba(0, 255, 255, 0.6)' : 
    state === 'processing' ? 'rgba(255, 0, 255, 0.5)' : 
    state === 'listening' ? 'rgba(0, 149, 255, 0.7)' : 
    'rgba(0, 149, 255, 0.5)';
  
  return (
    <div 
      className={cn("relative robot-container perspective-1000", className)}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        borderRadius: '12px',
        overflow: 'hidden',
        perspective: '1000px',
        cursor: 'move'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={cn("robot-image-wrapper transition-transform duration-200", stateAnimationClass)}
        style={{ 
          width: '100%',
          height: '100%',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <img 
          src={robotImage} 
          alt="GEM-T Robot 3D" 
          className="w-full h-full object-contain"
          style={{ 
            filter: `drop-shadow(0 0 20px ${glowColor})`,
            transform: 'translateZ(20px)',
            transition: 'filter 0.5s ease'
          }}
        />
      </div>
    </div>
  );
}