'use client'

import { Play } from 'lucide-react'
import Image from 'next/image'
import videoImage from '@/assets/images/video.png'
import { useTranslations } from 'next-intl'

export function ProcessSection() {
  const t = useTranslations('process')

  const items = [
    t('certifiedMaterials'),
    t('highComplexityLabs'),
    t('qualityControl'),
    t('personalizedPrescription'),
  ]

  return (
    <section className="relative w-full bg-[#111827] py-16 md:py-24 overflow-hidden">
      <div
        className="absolute -bottom-20 -right-20 w-96 z-0 h-96 bg-primary rounded-full blur-3xl opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              {t('title')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t('heading')}
            </h2>
            <p className="text-gray-300 text-lg leading-7 tracking-normal max-w-xl">
              {t('description')}
            </p>

            <ul className="space-y-4 mt-6">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full aspect-video bg-black/40 rounded-2xl border border-white/10 overflow-hidden group cursor-pointer">
            <Image
              src={videoImage}
              alt="Vídeo Institucional"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 md:h-20 md:w-20 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-primary/20">
                <Play className="h-6 w-6 md:h-8 md:w-8 text-white fill-white ml-1" />
              </div>
            </div>

            <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6 bg-black/60 backdrop-blur-sm px-2 py-1 lg:px-4 lg:py-2 rounded-md border border-white/10">
              <span className="text-white text-xs lg:text-sm font-medium">
                {t('watchVideo')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
