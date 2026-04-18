import { Header } from "@/components/memories/header"
import { Hero } from "@/components/memories/hero"
import { Gallery } from "@/components/memories/gallery"
import { Timeline } from "@/components/memories/timeline"
import { Features } from "@/components/memories/features"
import { Footer } from "@/components/memories/footer"

export default function MemoriesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section id="gallery">
        <Gallery />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="features">
        <Features />
      </section>
      <Footer />
    </main>
  )
}
