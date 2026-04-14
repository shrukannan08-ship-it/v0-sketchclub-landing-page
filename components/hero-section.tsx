"use client"

import { motion } from "framer-motion"
import { ParticleField } from "./particle-field"

const codeSnippets = [
  "const art = code.transform()",
  "render(creativity)",
  "while(inspired) { create() }",
  "export default <Canvas />",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleField />

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            animate={{ 
              opacity: [0, 0.15, 0.15, 0],
              x: i % 2 === 0 ? [100, -100] : [-100, 100],
              y: [0, -50]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear"
            }}
            className="absolute font-mono text-sm text-primary/30"
            style={{
              top: `${20 + i * 20}%`,
              left: i % 2 === 0 ? "10%" : "auto",
              right: i % 2 === 1 ? "10%" : "auto",
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-mono text-sm text-[#f472b6] tracking-wider">
            {"// creative_coding.club"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-balance"
        >
          <span className="text-foreground">CODE IS THE</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-[#f472b6] to-[#60a5fa] bg-clip-text text-transparent">
            NEW CANVAS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-mono"
        >
          <span className="text-[#60a5fa]">Where</span>{" "}
          <span className="text-[#fb923c]">logic</span>{" "}
          <span className="text-muted-foreground">meets</span>{" "}
          <span className="text-[#f472b6]">art</span>{" "}
          <span className="text-muted-foreground">at</span>{" "}
          <span className="text-primary">SRM</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="font-mono text-sm px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            {"<Explore />"} 
          </motion.a>
          <motion.a
            href="#terminal"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="font-mono text-sm px-8 py-4 rounded-xl border border-border bg-secondary/50 text-foreground hover:bg-secondary hover:border-primary/50 transition-all backdrop-blur-sm"
          >
            ./join --now
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
