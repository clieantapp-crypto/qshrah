import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import BioLinks from "@/components/bio-links"
import Features from "@/components/features"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BioLinks />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
