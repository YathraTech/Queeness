'use client'

import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-brown-50 via-cream to-white">
      <BackgroundPattern />
      <HeroContent />
    </section>
  )
}

function BackgroundPattern() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-brown-200/30 rounded-full blur-3xl"
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
        className="absolute bottom-20 left-20 w-96 h-96 bg-brown-100/40 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4]
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

function HeroContent() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge />
        <Title />
        <Description />
      </motion.div>
    </div>
  )
}

function Badge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-brown-600 text-xs font-medium mb-8 backdrop-blur-sm border-brown-200 bg-white/50">
      <span className="w-1.5 h-1.5 rounded-full bg-brown-600 animate-pulse" />
      Nous sommes à votre écoute
    </div>
  )
}

function Title() {
  return (
    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-brown-900">
      Contactez-nous
    </h1>
  )
}

function Description() {
  return (
    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light text-stone-600">
      Une question sur nos formations ? Un projet à discuter ? 
      <br />
      Nous serions ravis d'échanger avec vous.
    </p>
  )
}