'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function AboutCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <CTACard />
      </div>
    </section>
  )
}

function CTACard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden"
    >
      <div className="bg-white rounded-3xl border border-stone-200 p-10 md:p-16 text-center shadow-xl">
        <BackgroundDecoration />
        <CTAContent />
      </div>
    </motion.div>
  )
}

function BackgroundDecoration() {
  return (
    <>
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-brown-100/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 bg-brown-200/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  )
}

function CTAContent() {
  return (
    <div className="relative z-10">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brown-100 mb-6"
      >
        <MessageCircle size={28} className="text-brown-700" />
      </motion.div>
      
      <h2 className="font-serif text-3xl md:text-4xl text-brown-900 mb-4">
        Prête à vous accompagner
      </h2>
      
      <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
        Chaque parcours d'apprentissage est unique. Discutons ensemble de vos objectifs 
        et trouvons la formule qui vous correspond parfaitement.
      </p>
      
      <CTAButtons />
    </div>
  )
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <PrimaryButton />
      <SecondaryButton />
    </div>
  )
}

function PrimaryButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        className="px-8 py-4 h-auto rounded-xl bg-brown-700 hover:bg-brown-800 text-white font-medium text-base transition-all shadow-xl"
        asChild
      >
        <Link href="/contact">
          Commencez votre aventure
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </Button>
    </motion.div>
  )
}

function SecondaryButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        variant="outline"
        className="px-8 py-4 h-auto rounded-xl border-brown-300 hover:bg-brown-50 text-brown-700 font-medium text-base transition-all"
        asChild
      >
        <Link href="#formations">
          Découvrir les formations
        </Link>
      </Button>
    </motion.div>
  )
}