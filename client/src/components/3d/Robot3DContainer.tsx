import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import robotImage from "@assets/Sem título.png";

interface Robot3DContainerProps {
  width?: number;
  height?: number;
  className?: string;
  state?: 'idle' | 'listening' | 'processing' | 'speaking';
}

export default function Robot3DContainer({ 
  width = 300, 
  height = 400, 
  className,
  state = 'idle'
}: Robot3DContainerProps) {
  // Animation state for the robot
  const [animation, setAnimation] = useState<string>('animate-floating');
  
  // Update animation based on the robot state
  useEffect(() => {
    switch(state) {
      case 'speaking':
        setAnimation('animate-pulse');
        break;
      case 'processing':
        setAnimation('animate-spin-slow');
        break;
      case 'listening':
        setAnimation('animate-bounce-light');
        break;
      default:
        setAnimation('animate-floating');
    }
  }, [state]);
  
  // Render robot image with appropriate animation
  return (
    <div 
      className={cn("relative", className)}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        borderRadius: '6px',
        overflow: 'visible',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Pequeno efeito de gradiente sob o robô para criar sensação de estar flutuando */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-transparent via-[#FFD1DC]/40 to-transparent blur-md" />
      
      {/* Robô com filtros de cores baseados na bandeira trans */}
      <img 
        src={robotImage} 
        alt="GEM-T Robot" 
        className={cn("w-auto h-auto max-w-[120%] max-h-[120%] object-contain transform scale-125", animation)}
        style={{ 
          filter: state === 'speaking' ? 'drop-shadow(0 0 8px rgba(255, 209, 220, 0.7))' :
                 state === 'processing' ? 'drop-shadow(0 0 8px rgba(10, 50, 85, 0.7))' :
                 state === 'listening' ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))' :
                 'drop-shadow(0 0 8px rgba(10, 50, 85, 0.6))'
        }}
      />
    </div>
  );
}