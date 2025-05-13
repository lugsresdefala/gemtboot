import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  PerspectiveCamera, 
  OrbitControls, 
  Environment, 
  ContactShadows 
} from '@react-three/drei';
import RobotModel from '@/lib/3d/RobotModel';

export default function Robot3DScene({ state = 'idle', width = 300, height = 300 }) {
  const canvasRef = useRef();
  
  return (
    <div style={{ width, height, borderRadius: '12px', overflow: 'hidden' }}>
      <Canvas
        ref={canvasRef}
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ 
          background: 'linear-gradient(to bottom, #051622, #072a43)'
        }}
      >
        <Suspense fallback={null}>
          {/* Main lighting */}
          <ambientLight intensity={0.4} />
          <spotLight 
            intensity={1} 
            angle={0.1} 
            penumbra={1} 
            position={[10, 15, 10]} 
            castShadow 
          />
          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight
            position={[-5, 5, 5]}
            intensity={1}
            color="#4da6ff"
          />
          
          {/* The 3D Robot Model */}
          <RobotModel 
            position={[0, -1, 0]} 
            scale={0.8} 
            rotation={[0, -Math.PI / 6, 0]}
            state={state} 
          />
          
          {/* Shadow under the robot */}
          <ContactShadows 
            rotation-x={Math.PI / 2}
            position={[0, -2.2, 0]}
            opacity={0.5}
            width={10}
            height={10}
            blur={1.5}
            far={2.2}
          />
          
          {/* Orbit controls - lets user rotate the view */}
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
          />
          
          {/* Environment lighting */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}