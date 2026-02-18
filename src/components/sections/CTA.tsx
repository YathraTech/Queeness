'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
      <CTACard />
    </section>
  )
}

function CTACard() {
  return (
    <motion.div 
      className="relative rounded-2xl p-8 sm:p-12 md:p-16 text-center overflow-hidden bg-brown-800 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <BackgroundGradient />
      <CTAContent />
    </motion.div>
  )
}

function BackgroundGradient() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] opacity-50 from-brown-700 to-brown-900" />
  )
}

function CTAContent() {
  return (
    <div className="relative z-10">
      <CTATitle />
      <CTADescription />
      <CTAButtons />
    </div>
  )
}

function CTATitle() {
  return (
    <motion.h2 
      className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      Prêt à franchir le pas ?
    </motion.h2>
  )
}

function CTADescription() {
  return (
    <motion.p 
      className="mb-10 max-w-lg mx-auto text-lg font-light text-brown-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      Découvrez une aventure culturelle où chaque leçon{' '}
      ouvre votre esprit et enrichit votre vie.
    </motion.p>
  )
}

function CTAButtons() {
  return (
    <motion.div 
      className="flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <ContactButton />
    </motion.div>
  )
}

function ContactButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        className="px-10 py-4 h-auto rounded-xl font-medium text-base transition-all shadow-2xl bg-white text-brown-800 hover:bg-brown-50"
        asChild
      >
        <Link href="/contact">Contactez-nous</Link>
      </Button>
    </motion.div>
  )
}