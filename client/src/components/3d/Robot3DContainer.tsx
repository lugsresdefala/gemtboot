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
  height = 300, 
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
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #051622, #072a43)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img 
        src={robotImage} 
        alt="GEM-T Robot" 
        className={cn("w-auto h-auto max-w-full max-h-full object-contain", animation)}
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(0, 149, 255, 0.6))'
        }}
      />
    </div>
  );
}