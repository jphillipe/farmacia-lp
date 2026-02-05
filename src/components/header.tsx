'use client'

import { Menu, ClipboardList } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Flag from 'react-world-flags'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTransition } from 'react'

export function Header() {
  const t = useTranslations('header')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const changeLocale = (newLocale: 'pt' | 'es') => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  const scrollToForm = () => {
    const element = document.getElementById('orcamento')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-[-1.2px] text-primary leading-8">
            FARMÁ
            <span className="text-black">CIA</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-5 md:flex">
            <Button
              variant="ghost"
              size="icon"
              aria-label={t('spanish')}
              onClick={() => changeLocale('es')}
              disabled={isPending}
              className={locale === 'es' ? 'border-2 border-primary' : ''}
            >
              <Flag code="ES" style={{ width: '200px', height: '16px' }} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t('portuguese')}
              onClick={() => changeLocale('pt')}
              disabled={isPending}
              className={locale === 'pt' ? 'border-2 border-primary' : ''}
            >
              <Flag code="BR" style={{ width: '200px', height: '16px' }} />
            </Button>
            <Button className="font-bold rounded-full" onClick={scrollToForm}>
              <ClipboardList className="mr-2 h-4 w-4" />
              {t('requestQuote')}
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-4">
              <SheetHeader>
                <SheetTitle>{t('menu')}</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className={`flex-1 gap-2 font-bold ${
                        locale === 'es' ? 'border-primary bg-primary/5' : ''
                      }`}
                      aria-label={t('spanish')}
                      onClick={() => changeLocale('es')}
                      disabled={isPending}
                    >
                      <Flag
                        code="ES"
                        style={{ width: '20px', height: '15px' }}
                      />
                      <span>ES</span>
                    </Button>
                    <Button
                      variant="outline"
                      className={`flex-1 gap-2 font-bold ${
                        locale === 'pt' ? 'border-primary bg-primary/5' : ''
                      }`}
                      aria-label={t('portuguese')}
                      onClick={() => changeLocale('pt')}
                      disabled={isPending}
                    >
                      <Flag
                        code="BR"
                        style={{ width: '20px', height: '15px' }}
                      />
                      <span className="font-bold text-xs text-[#059669]">
                        PT
                      </span>
                    </Button>
                  </div>
                </div>
                <Button className="w-full font-bold" onClick={scrollToForm}>
                  <ClipboardList className="mr-2 h-4 w-4" />
                  {t('requestQuote')}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
