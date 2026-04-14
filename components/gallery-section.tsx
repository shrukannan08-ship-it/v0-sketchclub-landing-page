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
  { title: "Particle Symphony", author: "@neural_artist", likes: 342 },
  { title: "Shader Dreams", author: "@pixel_witch", likes: 289 },
  { title: "Flow Fields", author: "@code_poet", likes: 456 },
  { title: "Perlin Noise Art", author: "@math_magic", likes: 198 },
  { title: "CSS Animations", author: "@style_guru", likes: 521 },
  { title: "Fractal Explorer", author: "@infinite_loop", likes: 367 },
  { title: "WebGL Canvas", author: "@3d_dreamer", likes: 412 },
  { title: "Sine Waves", author: "@wave_rider", likes: 234 },
  { title: "Ray Marching", author: "@shadow_caster", likes: 478 },
]

function TerminalCard({ 
  index, 
  project 
}: { 
  index: number
  project: typeof projects[0] 
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10">
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
        <div className="relative aspect-square bg-gradient-to-br from-secondary via-card to-secondary overflow-hidden">
          {/* Abstract Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at ${30 + index * 10}% ${40 + index * 5}%, var(--primary) 0%, transparent 50%)`,
              }}
            />
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at ${70 - index * 5}% ${60 + index * 3}%, #f472b6 0%, transparent 40%)`,
              }}
            />
          </div>

          {/* Project Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-card/90 to-transparent">
            <h3 className="font-mono text-sm text-foreground mb-1">{project.title}</h3>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-primary">{project.author}</span>
              <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
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
      </div>
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
            {"// recent_works"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">The </span>
            <span className="text-primary">Gallery</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-md mx-auto">
            {"<Collection>"} Curated works from our creative coders {"</Collection>"}
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
