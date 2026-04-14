"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles({ count = 1500 }) {
  const mesh = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    const color1 = new THREE.Color("#8b5cf6") // Electric Violet
    const color2 = new THREE.Color("#f472b6") // Pink
    const color3 = new THREE.Color("#60a5fa") // Blue
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 25
      positions[i3 + 1] = (Math.random() - 0.5) * 25
      positions[i3 + 2] = (Math.random() - 0.5) * 25
      
      const rand = Math.random()
      const color = rand < 0.4 ? color1 : rand < 0.7 ? color2 : color3
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }
    
    return [positions, colors]
  }, [count])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    return geo
  }, [positions, colors])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.015
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function GridFloor() {
  const group = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = -Math.PI / 2.5
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2 - 3
    }
  })

  return (
    <group ref={group}>
      <gridHelper 
        args={[40, 40, "#8b5cf6", "#1e293b"]} 
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

function FloatingLines() {
  const lines = useMemo(() => {
    const lineData = []
    for (let i = 0; i < 20; i++) {
      const points = []
      const startX = (Math.random() - 0.5) * 20
      const startY = (Math.random() - 0.5) * 20
      const startZ = (Math.random() - 0.5) * 10
      
      for (let j = 0; j < 3; j++) {
        points.push(new THREE.Vector3(
          startX + j * 0.5,
          startY + Math.sin(j) * 0.3,
          startZ
        ))
      }
      lineData.push(points)
    }
    return lineData
  }, [])

  return (
    <group>
      {lines.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color={i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#f472b6" : "#60a5fa"} 
            transparent 
            opacity={0.3} 
          />
        </line>
      ))}
    </group>
  )
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <fog attach="fog" args={["#020617", 8, 35]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#f472b6" />
        <Particles />
        <GridFloor />
        <FloatingLines />
      </Canvas>
    </div>
  )
}
