"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export function TerminalSection() {
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "$ sketchclub --init",
    "Loading creative modules...",
    "✓ p5.js ready",
    "✓ three.js ready",
    "✓ shaders compiled",
    "",
    "Welcome to Sketchclub Terminal v2.0",
    "Type your email to join the creative network",
    "",
  ])
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalLines])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && email.includes("@")) {
      setTerminalLines((prev) => [
        ...prev,
        `$ subscribe --email "${email}"`,
        "Connecting to creative network...",
        "✓ Email verified",
        "✓ Account created",
        `Welcome aboard, ${email.split("@")[0]}!`,
        "",
        "You're now part of the creative coding community.",
        "Check your inbox for the onboarding guide.",
      ])
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="terminal" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-[#fb923c] mb-4 block">
            {"// join_the_network"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">The </span>
            <span className="text-primary">Terminal</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-md mx-auto">
            <span className="text-[#f472b6]">console</span>.log
            <span className="text-foreground">(</span>
            <span className="text-[#4ade80]">&quot;Join our newsletter&quot;</span>
            <span className="text-foreground">)</span>
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden bg-card border border-border shadow-2xl shadow-primary/10">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/80 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                sketchclub@terminal ~ /subscribe
              </span>
            </div>

            {/* Terminal Body */}
            <div 
              ref={terminalRef}
              className="p-6 h-80 overflow-y-auto bg-[#0a0a0f] font-mono text-sm"
            >
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`mb-1 ${
                    line.startsWith("$")
                      ? "text-[#4ade80]"
                      : line.startsWith("✓")
                      ? "text-[#60a5fa]"
                      : line.startsWith("Welcome")
                      ? "text-[#f472b6]"
                      : "text-muted-foreground"
                  }`}
                >
                  {line || "\u00A0"}
                </motion.div>
              ))}

              {/* Input Line */}
              {!isSubmitted && (
                <form onSubmit={handleSubmit} className="flex items-center mt-4">
                  <span className="text-[#4ade80] mr-2">$</span>
                  <span className="text-[#fb923c] mr-2">email:</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="you@creative.dev"
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50"
                  />
                  <motion.span
                    animate={{ opacity: isFocused ? [1, 0] : 0 }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="w-2 h-5 bg-primary ml-1"
                  />
                </form>
              )}

              {isSubmitted && (
                <div className="flex items-center mt-4">
                  <span className="text-[#4ade80]">$ _</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="w-2 h-5 bg-primary ml-1"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            {!isSubmitted && (
              <div className="px-6 pb-6 bg-[#0a0a0f]">
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full font-mono text-sm py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {">> execute subscribe.sh"}
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
