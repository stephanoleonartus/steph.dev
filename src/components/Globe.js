import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

const GlobeComponent = () => {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg');

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.011;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[4, 30, 39]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const GlobeCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 7]} intensity={3} />
      <GlobeComponent />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.9} />
    </Canvas>
  );
};

export default GlobeCanvas;
