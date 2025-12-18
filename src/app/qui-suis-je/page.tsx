import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AboutHero } from '@/components/sections/AboutHero'
import { AboutContent } from '@/components/sections/AboutContent'
import { AboutCertification } from '@/components/sections/AboutCertification'
import { AboutCTA } from '@/components/sections/AboutCTA'

export default function QuiSuisJePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <AboutHero />
        <AboutContent />
        <AboutCertification />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}