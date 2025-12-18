import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FLEHero } from '@/components/sections/FLEHero'
import { FLEObjectives } from '@/components/sections/FLEObjectives'
import { FLEProgram } from '@/components/sections/FLEProgram'
import { FLEMethodology } from '@/components/sections/FLEMethodology'
import { FLECTA } from '@/components/sections/FLECTA'

export default function FLEProfessionnelPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <FLEHero />
        <FLEObjectives />
        <FLEProgram />
        <FLEMethodology />
        <FLECTA />
      </main>
      <Footer />
    </>
  )
}