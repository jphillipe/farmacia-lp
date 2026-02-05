import { getTranslations } from 'next-intl/server'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://farmacia.com.br'

export async function generateJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    name: 'Farmácia',
    url: `${BASE_URL}/${locale}`,
    logo: `${BASE_URL}/og-image.png`,
    description: t('description'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Exemplo, 123 - Centro',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    telephone: '+55 (11) 99999-9999',
    email: 'laboratorio@email.com',
    sameAs: [],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    priceRange: '$$',
  }
}
