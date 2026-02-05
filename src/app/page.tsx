import { Header } from '@/components/header'
import { AboutSection } from '@/components/sections/about/about'
import { Hero } from '@/components/sections/hero/hero'
import { ProcessSection } from '@/components/sections/process/process'
import { ProductsSection } from '@/components/sections/products/products'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <section className="mx-auto">
          <AboutSection />
          <ProcessSection />
          <ProductsSection />
        </section>
      </main>
    </div>
  )
}
