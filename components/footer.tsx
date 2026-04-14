"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
              <span className="text-primary font-mono text-sm font-bold">{"<>"}</span>
            </div>
            <span className="font-mono text-lg font-bold text-foreground tracking-tight">
              sketch<span className="text-primary">club</span>
            </span>
          </motion.div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              Discord
            </a>
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-muted-foreground"
          >
            <span className="text-[#f472b6]">const</span> year = <span className="text-[#fb923c]">2026</span>;{" "}
            <span className="text-muted-foreground/70">// SRM Sketchclub</span>
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
