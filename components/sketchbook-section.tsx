"use client"

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useRef, useState } from "react"

const sketchbookItems = [
  {
    title: "Shader Experiments",
    description: "GLSL fragment shaders exploring light and color",
    category: "WebGL",
    color: "#8b5cf6"
  },
  {
    title: "Generative Art",
    description: "Algorithmic patterns using noise functions",
    category: "p5.js",
    color: "#f472b6"
  },
  {
    title: "Data Sculptures",
    description: "3D visualizations of complex datasets",
    category: "Three.js",
    color: "#22d3ee"
  },
  {
    title: "Motion Studies",
    description: "Physics-based animation experiments",
    category: "Framer",
    color: "#4ade80"
  },
  {
    title: "Type in Motion",
    description: "Kinetic typography explorations",
    category: "Canvas",
    color: "#fb923c"
  },
  {
    title: "Audio Reactive",
    description: "Sound-driven visual compositions",
    category: "Web Audio",
    color: "#a78bfa"
  },
  {
    title: "Particle Systems",
    description: "GPU-accelerated particle simulations",
    category: "WebGPU",
    color: "#f472b6"
  },
  {
    title: "Procedural Worlds",
    description: "Infinite terrain generation algorithms",
    category: "GLSL",
    color: "#60a5fa"
  },
  {
    title: "Interactive Installations",
    description: "Multi-touch and gesture-based experiences",
    category: "TouchDesigner",
    color: "#22d3ee"
  },
]

function SketchbookBlock({ 
  item, 
  index, 
  scrollProgress 
}: { 
  item: typeof sketchbookItems[0]
  index: number
  scrollProgress: number 
}) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Calculate row and column for staggered rotation
  const row = Math.floor(index / 3)
  const col = index % 3
  
  // Base rotation based on scroll - varies by position
  const baseRotateY = (col - 1) * 8 * scrollProgress
  const baseRotateX = (row - 1) * 4 * scrollProgress

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 0 : baseRotateY,
          rotateX: isHovered ? 0 : baseRotateX,
          z: isHovered ? 60 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 20 
        }}
        className="relative rounded-xl overflow-hidden"
        style={{ 
          transformStyle: "preserve-3d",
          boxShadow: isHovered 
            ? `0 25px 80px -10px ${item.color}60, 0 0 40px ${item.color}40, inset 0 1px 0 rgba(255,255,255,0.1)` 
            : "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
        }}
      >
        {/* Glass Reflection Layer */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
            transform: "translateZ(2px)"
          }}
        />
        
        {/* Neon Glow Border on Hover */}
        <motion.div 
          className="absolute inset-0 rounded-xl pointer-events-none z-10"
          animate={{
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered ? `inset 0 0 20px ${item.color}80, 0 0 30px ${item.color}50` : "none"
          }}
          transition={{ duration: 0.3 }}
          style={{
            border: `2px solid ${item.color}`,
          }}
        />

        {/* Terminal Window */}
        <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-border/50">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#1e293b] to-[#0f172a] border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm shadow-[#ff5f57]/50" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm shadow-[#ffbd2e]/50" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-sm shadow-[#28c840]/50" />
            <span className="ml-2 font-mono text-xs text-muted-foreground truncate">
              ~/sketchbook/{item.category.toLowerCase().replace(/\s+/g, '-')}
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-5 min-h-[180px] flex flex-col justify-between">
            {/* Code Preview Area */}
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#f472b6]">const</span>
                <span className="text-[#60a5fa]">sketch</span>
                <span className="text-muted-foreground">=</span>
                <span className="text-[#4ade80]">{`"`}{item.category}{`"`}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f472b6]">function</span>
                <span style={{ color: item.color }}>render</span>
                <span className="text-muted-foreground">{"() {"}</span>
              </div>
              <div className="pl-4 text-muted-foreground/70 truncate">
                {"// "}{item.description}
              </div>
              <div className="text-muted-foreground">{"}"}</div>
            </div>

            {/* Bottom Info */}
            <div className="mt-4 pt-4 border-t border-border/30">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground text-sm">
                  {item.title}
                </h3>
                <span 
                  className="px-2 py-1 rounded-md text-xs font-mono"
                  style={{ 
                    backgroundColor: `${item.color}20`,
                    color: item.color
                  }}
                >
                  {item.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Side Edge */}
        <div 
          className="absolute top-0 -right-2 bottom-0 w-2 rounded-r-lg"
          style={{
            background: `linear-gradient(to bottom, ${item.color}30, #0f172a)`,
            transform: "rotateY(90deg) translateZ(1px)",
            transformOrigin: "left"
          }}
        />

        {/* 3D Bottom Edge */}
        <div 
          className="absolute -bottom-2 left-0 right-0 h-2 rounded-b-lg"
          style={{
            background: `linear-gradient(to right, #0f172a, ${item.color}20, #0f172a)`,
            transform: "rotateX(-90deg) translateZ(1px)",
            transformOrigin: "top"
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export function SketchbookSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollValue, setScrollValue] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollValue(latest)
  })

  return (
    <section 
      id="sketchbook" 
      ref={containerRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-[#22d3ee] mb-4 block">
            Creative Experiments
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">The </span>
            <span className="bg-gradient-to-r from-[#22d3ee] to-primary bg-clip-text text-transparent">Sketchbook</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A collection of experimental works, prototypes, and creative coding explorations
          </p>
        </motion.div>

        {/* 3x3 Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          style={{ perspective: "2000px" }}
        >
          {sketchbookItems.map((item, index) => (
            <SketchbookBlock 
              key={item.title} 
              item={item} 
              index={index}
              scrollProgress={scrollValue}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="font-mono text-sm px-8 py-4 rounded-xl bg-gradient-to-r from-[#22d3ee] to-primary text-white relative overflow-hidden group"
          >
            <span className="relative z-10">Explore All Sketches</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
