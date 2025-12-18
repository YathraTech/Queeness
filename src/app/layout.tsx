import type { Metadata } from 'next'
import { Inter, Newsreader } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Queeness | Apprendre et S\'épanouir',
  description: 'Formation en langue française certifiée Qualiopi. Découvrez une aventure culturelle où chaque leçon est significative.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        inter.variable,
        newsreader.variable,
        "antialiased selection:bg-stone-200 selection:text-stone-900 bg-noise text-stone-800"
      )}>
        {children}
      </body>
    </html>
  )
}