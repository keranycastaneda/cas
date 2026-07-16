"use client";

import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function Laptop() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.18;
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.7) * 0.12;
  });

  return (
    <group ref={group} rotation={[0.12, -0.35, 0]} scale={1.05}>
      {/* Laptop base */}
      <mesh position={[0, -0.75, 0]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[3.4, 0.16, 2.15]} />
        <meshStandardMaterial
          color="#111a16"
          metalness={0.75}
          roughness={0.25}
        />
      </mesh>

      {/* Keyboard surface */}
      <mesh position={[0, -0.63, -0.05]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[2.9, 0.04, 1.65]} />
        <meshStandardMaterial color="#243329" />
      </mesh>

      {/* Screen frame */}
      <mesh position={[0, 0.55, -0.95]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[3.35, 2.25, 0.14]} />
        <meshStandardMaterial
          color="#101713"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0.56, -0.86]} rotation={[-0.15, 0, 0]}>
        <planeGeometry args={[3, 1.9]} />
        <meshStandardMaterial
          color="#76ff57"
          emissive="#1b7f3c"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* Code lines */}
      {[-0.45, -0.15, 0.15, 0.45].map((y, index) => (
        <mesh
          key={y}
          position={[
            index % 2 === 0 ? -0.25 : 0.15,
            0.55 + y,
            -0.79,
          ]}
          rotation={[-0.15, 0, 0]}
        >
          <boxGeometry
            args={[index % 2 === 0 ? 1.8 : 1.25, 0.07, 0.02]}
          />
          <meshBasicMaterial
            color={index === 1 ? "#f1ff5a" : "#061f14"}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingCube({
  position,
  color,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
}) {
  const cube = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!cube.current) return;

    cube.current.rotation.x += delta * 0.25 * speed;
    cube.current.rotation.y += delta * 0.35 * speed;
    cube.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
  });

  return (
    <mesh ref={cube} position={position}>
      <boxGeometry args={[0.55, 0.55, 0.55]} />
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.7}
      />
    </mesh>
  );
}

function SignalRings() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.z -= delta * 0.09;
    }
  });

  return (
    <group ref={group} position={[1.8, 0.4, -1.8]}>
      {[1, 1.45, 1.9].map((radius) => (
        <mesh key={radius}>
          <torusGeometry args={[radius, 0.025, 12, 80]} />
          <meshBasicMaterial color="#7eff55" transparent opacity={0.38} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} />
      <pointLight
        position={[-4, 1, 3]}
        intensity={35}
        color="#7eff55"
      />
      <pointLight
        position={[4, -2, 2]}
        intensity={22}
        color="#dfff39"
      />

      <Stars
        radius={70}
        depth={30}
        count={1100}
        factor={2}
        saturation={0}
        fade
        speed={0.35}
      />

      <Float speed={1.25} rotationIntensity={0.15} floatIntensity={0.3}>
        <Laptop />
      </Float>

      <FloatingCube position={[-3.2, 1.8, -1]} color="#a6ff39" speed={0.8} />
      <FloatingCube position={[3.2, -1.6, -0.5]} color="#e1ff4d" speed={1.15} />
      <FloatingCube position={[3.7, 2.2, -2]} color="#43d97b" speed={0.65} />

      <SignalRings />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.55}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.85}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="scene-wrapper" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.3, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}