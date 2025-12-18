import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HandicapHero } from '@/components/sections/HandicapHero'
import { HandicapContent } from '@/components/sections/HandicapContent'
import { HandicapSupport } from '@/components/sections/HandicapSupport'
import { HandicapContact } from '@/components/sections/HandicapContact'

export default function HandicapPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <HandicapHero />
        <HandicapContent />
        <HandicapSupport />
        <HandicapContact />
      </main>
      <Footer />
    </>
  )
}