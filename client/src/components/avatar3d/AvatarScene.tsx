import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { cn } from '@/lib/utils';
import robotImage from "@assets/Sem título.png";

interface AvatarSceneProps {
  width?: number;
  height?: number;
  className?: string;
  state?: 'idle' | 'listening' | 'processing' | 'speaking';
}

export default function AvatarScene({ 
  width = 300, 
  height = 300, 
  className,
  state = 'idle'
}: AvatarSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const requestRef = useRef<number | null>(null);
  
  // Montar a cena e limpar na desmontagem
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Verificar compatibilidade do navegador com WebGL
    if (!isWebGLAvailable()) {
      console.warn('WebGL not supported, showing static robot version');
      return;
    }
    
    // Criação da cena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x051622);
    sceneRef.current = scene;
    
    // Configurar câmera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Configurar renderizador
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;
    
    // Limpar container
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    // Adicionar canvas
    containerRef.current.appendChild(renderer.domElement);
    
    // Configurar iluminação
    setupLighting(scene);
    
    // Carregar o modelo
    try {
      createAvatar(scene);
      setLoaded(true);
    } catch (error) {
      console.error('Error loading 3D model:', error);
    }
    
    // Iniciar loop de renderização
    const animate = () => {
      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        const elapsedTime = Date.now() * 0.001; // Tempo em segundos
        
        // Animação baseada no estado
        animateAvatar(sceneRef.current, elapsedTime, state);
        
        // Renderizar cena
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    // Cleanup na desmontagem
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [width, height]);
  
  // Atualizar animação quando o estado muda
  useEffect(() => {
    if (sceneRef.current) {
      updateAvatarState(sceneRef.current, state);
    }
  }, [state]);
  
  // Verificar compatibilidade com WebGL
  const isWebGLAvailable = (): boolean => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  };
  
  // Configurar iluminação da cena
  const setupLighting = (scene: THREE.Scene) => {
    // Luz ambiente para iluminação geral
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    // Luz direcional principal (como luz do sol)
    const mainLight = new THREE.DirectionalLight(0x4da6ff, 3);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);
    
    // Luz de preenchimento para realce
    const fillLight = new THREE.DirectionalLight(0x0088ff, 2);
    fillLight.position.set(-5, 0, -5);
    scene.add(fillLight);
    
    // Luz focal para destaque
    const spotLight = new THREE.SpotLight(0x00ccff, 1);
    spotLight.position.set(0, 10, 0);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.2;
    scene.add(spotLight);
  };
  
  // Criar o avatar do robô
  const createAvatar = (scene: THREE.Scene) => {
    // Grupo para conter todos os elementos do robô
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);
    robotGroup.name = 'robotGroup';
    robotGroup.position.y = -0.5;
    
    // Material principal azul metálico
    const robotMaterial = new THREE.MeshStandardMaterial({
      color: 0x0070de,
      metalness: 0.7,
      roughness: 0.2,
    });
    
    // Material para visor e elementos luminosos
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.9
    });
    
    // Material para o símbolo trans
    const symbolMaterial = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      transparent: true,
      opacity: 0.9
    });
    
    // Cabeça (esfera)
    const headGeometry = new THREE.SphereGeometry(1, 32, 32);
    const head = new THREE.Mesh(headGeometry, robotMaterial);
    head.position.y = 1;
    head.castShadow = true;
    head.name = 'head';
    robotGroup.add(head);
    
    // Visor/face (semi-esfera preta)
    const visorGeometry = new THREE.SphereGeometry(0.8, 32, 32, 0, Math.PI, 0, Math.PI);
    const visorMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 0.3,
      roughness: 0.1,
    });
    const visor = new THREE.Mesh(visorGeometry, visorMaterial);
    visor.rotation.y = Math.PI;
    visor.position.y = 1;
    visor.position.z = 0.25;
    visor.name = 'visor';
    robotGroup.add(visor);
    
    // Olhos (formas semicirculares luminosas)
    const createEye = (x: number) => {
      const eyeGeometry = new THREE.TorusGeometry(0.15, 0.05, 16, 100, Math.PI);
      const eye = new THREE.Mesh(eyeGeometry, glowMaterial);
      eye.position.set(x, 1.1, 0.85);
      eye.rotation.x = Math.PI / 2;
      eye.name = x < 0 ? 'leftEye' : 'rightEye';
      return eye;
    };
    
    const leftEye = createEye(-0.3);
    const rightEye = createEye(0.3);
    robotGroup.add(leftEye, rightEye);
    
    // Boca (forma semicircular luminosa)
    const mouthGeometry = new THREE.TorusGeometry(0.3, 0.05, 16, 100, Math.PI);
    const mouth = new THREE.Mesh(mouthGeometry, glowMaterial);
    mouth.position.set(0, 0.8, 0.85);
    mouth.rotation.x = -Math.PI / 2;
    mouth.name = 'mouth';
    robotGroup.add(mouth);
    
    // Antena
    const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 16);
    const antenna = new THREE.Mesh(antennaGeometry, robotMaterial);
    antenna.position.y = 2.15;
    antenna.castShadow = true;
    antenna.name = 'antenna';
    robotGroup.add(antenna);
    
    // Esfera da antena
    const antennaBallGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const antennaBall = new THREE.Mesh(antennaBallGeometry, glowMaterial);
    antennaBall.position.y = 2.5;
    antennaBall.castShadow = true;
    antennaBall.name = 'antennaBall';
    robotGroup.add(antennaBall);
    
    // Corpo
    const bodyGeometry = new THREE.BoxGeometry(1.8, 1.2, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x0063c7,
      metalness: 0.5,
      roughness: 0.3,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = -0.5;
    body.castShadow = true;
    body.name = 'body';
    robotGroup.add(body);
    
    // Símbolo trans (usando pontos e linhas para melhor performance)
    const createTransSymbol = () => {
      const symbolGroup = new THREE.Group();
      symbolGroup.position.set(0, -0.5, 0.51);
      symbolGroup.name = 'transSymbol';
      
      // Círculo
      const circleGeometry = new THREE.RingGeometry(0.4, 0.45, 32);
      const circle = new THREE.Mesh(circleGeometry, symbolMaterial);
      circle.name = 'symbolCircle';
      symbolGroup.add(circle);
      
      // Cruz
      const crossGeometry = new THREE.BoxGeometry(0.05, 0.5, 0.01);
      const cross = new THREE.Mesh(crossGeometry, symbolMaterial);
      cross.position.y = -0.25;
      cross.name = 'symbolCross';
      symbolGroup.add(cross);
      
      // Setas
      const arrowGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.5, 8);
      
      const rightArrow = new THREE.Mesh(arrowGeometry, symbolMaterial);
      rightArrow.rotation.z = -Math.PI/4;
      rightArrow.position.set(0.25, 0.25, 0);
      rightArrow.name = 'rightArrow';
      symbolGroup.add(rightArrow);
      
      const leftArrow = new THREE.Mesh(arrowGeometry, symbolMaterial);
      leftArrow.rotation.z = Math.PI/4;
      leftArrow.position.set(-0.25, 0.25, 0);
      leftArrow.name = 'leftArrow';
      symbolGroup.add(leftArrow);
      
      return symbolGroup;
    };
    
    const transSymbol = createTransSymbol();
    robotGroup.add(transSymbol);
    
    // Pernas
    const legGeometry = new THREE.BoxGeometry(0.4, 0.6, 0.4);
    const leftLeg = new THREE.Mesh(legGeometry, robotMaterial);
    leftLeg.position.set(-0.5, -1.5, 0);
    leftLeg.castShadow = true;
    leftLeg.name = 'leftLeg';
    robotGroup.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeometry, robotMaterial);
    rightLeg.position.set(0.5, -1.5, 0);
    rightLeg.castShadow = true;
    rightLeg.name = 'rightLeg';
    robotGroup.add(rightLeg);
    
    // Braços
    const armGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3);
    const leftArm = new THREE.Mesh(armGeometry, robotMaterial);
    leftArm.position.set(-1.05, -0.3, 0);
    leftArm.castShadow = true;
    leftArm.name = 'leftArm';
    robotGroup.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, robotMaterial);
    rightArm.position.set(1.05, -0.3, 0);
    rightArm.castShadow = true;
    rightArm.name = 'rightArm';
    robotGroup.add(rightArm);
    
    // Ajustar posição inicial
    robotGroup.rotation.y = -Math.PI / 6;
  };
  
  // Animação baseada no tempo
  const animateAvatar = (scene: THREE.Scene, time: number, state: string) => {
    const robotGroup = scene.getObjectByName('robotGroup') as THREE.Group;
    if (!robotGroup) return;
    
    // Movimento de flutuação básico
    robotGroup.position.y = -0.5 + Math.sin(time * 0.8) * 0.1;
    
    // Rotação leve
    robotGroup.rotation.y = -Math.PI / 6 + Math.sin(time * 0.5) * 0.1;
    
    // Animações específicas do estado
    const antennaBall = robotGroup.getObjectByName('antennaBall') as THREE.Mesh;
    const transSymbol = robotGroup.getObjectByName('transSymbol') as THREE.Group;
    const mouth = robotGroup.getObjectByName('mouth') as THREE.Mesh;
    
    if (antennaBall) {
      // Pulsar antena em 'listening'
      if (state === 'listening') {
        antennaBall.scale.setScalar(1 + Math.sin(time * 5) * 0.3);
      } else {
        antennaBall.scale.setScalar(1);
      }
    }
    
    if (transSymbol) {
      // Girar símbolo em 'processing'
      if (state === 'processing') {
        transSymbol.rotation.z = time * 2;
      }
    }
    
    if (mouth) {
      // Animar boca em 'speaking'
      if (state === 'speaking') {
        const openAmount = 0.5 + Math.sin(time * 10) * 0.5;
        mouth.scale.set(1, openAmount, 1);
      } else {
        mouth.scale.set(1, 1, 1);
      }
    }
  };
  
  // Atualizar estado do avatar
  const updateAvatarState = (scene: THREE.Scene, state: string) => {
    // Implementação de mudanças de estado
    // (A animação contínua é manipulada por animateAvatar)
  };
  
  // Renderizar um fallback se a versão 3D não carregar
  if (!loaded) {
    return (
      <div 
        className={cn("relative robot-image-container animate-floating", className)}
        style={{ 
          width: `${width}px`, 
          height: `${height}px`,
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#051622'
        }}
      >
        <img 
          src={robotImage} 
          alt="GEM-T Robot 3D" 
          className="w-full h-full object-contain"
          style={{ 
            filter: 'drop-shadow(0 0 15px rgba(0, 149, 255, 0.5))'
          }}
        />
      </div>
    );
  }
  
  return (
    <div 
      ref={containerRef} 
      className={cn("robot-3d-container", className)}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'move',
        background: 'linear-gradient(to bottom, #051622, #072a43)'
      }}
    />
  );
}