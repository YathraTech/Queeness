import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { LogosMarquee } from '@/components/sections/LogosMarquee'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <LogosMarquee />
        <BentoGrid />
        <CTA />
      </main>
      <Footer />
    </>
  )
}