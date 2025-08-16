import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Globe from 'r3f-globe';

const GlobeComponent = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      console.log(globeRef.current);
    }
  }, [globeRef.current]);

  useFrame(() => {
    if (globeRef.current) {
      // Access the globe object to rotate it
      const globe = globeRef.current;
      globe.rotation.y += 0.001;
    }
  });

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
    </Canvas>
  );
};

export default GlobeCanvas;
