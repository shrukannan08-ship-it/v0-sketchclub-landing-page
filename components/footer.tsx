"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const footerLinks = {
  explore: [
    { label: "Gallery", href: "#gallery" },
    { label: "Workshops", href: "#webpreneur" },
    { label: "Events", href: "#sprints" },
    { label: "Join Us", href: "#terminal" },
  ],
  connect: [
    { label: "Instagram", href: "https://instagram.com/sketchclub" },
    { label: "GitHub", href: "https://github.com/sketchclub" },
    { label: "Discord", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Changelog", href: "#" },
  ],
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail("")
    }
  }

  return (
    <>
      {/* Gradient Fade to Black */}
      <div 
        className="h-48 w-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #000000 100%)"
        }}
      />

      {/* Deep Glassmorphism Footer */}
      <footer className="relative bg-black">
        {/* Glass Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-4 md:mx-8 lg:mx-16 -mt-24"
        >
          {/* Glow Effect Behind Glass */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-40 blur-2xl"
            style={{
              background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)"
            }}
          />

          {/* Glass Container */}
          <div 
            className="relative rounded-3xl border border-white/10 overflow-hidden"
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(40px) saturate(150%)",
              WebkitBackdropFilter: "blur(40px) saturate(150%)",
            }}
          >
            {/* Glass Reflection */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.03) 100%)"
              }}
            />

            {/* Inner Glow Border */}
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.3)"
              }}
            />

            <div className="relative px-8 py-16 md:px-16">
              {/* Top Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                {/* Left - Brand & Newsletter */}
                <div>
                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-[#a78bfa] to-[#f472b6] p-0.5 shadow-lg shadow-primary/30">
                      <div className="w-full h-full rounded-[10px] bg-black/80 flex items-center justify-center backdrop-blur-sm">
                        <svg 
                          viewBox="0 0 24 24" 
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        Sketch<span className="text-primary">club</span>
                      </h3>
                      <p className="text-xs text-white/50 tracking-widest uppercase font-mono">
                        Creative Coding at SRM
                      </p>
                    </div>
                  </motion.div>

                  <p className="text-white/60 max-w-md mb-8 leading-relaxed">
                    Where creativity meets code. Join our community of designers, developers, and dreamers pushing the boundaries of digital art.
                  </p>

                  {/* Newsletter Input */}
                  <form onSubmit={handleSubscribe} className="relative max-w-md">
                    <div 
                      className="relative rounded-xl overflow-hidden"
                      style={{
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)"
                      }}
                    >
                      {/* Neon Border */}
                      <div 
                        className="absolute inset-0 rounded-xl"
                        style={{
                          padding: "1px",
                          background: "linear-gradient(135deg, #8b5cf6 0%, #f472b6 50%, #60a5fa 100%)",
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />

                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.dev"
                        className="w-full px-5 py-4 bg-black/60 text-white font-mono text-sm placeholder:text-white/30 border-none outline-none focus:ring-0"
                      />

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-[#a78bfa] text-white text-sm font-mono font-medium"
                      >
                        {isSubscribed ? "Subscribed!" : "Subscribe"}
                      </motion.button>
                    </div>
                  </form>
                </div>

                {/* Right - Links Grid */}
                <div className="grid grid-cols-3 gap-8">
                  {/* Explore */}
                  <div>
                    <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-6">
                      // Explore
                    </h4>
                    <ul className="space-y-3">
                      {footerLinks.explore.map((link) => (
                        <li key={link.label}>
                          <a 
                            href={link.href}
                            className="font-mono text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connect */}
                  <div>
                    <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-6">
                      // Connect
                    </h4>
                    <ul className="space-y-3">
                      {footerLinks.connect.map((link) => (
                        <li key={link.label}>
                          <a 
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div>
                    <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-6">
                      // Resources
                    </h4>
                    <ul className="space-y-3">
                      {footerLinks.resources.map((link) => (
                        <li key={link.label}>
                          <a 
                            href={link.href}
                            className="font-mono text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-mono text-xs text-white/40">
                  <span className="text-[#f472b6]">const</span>{" "}
                  <span className="text-[#60a5fa]">year</span>{" "}
                  <span className="text-white/60">=</span>{" "}
                  <span className="text-[#fb923c]">2026</span>
                  <span className="text-white/60">;</span>{" "}
                  <span className="text-white/30">// Sketchclub @ SRM Institute</span>
                </p>

                <div className="flex items-center gap-6">
                  <a href="#" className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors">
                    Code of Conduct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Black Space */}
        <div className="h-16 bg-black" />
      </footer>
    </>
  )
}
