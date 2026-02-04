import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero/hero'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <section className="container mx-auto px-4">
          {/* outras seções com container */}
        </section>
      </main>
    </div>
  )
}
