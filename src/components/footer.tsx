'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')

  const links = [
    t('ourDNA'),
    t('products'),
    t('orders'),
    t('laboratories'),
  ]

  return (
    <footer className="w-full bg-[#111827] text-gray-200 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-[-1.2px] text-primary leading-8">
                FARMÁ
                <span className="text-white">CIA</span>
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              {t('description')}
            </p>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-primary transition-colors"
                asChild
              >
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-primary transition-colors"
                asChild
              >
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-primary transition-colors"
                asChild
              >
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block" />

          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">{t('quickLinks')}</h3>
            <nav className="flex flex-col gap-4">
              {links.map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{t('copyright')}</p>

          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              {t('privacyPolicy')}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {t('termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
