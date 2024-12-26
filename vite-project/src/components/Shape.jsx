'use client'
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// function Model({ url }) {
//   const { scene } = useGLTF('../untitled (1).gltf');
//   return <primitive object={scene} scale={1} />;
// }

function Shape() {
  return (
    <div style={{ height: '100vh', width: '100%',backgroundColor:'yellow' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        {/* <Model url="/untitled(1).gltf" /> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Shape;
