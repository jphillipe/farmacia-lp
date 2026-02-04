import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Farmácia',
  description: 'Sua farmácia online',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        {children}
      </body>
    </html>
  )
}
