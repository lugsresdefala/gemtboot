import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function RobotModel(props) {
  const group = useRef();
  
  // Animate the robot
  useFrame((state) => {
    if (!group.current) return;

    // Floating animation
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t) * 0.1;
    
    // Gentle rotation
    if (props.state === 'processing') {
      group.current.rotation.y += 0.01;
    } else {
      // Subtle head movement
      group.current.rotation.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Head */}
      <mesh castShadow receiveShadow position={[0, 1, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#0070de" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Face/Visor */}
      <mesh castShadow receiveShadow position={[0, 1, 0.25]} rotation={[0, Math.PI, 0]}>
        <sphereGeometry args={[0.8, 32, 32, 0, Math.PI, 0, Math.PI]} />
        <meshStandardMaterial color="#000000" metalness={0.3} roughness={0.1} />
      </mesh>
      
      {/* Left Eye */}
      <mesh castShadow position={[-0.3, 1.1, 0.85]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.15, 0.05, 16, 100, Math.PI]} />
        <meshBasicMaterial color="#00ffff" />
      </mesh>
      
      {/* Right Eye */}
      <mesh castShadow position={[0.3, 1.1, 0.85]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.15, 0.05, 16, 100, Math.PI]} />
        <meshBasicMaterial color="#00ffff" />
      </mesh>
      
      {/* Mouth - animated based on speaking state */}
      <mesh 
        castShadow 
        position={[0, 0.8, 0.85]} 
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, props.state === 'speaking' ? 0.5 + Math.sin(Date.now() * 0.01) * 0.5 : 1, 1]}
      >
        <torusGeometry args={[0.3, 0.05, 16, 100, Math.PI]} />
        <meshBasicMaterial color="#00ffff" />
      </mesh>
      
      {/* Antenna */}
      <mesh castShadow position={[0, 2.15, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
        <meshStandardMaterial color="#0070de" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Antenna Ball - animated based on listening state */}
      <mesh 
        castShadow 
        position={[0, 2.5, 0]} 
        scale={props.state === 'listening' ? [1 + Math.sin(Date.now() * 0.005) * 0.3, 1 + Math.sin(Date.now() * 0.005) * 0.3, 1 + Math.sin(Date.now() * 0.005) * 0.3] : [1, 1, 1]}
      >
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#00ffff" />
      </mesh>
      
      {/* Body */}
      <mesh castShadow receiveShadow position={[0, -0.5, 0]}>
        <boxGeometry args={[1.8, 1.2, 1]} />
        <meshStandardMaterial color="#0063c7" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Transgender Symbol */}
      <group position={[0, -0.5, 0.51]}>
        {/* Circle */}
        <mesh castShadow>
          <ringGeometry args={[0.4, 0.45, 32]} />
          <meshBasicMaterial color="#ff00ff" />
        </mesh>
        
        {/* Cross */}
        <mesh castShadow position={[0, -0.25, 0]}>
          <boxGeometry args={[0.05, 0.5, 0.01]} />
          <meshBasicMaterial color="#ff00ff" />
        </mesh>
        
        {/* Left Arrow */}
        <mesh castShadow position={[-0.25, 0.25, 0]} rotation={[0, 0, Math.PI/4]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
          <meshBasicMaterial color="#ff00ff" />
        </mesh>
        
        {/* Right Arrow */}
        <mesh castShadow position={[0.25, 0.25, 0]} rotation={[0, 0, -Math.PI/4]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
          <meshBasicMaterial color="#ff00ff" />
        </mesh>
      </group>
      
      {/* Left Leg */}
      <mesh castShadow receiveShadow position={[-0.5, -1.5, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color="#0070de" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Right Leg */}
      <mesh castShadow receiveShadow position={[0.5, -1.5, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color="#0070de" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Left Arm */}
      <mesh castShadow receiveShadow position={[-1.05, -0.3, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#0070de" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Right Arm */}
      <mesh castShadow receiveShadow position={[1.05, -0.3, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#0070de" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}