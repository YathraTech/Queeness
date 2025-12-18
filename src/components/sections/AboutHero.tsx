'use client'

import { motion } from 'framer-motion'
import { Heart, BookOpen } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-brown-50 to-cream">
      <BackgroundElements />
      <HeroContent />
    </section>
  )
}

function BackgroundElements() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
      <motion.div 
        className="absolute top-40 left-10 w-20 h-20 rounded-full bg-brown-200/20 blur-2xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-brown-100/30 blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          scale: [1.1, 1, 1.1]
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
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ProfileSection />
        <TitleSection />
        <QuoteSection />
      </motion.div>
    </div>
  )
}

function ProfileSection() {
  return (
    <motion.div 
      className="flex justify-center mb-8"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brown-600 to-brown-800 flex items-center justify-center text-white shadow-2xl">
          <span className="text-4xl font-serif">LS</span>
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-brown-100 border-4 border-white flex items-center justify-center">
          <Heart size={16} className="text-brown-600" fill="currentColor" />
        </div>
      </div>
    </motion.div>
  )
}

function TitleSection() {
  return (
    <>
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-4 text-brown-900">
        Lavania SUTHARSAN
      </h1>
      <div className="flex items-center justify-center gap-2 mb-6">
        <BookOpen size={20} className="text-brown-600" />
        <p className="text-lg font-medium text-brown-700">
          Fondatrice & Formatrice passionnée
        </p>
      </div>
    </>
  )
}

function QuoteSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="relative"
    >
      <div className="text-6xl text-brown-200 absolute -top-4 left-1/2 -translate-x-1/2">"</div>
      <p className="text-xl md:text-2xl font-light text-stone-600 italic max-w-3xl mx-auto leading-relaxed">
        Ma passion pour le français transcende les simples mots et constitue 
        le cœur vibrant de ma mission
      </p>
    </motion.div>
  )
}