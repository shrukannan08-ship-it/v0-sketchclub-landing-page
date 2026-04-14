"use client"

import { motion } from "framer-motion"

const workshops = [
  {
    title: "Full-Stack Foundations",
    description: "Build production-ready web apps with Next.js, databases, and deployment strategies",
    duration: "6 weeks",
    level: "Intermediate",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    gradient: "from-[#60a5fa] to-[#3b82f6]",
  },
  {
    title: "Startup MVP Sprint",
    description: "Go from idea to launch in 4 weeks with lean development and rapid prototyping",
    duration: "4 weeks",
    level: "All Levels",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-[#f472b6] to-[#ec4899]",
  },
  {
    title: "SaaS Architecture",
    description: "Master multi-tenant systems, billing integration, and scalable infrastructure",
    duration: "8 weeks",
    level: "Advanced",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    gradient: "from-[#fb923c] to-[#f97316]",
  },
  {
    title: "Growth & Monetization",
    description: "Learn user acquisition, analytics, and revenue strategies for web products",
    duration: "3 weeks",
    level: "All Levels",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    gradient: "from-[#4ade80] to-[#22c55e]",
  },
]

export function WebpreneurSection() {
  return (
    <section id="webpreneur" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f472b6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-[#fb923c] mb-4 block font-medium tracking-wider uppercase">
            Build. Launch. Scale.
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Webpreneur </span>
            <span className="bg-gradient-to-r from-primary to-[#f472b6] bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Intensive programs designed to transform developers into entrepreneurs
          </p>
        </motion.div>

        {/* Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${workshop.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${workshop.gradient} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                    {workshop.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {workshop.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {workshop.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                        {workshop.duration}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {workshop.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#terminal"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-[#f472b6] text-white font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
          >
            Enroll for Next Cohort
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
