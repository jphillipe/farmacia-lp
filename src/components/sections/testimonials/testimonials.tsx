'use client'

import * as React from 'react'
import { Quote } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    text: 'Produtos de qualidade excepcional e atendimento humanizado. A equipe demonstra profundo conhecimento técnico e verdadeiro cuidado com cada paciente.',
    author: 'RUBEN DARIO',
    role: 'Nutricionista Clínico',
  },
  {
    id: 2,
    text: 'A qualidade dos produtos superou todas as minhas expectativas. O atendimento personalizado fez toda a diferença no meu tratamento.',
    author: 'MARIA SILVA',
    role: 'Cliente Recorrente',
  },
  {
    id: 3,
    text: 'Profissionalismo e competência. Recomendo fortemente a farmácia para quem busca manipulação de confiança e precisão.',
    author: 'JOÃO SANTOS',
    role: 'Médico Parceiro',
  },
]

export function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative w-full bg-[#F3F4F6] py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="absolute -top-10 lg:top-0 left-4 md:left-0 xl:left-20 opacity-10 pointer-events-none select-none scale-50 md:scale-75 xl:scale-100 origin-top-left">
          <Quote size={200} className="text-primary stroke-[2px]" />
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="flex flex-col items-center text-center px-4">
                  <div className="mb-8 bg-primary rounded-full p-4 shadow-lg shadow-primary/20">
                    <Quote className="h-6 w-6 text-white fill-white" />
                  </div>

                  <blockquote className="mb-8">
                    <p className="text-xl md:text-4xl italic text-[#374151] leading-10 tracking-normal font-light font-inter">
                      {`"${testimonial.text}"`}
                    </p>
                  </blockquote>

                  <div className="space-y-1">
                    <h4 className="font-extrabold text-foreground tracking-wide uppercase">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm font-bold text-primary">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  'h-1 rounded-full transition-all duration-300',
                  current === index
                    ? 'w-8 bg-primary'
                    : 'w-8 bg-gray-200 hover:bg-gray-300',
                )}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
