import { Header } from '@/components/header'
import { AboutSection } from '@/components/sections/about/about'
import { Hero } from '@/components/sections/hero/hero'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <section className="container mx-auto px-4">
          <AboutSection />
        </section>
      </main>
    </div>
  )
}
