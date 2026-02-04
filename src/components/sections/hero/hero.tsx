'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import hero1 from '@/assets/images/hero-1.png'
import hero2 from '@/assets/images/hero-2.jpg'

const slides = [
  {
    id: 1,
    category: 'FARMÁCIA',
    title: 'QUALIDADE GARANTIDA',
    description:
      'Insumos selecionados e processos rigorosos para sua segurança.',
    image: hero1,
  },
  {
    id: 2,
    category: 'LABORATÓRIO',
    title: 'TECNOLOGIA AVANÇADA',
    description: 'Equipamentos de última geração para garantir precisão.',
    image: hero2,
  },
]

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative h-164 w-full">
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-50 md:brightness-75"
                  priority={slide.id === 1}
                />
                <div className="bg-linear-to-r from-zinc-900/70 to-slate-50/10 absolute inset-0" />
              </div>

              <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-2xl space-y-4">
                    <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                      {slide.category}
                    </span>
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="max-w-lg text-lg text-gray-200 md:text-xl">
                      {slide.description}
                    </p>
                    <div className="pt-4">
                      <Button
                        className="h-12 rounded-full px-8 text-sm font-bold uppercase tracking-wider md:text-base"
                        size="lg"
                      >
                        Contatar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute top-1/2 left-4 z-20 hidden -translate-y-1/2 md:block">
          <CarouselPrevious className="static translate-y-0 bg-transparent text-white/70 border-none hover:bg-white/10 hover:text-white h-12 w-12 [&_svg]:size-8" />
        </div>
        <div className="absolute top-1/2 right-4 z-20 hidden -translate-y-1/2 md:block">
          <CarouselNext className="static translate-y-0 bg-transparent text-white/70 border-none hover:bg-white/10 hover:text-white h-12 w-12 [&_svg]:size-8" />
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                current === index
                  ? 'w-12 bg-primary'
                  : 'w-6 bg-white/40 hover:bg-white/60',
              )}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
