import '../globals.css'
import { Montserrat, Inter } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://farmacia.com.br'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<string, string> = {
    pt: 'Farmácia - Sua farmácia online',
    es: 'Farmacia - Su farmacia online',
  }

  const descriptions: Record<string, string> = {
    pt: 'Excelência em compostos magistrais e cuidado personalizado da saúde',
    es: 'Excelencia en compuestos magistrales y cuidado personalizado de la salud',
  }

  const keywords: Record<string, string[]> = {
    pt: [
      'farmácia de manipulação',
      'fórmulas magistrais',
      'suplementos',
      'manipulação farmacêutica',
      'farmácia online',
      'saúde',
      'medicamentos manipulados',
    ],
    es: [
      'farmacia de manipulación',
      'fórmulas magistrales',
      'suplementos',
      'manipulación farmacéutica',
      'farmacia online',
      'salud',
      'medicamentos manipulados',
    ],
  }

  return {
    title: {
      default: titles[locale] || titles.pt,
      template: '%s | Farmácia',
    },
    description: descriptions[locale] || descriptions.pt,
    keywords: keywords[locale] || keywords.pt,
    authors: [{ name: 'Farmácia' }],
    creator: 'Farmácia',
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        pt: `${BASE_URL}/pt`,
        es: `${BASE_URL}/es`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'pt' ? 'pt_BR' : 'es_ES',
      alternateLocale: locale === 'pt' ? 'es_ES' : 'pt_BR',
      url: `${BASE_URL}/${locale}`,
      siteName: 'Farmácia',
      title: titles[locale] || titles.pt,
      description: descriptions[locale] || descriptions.pt,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: titles[locale] || titles.pt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.pt,
      description: descriptions[locale] || descriptions.pt,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'pt' | 'es')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} font-montserrat antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster richColors position="top-right" />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
