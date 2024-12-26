// 'use client'; // Ensure this is at the top of your file

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,useTexture,
  useGLTF,
  MeshTransmissionMaterial,
  Gltf,
  MeshWobbleMaterial,
  MeshDistortMaterial,
  Sphere,
} from "@react-three/drei";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco");

function Model({ url, position }) {
  const { scene } = useGLTF(url, { dracoLoader });
  const meshRef = useRef();
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("hotpink");
    }
  });
  return;
  <primitive object={scene} ref={meshRef} position={[-2, 0, 2]} />;
}
function Shapes() {
  // const untitled = useGLTF('public/untitled.gltf');
  const sphere = new THREE.SphereGeometry
  // const png = useTexture('/vaca.png')
  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "teal" }}>
      <Canvas style={{ height: "100%", width: "100%" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />

        {/* Adding Plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <planeGeometry attach="geometry" args={[2, 2]} />
          {/* <MeshDistortMaterial distort={1} speed={10} /> */}
          <meshStandardMaterial attach="material" color="lightblue" />
        </mesh>

        <mesh geometry={ sphere }position={[-1,0,0]}  > 
  <MeshTransmissionMaterial transmissionSampler temporalDistortio={1}  distortion={6} distortionScale={10} />
</mesh>0/
        <Model url="/white.gltf" />
        <Gltf src="/vacamix.gltf" scal={3} position={[3, -3, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
{/* Adding Sphere */}
{/* <mesh position={[0, 1, 0]}>
  <sphereGeometry attach="geometry" args={[0.5, 32, 32]} />
  <meshStandardMaterial attach="material" color="orange" />
  <MeshWobbleMaterial factor={5} speed={5} />
</mesh> */}
// RUN chown -R node /usr/src/app
// USER node
export default Shapes;
