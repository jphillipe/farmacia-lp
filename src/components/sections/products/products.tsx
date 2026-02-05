'use client'

import * as React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

import WellmunepImage from '@/assets/images/Wellmunep.png'
import AdiDAOImage from '@/assets/images/AdiDAO.png'
import FormulasImage from '@/assets/images/Fórmulas Magistrales.png'
import SuplementosImage from '@/assets/images/Suplementos.jpg'
import VitaComplexImage from '@/assets/images/VitaComplex.jpg'

export function ProductsSection() {
  const t = useTranslations('products')

  const products = [
    {
      id: 1,
      category: t('immunity'),
      title: t('wellmunep.title'),
      description: t('wellmunep.description'),
      image: WellmunepImage,
    },
    {
      id: 2,
      category: t('digestion'),
      title: t('adidao.title'),
      description: t('adidao.description'),
      image: AdiDAOImage,
    },
    {
      id: 3,
      category: t('enzymes'),
      title: t('formulas.title'),
      description: t('formulas.description'),
      image: FormulasImage,
    },
    {
      id: 4,
      category: t('personalized'),
      title: t('supplements.title'),
      description: t('supplements.description'),
      image: SuplementosImage,
    },
    {
      id: 5,
      category: t('vitamins'),
      title: t('vitamComplex.title'),
      description: t('vitamComplex.description'),
      image: VitaComplexImage,
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              {t('title')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('heading')}
            </h2>
          </div>

          <Button
            variant="link"
            className="text-primary px-0! font-bold text-sm p-0 h-auto gap-2 hover:no-underline hover:opacity-80 justify-start md:justify-end"
          >
            {t('viewAll')}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 md:basis-1/2 lg:basis-2/7"
              >
                <div className="group cursor-pointer ">
                  <div className="relative aspect-square overflow-hidden rounded-t-[2rem] bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col gap-3 py-8 px-8 h-45 rounded-b-[2rem] bg-[#F9FAFB]">
                    <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                      {product.category}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 disabled:opacity-0 transition-opacity" />
            <CarouselNext className="-right-12 disabled:opacity-0 transition-opacity" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
