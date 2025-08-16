import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Globe from 'r3f-globe';
import { OrbitControls } from '@react-three/drei';

const GlobeComponent = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.2;
    }
  }, [globeRef]);

  return (
    <Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      backgroundColor="rgba(0,0,0,0)"
    />
  );
};

const GlobeCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <GlobeComponent />
      <OrbitControls />
    </Canvas>
  );
};

export default GlobeCanvas;
