'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CertificateCard } from '@/components/cards/CertificateCard'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10 pt-32">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  )
}

function HeroContent() {
  return (
    <motion.div 
      className="flex-1 text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <TrustBadge />
      <HeroTitle />
      <HeroDescription />
      <HeroActions />
    </motion.div>
  )
}

function TrustBadge() {
  return (
    <motion.a
      href="/attestation-qualiopi.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-brown-600 text-xs font-medium mb-8 backdrop-blur-sm border-brown-200 bg-brown-50/50 hover:bg-brown-100/50 hover:border-brown-300 transition-all cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-brown-600 animate-pulse" />
      <span>Certifié Qualiopi</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="12" 
        height="12" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </motion.a>
  )
}

function HeroTitle() {
  return (
    <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[0.95] text-brown-900">
      Apprendre et <br />
      <i className="text-brown-400">s'épanouir.</i>
    </h1>
  )
}

function HeroDescription() {
  return (
    <p className="text-lg max-w-md mb-10 leading-relaxed font-light text-stone-600">
      Ma passion pour le français transcende les simples mots. 
      Découvrez une aventure culturelle où chaque leçon est significative.
    </p>
  )
}

function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button 
        className="h-12 px-8 rounded-xl bg-brown-700 hover:bg-brown-800 text-white font-medium text-[15px] transition-all shadow-xl shadow-brown-700/10"
        asChild
      >
        <Link href="/contact">
          Commencer l'aventure
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </Button>
      <UserAvatars />
    </div>
  )
}

function UserAvatars() {
  const avatars = [
    'https://i.pravatar.cc/100?img=33',
    'https://i.pravatar.cc/100?img=47'
  ]
  
  return (
    <div className="flex items-center -space-x-3 pl-4">
      {avatars.map((src, i) => (
        <div 
          key={i}
          className="w-10 h-10 rounded-full border-2 border-cream overflow-hidden bg-stone-200"
        >
          <img 
            src={src} 
            className="w-full h-full object-cover grayscale" 
            alt="User"
          />
        </div>
      ))}
      <div className="w-10 h-10 rounded-full border-2 border-cream flex items-center justify-center text-[10px] font-medium bg-stone-100 text-stone-600">
        +2k
      </div>
    </div>
  )
}

function HeroVisual() {
  return (
    <motion.div 
      className="flex-1 w-full relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <BackgroundBlob />
      <CardStack />
    </motion.div>
  )
}

function BackgroundBlob() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr to-transparent rounded-full blur-3xl z-[-1] from-stone-200/40 via-stone-100/0" />
  )
}

function CardStack() {
  return (
    <div className="relative w-full aspect-[4/3]">
      <BackCard />
      <MiddleCard />
      <CertificateCard />
    </div>
  )
}

function BackCard() {
  return (
    <motion.div 
      className="absolute top-0 right-0 w-[90%] rounded-xl shadow-lg border p-6 transform translate-x-4 -translate-y-4 opacity-60 scale-95 origin-bottom-left rotate-2 bg-white border-stone-200/60"
      whileHover={{ rotate: 3, scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="h-2 w-1/3 rounded mb-4 bg-stone-100" />
      <div className="space-y-2">
        <div className="h-1.5 w-full rounded bg-stone-50" />
        <div className="h-1.5 w-5/6 rounded bg-stone-50" />
      </div>
    </motion.div>
  )
}

function MiddleCard() {
  return (
    <motion.div 
      className="absolute top-8 right-8 w-[90%] rounded-xl shadow-xl border p-6 transform translate-x-2 -translate-y-2 opacity-80 scale-[0.98] origin-bottom-left -rotate-1 bg-white border-stone-200"
      whileHover={{ rotate: -2, scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <CardHeader />
      <CardContent />
    </motion.div>
  )
}

function CardHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded flex items-center justify-center bg-stone-100 text-stone-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path>
            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-900">
            Articles of Inc.
          </div>
          <div className="text-[10px] text-stone-500">Delaware • C-Corp</div>
        </div>
      </div>
      <CheckBadge />
    </div>
  )
}

function CheckBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
      <path d="m9 12l2 2l4-4"></path>
    </svg>
  )
}

function CardContent() {
  return (
    <div className="space-y-3">
      <div className="h-2 w-full rounded-full bg-stone-100" />
      <div className="h-2 w-full rounded-full bg-stone-100" />
      <div className="h-2 w-2/3 rounded-full bg-stone-100" />
    </div>
  )
}