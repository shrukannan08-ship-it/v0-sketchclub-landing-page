"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const codeOverlays = [
  `function draw() {
  background(20);
  for(let i = 0; i < 100; i++) {
    circle(random(width), 
           random(height), 
           random(50));
  }
}`,
  `const shader = \`
  void main() {
    vec2 uv = gl_FragCoord.xy;
    gl_FragColor = vec4(uv, 0.5, 1.0);
  }
\``,
  `class Particle {
  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.lifespan -= 2;
  }
}`,
  `export const noise = (x, y) => {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  return fade(lerp(a, b, u));
}`,
  `@keyframes float {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(-20px); 
  }
}`,
  `const fractal = (z, c, n) => {
  if (n === 0) return z;
  return fractal(
    z.multiply(z).add(c), 
    c, n - 1
  );
}`,
  `void setup() {
  createCanvas(800, 800, WEBGL);
  pixelDensity(1);
  noStroke();
}`,
  `const wave = (t) => ({
  x: sin(t * 0.02) * 100,
  y: cos(t * 0.03) * 100,
  z: sin(t * 0.01) * 50
})`,
  `#define PI 3.14159265359
float sdBox(vec3 p, vec3 b) {
  vec3 q = abs(p) - b;
  return length(max(q, 0.0));
}`,
]

const projects = [
  { 
    title: "Generative Landscapes", 
    author: "Aditya Kumar", 
    likes: 342,
    gradient: "from-[#8b5cf6] via-[#6366f1] to-[#3b82f6]",
    tag: "p5.js"
  },
  { 
    title: "Neural Style Transfer", 
    author: "Priya Sharma", 
    likes: 289,
    gradient: "from-[#f472b6] via-[#ec4899] to-[#db2777]",
    tag: "ML"
  },
  { 
    title: "Interactive Data Viz", 
    author: "Rahul Menon", 
    likes: 456,
    gradient: "from-[#60a5fa] via-[#38bdf8] to-[#22d3d1]",
    tag: "D3.js"
  },
  { 
    title: "Procedural Patterns", 
    author: "Sneha Reddy", 
    likes: 198,
    gradient: "from-[#fb923c] via-[#f97316] to-[#ea580c]",
    tag: "GLSL"
  },
  { 
    title: "Motion Graphics Lab", 
    author: "Vikram Singh", 
    likes: 521,
    gradient: "from-[#a78bfa] via-[#8b5cf6] to-[#7c3aed]",
    tag: "Framer"
  },
  { 
    title: "Fractal Geometry", 
    author: "Ananya Patel", 
    likes: 367,
    gradient: "from-[#4ade80] via-[#22c55e] to-[#16a34a]",
    tag: "Canvas"
  },
  { 
    title: "Real-time 3D Engine", 
    author: "Karthik Rao", 
    likes: 412,
    gradient: "from-[#f472b6] via-[#c084fc] to-[#8b5cf6]",
    tag: "Three.js"
  },
  { 
    title: "Audio Visualizer", 
    author: "Meera Iyer", 
    likes: 234,
    gradient: "from-[#fbbf24] via-[#f59e0b] to-[#d97706]",
    tag: "Web Audio"
  },
  { 
    title: "Volumetric Rendering", 
    author: "Arjun Nair", 
    likes: 478,
    gradient: "from-[#60a5fa] via-[#818cf8] to-[#a78bfa]",
    tag: "WebGL"
  },
]

function TerminalCard({ 
  index, 
  project 
}: { 
  index: number
  project: typeof projects[0] 
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateXVal = ((y - centerY) / centerY) * -10
    const rotateYVal = ((x - centerX) / centerX) * 10
    setRotateX(rotateXVal)
    setRotateY(rotateYVal)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{ perspective: "1000px" }}
    >
      <motion.div 
        animate={{ 
          rotateX: rotateX, 
          rotateY: rotateY,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glowing Edge Effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, transparent 50%, rgba(244, 114, 182, 0.3) 100%)`,
            filter: "blur(1px)",
            transform: "translateZ(-1px)"
          }}
        />
        {/* MacOS Window Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary/80 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            {project.title.toLowerCase().replace(/\s/g, "_")}.js
          </span>
        </div>

        {/* Card Content */}
        <div className="relative aspect-square overflow-hidden">
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
          
          {/* Mesh Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
          
          {/* Floating Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute w-32 h-32 rounded-full bg-white/10 blur-xl"
              style={{ top: '10%', left: '10%' }}
            />
            <div 
              className="absolute w-24 h-24 rounded-full bg-black/20 blur-xl"
              style={{ bottom: '20%', right: '15%' }}
            />
          </div>

          {/* Tech Tag */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
              {project.tag}
            </span>
          </div>

          {/* Project Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 className="text-base font-semibold text-white mb-1">{project.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/80">{project.author}</span>
              <span className="text-xs text-white/80 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                {project.likes}
              </span>
            </div>
          </div>

          {/* Code Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-card/95 backdrop-blur-sm p-4 overflow-hidden"
          >
            <motion.pre
              initial={{ y: 0 }}
              animate={{ y: isHovered ? -100 : 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="font-mono text-xs leading-relaxed"
            >
              <code>
                {codeOverlays[index].split("\n").map((line, i) => (
                  <div key={i} className="whitespace-pre">
                    <span className="text-muted-foreground mr-3 select-none">{String(i + 1).padStart(2, "0")}</span>
                    {line.split(/(\b(?:function|const|let|var|class|export|import|return|if|for|while|void)\b|"[^"]*"|'[^']*'|\d+)/).map((part, j) => {
                      if (/^(function|const|let|var|class|export|import|return|if|for|while|void)$/.test(part)) {
                        return <span key={j} className="text-[#f472b6]">{part}</span>
                      }
                      if (/^["'].*["']$/.test(part)) {
                        return <span key={j} className="text-[#4ade80]">{part}</span>
                      }
                      if (/^\d+$/.test(part)) {
                        return <span key={j} className="text-[#fb923c]">{part}</span>
                      }
                      return <span key={j} className="text-[#60a5fa]">{part}</span>
                    })}
                  </div>
                ))}
              </code>
            </motion.pre>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-[#f472b6] mb-4 block">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Member </span>
            <span className="text-primary">Showcase</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore creative coding projects built by our talented community members
          </p>
        </motion.div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <TerminalCard key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
