'use client'

import { motion } from 'framer-motion'
import { Wallet, Wifi } from 'lucide-react'

export function BankingCard() {
  return (
    <motion.div 
      className="group relative rounded-2xl border p-8 overflow-hidden bg-white border-stone-200"
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <PatternBackground />
      <CardContent />
    </motion.div>
  )
}

function PatternBackground() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
  )
}

function CardContent() {
  return (
    <div className="relative z-10 h-full flex flex-col">
      <CardIcon />
      <CardText />
      <CreditCardVisual />
    </div>
  )
}

function CardIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-brown-50 border flex items-center justify-center shadow-sm mb-6 border-brown-200 text-brown-800">
      <Wallet size={24} />
    </div>
  )
}

function CardText() {
  return (
    <>
      <h3 className="font-serif text-2xl mb-2 text-stone-900">Formation Français Professionnel</h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-8">
        Maîtrisez le français pour élever vos compétences professionnelles.
      </p>
    </>
  )
}

function CreditCardVisual() {
  return (
    <motion.div 
      className="mt-auto relative left-0 right-0 h-32 rounded-t-xl p-4 shadow-2xl bg-gradient-to-br from-brown-800 to-brown-900"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-8 h-5 rounded bg-white/20" />
        <Wifi size={16} className="text-white/60" />
      </div>
      <div className="font-mono text-xs mb-1 text-white/40">
        **** **** **** 4242
      </div>
    </motion.div>
  )
}