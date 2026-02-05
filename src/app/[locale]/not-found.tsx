'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion, ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] bg-white text-center px-4 py-20">
      <div className="bg-primary/5 p-8 rounded-full mb-8 animate-in zoom-in duration-500">
        <FileQuestion className="h-24 w-24 text-primary" />
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-primary mb-4 tracking-tighter">
        {t('title')}
      </h1>
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
        {t('subtitle')}
      </h2>
      <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg leading-relaxed">
        {t('description')}
      </p>
      <div className="flex gap-4">
        <Button
          asChild
          className="rounded-full px-8 h-12 font-bold uppercase tracking-wider shadow-xl shadow-primary/20"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backHome')}
          </Link>
        </Button>
      </div>
    </div>
  )
}
