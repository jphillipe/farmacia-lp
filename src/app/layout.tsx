import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#10B981',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Farmácia',
  description: 'Sua farmácia online',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
