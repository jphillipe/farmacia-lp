import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { AboutSection } from '@/components/sections/about/about'
import { ContactSection } from '@/components/sections/contact/contact'
import { Hero } from '@/components/sections/hero/hero'
import { ProcessSection } from '@/components/sections/process/process'
import { ProductsSection } from '@/components/sections/products/products'
import { TestimonialsSection } from '@/components/sections/testimonials/testimonials'
import { generateJsonLd } from '@/lib/json-ld'

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const jsonLd = await generateJsonLd(locale)

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <section className="mx-auto">
          <AboutSection />
          <ProcessSection />
          <ProductsSection />
          <TestimonialsSection />
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
