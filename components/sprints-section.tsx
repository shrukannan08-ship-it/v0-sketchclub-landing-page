"use client"

import { motion } from "framer-motion"

const sprints = [
  {
    title: "Shader Sundays",
    description: "Deep dive into GLSL shaders and visual effects",
    date: "Every Sunday",
    icon: "◆",
    color: "#f472b6",
  },
  {
    title: "Algo Art Jam",
    description: "24-hour generative art hackathon",
    date: "Monthly",
    icon: "◇",
    color: "#60a5fa",
  },
  {
    title: "P5.js Workshop",
    description: "Beginner-friendly creative coding sessions",
    date: "Bi-weekly",
    icon: "○",
    color: "#fb923c",
  },
  {
    title: "WebGL Wednesdays",
    description: "Advanced 3D graphics and Three.js",
    date: "Every Wednesday",
    icon: "△",
    color: "#4ade80",
  },
]

export function SprintsSection() {
  return (
    <section id="sprints" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-[#60a5fa] mb-4 block">
            {"// upcoming_events"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Code </span>
            <span className="text-primary">Sprints</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-md mx-auto">
            {"async function"} <span className="text-[#fb923c]">learn</span>() {"{"}
            <span className="text-[#4ade80]">await</span> together() {"}"}
          </p>
        </motion.div>

        {/* Sprint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sprints.map((sprint, index) => (
            <motion.div
              key={sprint.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                    style={{ 
                      backgroundColor: `${sprint.color}20`,
                      color: sprint.color 
                    }}
                  >
                    {sprint.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-mono text-lg text-foreground font-semibold">
                        {sprint.title}
                      </h3>
                      <span 
                        className="font-mono text-xs px-2 py-1 rounded-full"
                        style={{ 
                          backgroundColor: `${sprint.color}20`,
                          color: sprint.color 
                        }}
                      >
                        {sprint.date}
                      </span>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground">
                      {sprint.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
