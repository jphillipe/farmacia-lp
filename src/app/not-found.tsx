'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion, ArrowLeft } from 'lucide-react'
import './globals.css'
import { Montserrat, Inter } from 'next/font/google'
import messages from '../../messages/pt.json'

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

export default function NotFound() {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${inter.variable} font-montserrat antialiased`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
          <div className="bg-primary/5 p-8 rounded-full mb-8 animate-in zoom-in duration-500">
            <FileQuestion className="h-24 w-24 text-primary" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-primary mb-4 tracking-tighter">
            {messages.notFound.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
            {messages.notFound.subtitle}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg leading-relaxed">
            {messages.notFound.description}
          </p>
          <div className="flex gap-4">
            <Button
              asChild
              className="rounded-full px-8 h-12 font-bold uppercase tracking-wider shadow-xl shadow-primary/20"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {messages.notFound.backHome}
              </Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}
