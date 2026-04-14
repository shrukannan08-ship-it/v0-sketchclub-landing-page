"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from "@react-three/drei"
import * as THREE from "three"

function Particles({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null)

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    const color1 = new THREE.Color("#8b5cf6")
    const color2 = new THREE.Color("#f472b6")
    const color3 = new THREE.Color("#60a5fa")
    const color4 = new THREE.Color("#22d3d1")
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 30
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
      
      const rand = Math.random()
      const color = rand < 0.3 ? color1 : rand < 0.5 ? color2 : rand < 0.75 ? color3 : color4
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
      
      sizes[i] = Math.random() * 0.08 + 0.02
    }
    
    return [positions, colors, sizes]
  }, [count])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    return geo
  }, [positions, colors])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01
      mesh.current.rotation.y = state.clock.elapsedTime * 0.015
    }
  })

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function GlowingOrb({ position, color, size = 1 }: { position: [number, number, number], color: string, size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(size + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.3}
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </Sphere>
      {/* Inner glow */}
      <Sphere args={[size * 0.7, 16, 16]} position={position}>
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </Sphere>
    </Float>
  )
}

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={group}>
      {/* Floating Torus Rings */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <Torus args={[3, 0.05, 16, 100]} position={[-6, 2, -5]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
        </Torus>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Torus args={[2.5, 0.03, 16, 100]} position={[7, -1, -8]} rotation={[Math.PI / 4, Math.PI / 6, 0]}>
          <meshBasicMaterial color="#f472b6" transparent opacity={0.5} />
        </Torus>
      </Float>
      
      <Float speed={1} rotationIntensity={2.5} floatIntensity={2}>
        <Torus args={[4, 0.04, 16, 100]} position={[0, -4, -10]} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.4} />
        </Torus>
      </Float>

      {/* Floating Wireframe Boxes */}
      <Float speed={1.2} rotationIntensity={3} floatIntensity={1}>
        <Box args={[1.5, 1.5, 1.5]} position={[-8, -3, -6]}>
          <meshBasicMaterial color="#22d3d1" wireframe transparent opacity={0.4} />
        </Box>
      </Float>
      
      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.5}>
        <Box args={[1, 1, 1]} position={[9, 3, -7]}>
          <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.5} />
        </Box>
      </Float>

      {/* Icosahedrons */}
      <Float speed={0.8} rotationIntensity={4} floatIntensity={2}>
        <Icosahedron args={[0.8]} position={[-4, 4, -4]}>
          <meshBasicMaterial color="#f472b6" wireframe transparent opacity={0.6} />
        </Icosahedron>
      </Float>
      
      <Float speed={1.5} rotationIntensity={3} floatIntensity={1}>
        <Icosahedron args={[1.2]} position={[5, -2, -6]}>
          <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.4} />
        </Icosahedron>
      </Float>
    </group>
  )
}

function AnimatedRings() {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const ring3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3
      ring1.current.rotation.y = t * 0.2
    }
    if (ring2.current) {
      ring2.current.rotation.x = -t * 0.2
      ring2.current.rotation.z = t * 0.3
    }
    if (ring3.current) {
      ring3.current.rotation.y = t * 0.25
      ring3.current.rotation.z = -t * 0.15
    }
  })

  return (
    <group position={[0, 0, -5]}>
      <Torus ref={ring1} args={[6, 0.02, 16, 100]}>
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
      </Torus>
      <Torus ref={ring2} args={[7, 0.015, 16, 100]}>
        <meshBasicMaterial color="#f472b6" transparent opacity={0.25} />
      </Torus>
      <Torus ref={ring3} args={[8, 0.01, 16, 100]}>
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.2} />
      </Torus>
    </group>
  )
}

function GridFloor() {
  const group = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3 - 5
    }
  })

  return (
    <group ref={group} rotation={[-Math.PI / 2.2, 0, 0]}>
      <gridHelper args={[50, 50, "#8b5cf6", "#1e293b"]} rotation={[Math.PI / 2, 0, 0]} />
      {/* Second grid layer for depth */}
      <gridHelper args={[50, 25, "#f472b6", "transparent"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.1, 0]} />
    </group>
  )
}

function DataStreams() {
  const lines = useMemo(() => {
    const lineData = []
    for (let i = 0; i < 30; i++) {
      const points = []
      const startX = (Math.random() - 0.5) * 30
      const startY = (Math.random() - 0.5) * 20
      const startZ = Math.random() * -15 - 5
      const length = Math.random() * 3 + 1
      
      for (let j = 0; j < 10; j++) {
        points.push(new THREE.Vector3(
          startX,
          startY + (j / 10) * length,
          startZ
        ))
      }
      lineData.push({ points, color: i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#f472b6" : "#60a5fa" })
    }
    return lineData
  }, [])

  return (
    <group>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={line.points.length}
              array={new Float32Array(line.points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={line.color} transparent opacity={0.2} />
        </line>
      ))}
    </group>
  )
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <fog attach="fog" args={["#020617", 10, 40]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.15} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[-10, -10, 10]} intensity={0.4} color="#f472b6" />
        <pointLight position={[0, 5, -10]} intensity={0.3} color="#60a5fa" />
        
        {/* Core Elements */}
        <Particles count={2500} />
        <AnimatedRings />
        <FloatingGeometry />
        
        {/* Background Elements */}
        <GridFloor />
        <DataStreams />
        
        {/* Glowing Orbs */}
        <GlowingOrb position={[-8, 3, -8]} color="#8b5cf6" size={1.2} />
        <GlowingOrb position={[10, -2, -10]} color="#f472b6" size={0.8} />
        <GlowingOrb position={[3, 5, -12]} color="#60a5fa" size={1} />
        <GlowingOrb position={[-5, -4, -6]} color="#22d3d1" size={0.6} />
      </Canvas>
    </div>
  )
}
