import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://farmacia.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['pt', 'es']

  const routes = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: {
      languages: {
        pt: `${BASE_URL}/pt`,
        es: `${BASE_URL}/es`,
      },
    },
  }))

  return routes
}
