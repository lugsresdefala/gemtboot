import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Robot3DProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Robot3D({ width = 300, height = 300, className }: Robot3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x051622);
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Clear container and append renderer
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x4da6ff, 3);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    const rimLight = new THREE.DirectionalLight(0x0088ff, 2);
    rimLight.position.set(-5, 0, -5);
    scene.add(rimLight);
    
    // Create Robot Body
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);
    
    // Head
    const headGeometry = new THREE.SphereGeometry(1, 32, 32);
    const headMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0070de,
      metalness: 0.4,
      roughness: 0.2
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1;
    head.castShadow = true;
    head.receiveShadow = true;
    robotGroup.add(head);
    
    // Face (black visor)
    const visorGeometry = new THREE.SphereGeometry(0.8, 32, 32, 0, Math.PI, 0, Math.PI);
    const visorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x000000,
      metalness: 0.2,
      roughness: 0.1
    });
    const visor = new THREE.Mesh(visorGeometry, visorMaterial);
    visor.rotation.y = Math.PI;
    visor.position.y = 1;
    visor.position.z = 0.2;
    robotGroup.add(visor);
    
    // Eyes (blue glowing crescent shapes)
    const createEye = (x: number) => {
      const eyeGeometry = new THREE.TorusGeometry(0.15, 0.05, 16, 100, Math.PI);
      const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
      const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      eye.position.set(x, 1.1, 0.8);
      eye.rotation.x = Math.PI / 2;
      eye.rotation.y = Math.PI / 8;
      return eye;
    };
    
    const leftEye = createEye(-0.3);
    const rightEye = createEye(0.3);
    robotGroup.add(leftEye, rightEye);
    
    // Smile
    const smileGeometry = new THREE.TorusGeometry(0.3, 0.05, 16, 100, Math.PI);
    const smileMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const smile = new THREE.Mesh(smileGeometry, smileMaterial);
    smile.position.set(0, 0.8, 0.8);
    smile.rotation.x = -Math.PI / 2;
    robotGroup.add(smile);
    
    // Antenna
    const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 16);
    const antennaMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0070de,
      metalness: 0.6,
      roughness: 0.2
    });
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    antenna.position.y = 2.15;
    antenna.castShadow = true;
    robotGroup.add(antenna);
    
    const antennaBallGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const antennaBall = new THREE.Mesh(antennaBallGeometry, headMaterial);
    antennaBall.position.y = 2.5;
    antennaBall.castShadow = true;
    robotGroup.add(antennaBall);
    
    // Body
    const bodyGeometry = new THREE.BoxGeometry(1.8, 1.2, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0063c7,
      metalness: 0.4,
      roughness: 0.3
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = -0.5;
    body.castShadow = true;
    body.receiveShadow = true;
    robotGroup.add(body);

    // Trans Symbol (lines using BufferGeometry for better performance)
    const createLine = (points: THREE.Vector3[], color: number) => {
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color });
      return new THREE.Line(geometry, material);
    };
    
    // Circle for transgender symbol
    const circleRadius = 0.4;
    const circleSegments = 32;
    const circlePoints: THREE.Vector3[] = [];
    
    for (let i = 0; i <= circleSegments; i++) {
      const theta = (i / circleSegments) * Math.PI * 2;
      circlePoints.push(
        new THREE.Vector3(
          Math.cos(theta) * circleRadius,
          Math.sin(theta) * circleRadius,
          0
        )
      );
    }
    
    const circle = createLine(circlePoints, 0xff00ff);
    circle.position.set(0, -0.5, 0.51);
    robotGroup.add(circle);
    
    // Cross for transgender symbol
    const crossPoints: THREE.Vector3[] = [
      new THREE.Vector3(0, -0.25, 0),
      new THREE.Vector3(0, -0.8, 0)
    ];
    const cross = createLine(crossPoints, 0xff00ff);
    cross.position.set(0, -0.5, 0.51);
    robotGroup.add(cross);
    
    // Arrows for transgender symbol
    const rightArrowPoints: THREE.Vector3[] = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.5, 0.5, 0)
    ];
    const rightArrow = createLine(rightArrowPoints, 0xff00ff);
    rightArrow.position.set(0, -0.5, 0.51);
    robotGroup.add(rightArrow);
    
    const leftArrowPoints: THREE.Vector3[] = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-0.5, 0.5, 0)
    ];
    const leftArrow = createLine(leftArrowPoints, 0xff00ff);
    leftArrow.position.set(0, -0.5, 0.51);
    robotGroup.add(leftArrow);
    
    // Legs
    const legGeometry = new THREE.BoxGeometry(0.4, 0.6, 0.4);
    const leftLeg = new THREE.Mesh(legGeometry, headMaterial);
    leftLeg.position.set(-0.5, -1.5, 0);
    leftLeg.castShadow = true;
    leftLeg.receiveShadow = true;
    robotGroup.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeometry, headMaterial);
    rightLeg.position.set(0.5, -1.5, 0);
    rightLeg.castShadow = true;
    rightLeg.receiveShadow = true;
    robotGroup.add(rightLeg);
    
    // Arms
    const armGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3);
    const leftArm = new THREE.Mesh(armGeometry, headMaterial);
    leftArm.position.set(-1.05, -0.3, 0);
    leftArm.castShadow = true;
    leftArm.receiveShadow = true;
    robotGroup.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, headMaterial);
    rightArm.position.set(1.05, -0.3, 0);
    rightArm.castShadow = true;
    rightArm.receiveShadow = true;
    robotGroup.add(rightArm);
    
    // Ears
    const earGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 16);
    const leftEar = new THREE.Mesh(earGeometry, headMaterial);
    leftEar.position.set(-1.2, 1, 0);
    leftEar.rotation.z = Math.PI / 2;
    leftEar.castShadow = true;
    robotGroup.add(leftEar);
    
    const rightEar = new THREE.Mesh(earGeometry, headMaterial);
    rightEar.position.set(1.2, 1, 0);
    rightEar.rotation.z = Math.PI / 2;
    rightEar.castShadow = true;
    robotGroup.add(rightEar);
    
    // Animation
    robotGroup.rotation.y = -Math.PI / 6;
    
    let time = 0;
    const animate = () => {
      time += 0.01;
      
      // Gentle floating motion
      robotGroup.position.y = Math.sin(time) * 0.1;
      
      // Subtle rotation
      robotGroup.rotation.y = -Math.PI / 6 + Math.sin(time * 0.5) * 0.1;
      
      renderer.render(scene, camera);
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Add interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / width) * 2 - 1;
      const y = -((event.clientY - rect.top) / height) * 2 + 1;
      
      // Rotate the robot based on mouse position (limited range)
      robotGroup.rotation.y = -Math.PI / 6 + x * 0.5;
      robotGroup.rotation.x = y * 0.2;
    };
    
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, [width, height]);
  
  return (
    <div 
      ref={containerRef} 
      className={`robot-3d-container ${className || ''}`}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        cursor: 'pointer',
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    />
  );
}