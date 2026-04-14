import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import { SprintsSection } from "@/components/sprints-section"
import { TerminalSection } from "@/components/terminal-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <SprintsSection />
      <TerminalSection />
      <Footer />
    </main>
  )
}
