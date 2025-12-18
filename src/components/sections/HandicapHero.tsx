'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Accessibility } from 'lucide-react'

export function HandicapHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-brown-50 to-white">
      <BackgroundPattern />
      <HeroContent />
    </section>
  )
}

function BackgroundPattern() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
      <motion.div 
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-brown-100/30 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  )
}

function HeroContent() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <IconSection />
        <TitleSection />
        <DescriptionSection />
      </motion.div>
    </div>
  )
}

function IconSection() {
  return (
    <motion.div 
      className="flex justify-center mb-8"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brown-600 to-brown-800 flex items-center justify-center text-white shadow-2xl">
        <Accessibility size={36} />
      </div>
    </motion.div>
  )
}

function TitleSection() {
  return (
    <>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-brown-600 text-sm font-medium mb-6 backdrop-blur-sm border-brown-200 bg-brown-50/50">
        <Heart size={14} className="text-brown-600" fill="currentColor" />
        Engagement inclusif
      </div>
      
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-brown-900">
        Prise en compte du handicap
      </h1>
    </>
  )
}

function DescriptionSection() {
  return (
    <p className="text-xl md:text-2xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
      Chez Queeness, l'accessibilité et l'inclusion sont au cœur de nos valeurs. 
      Nous nous engageons à offrir des formations adaptées à tous.
    </p>
  )
}