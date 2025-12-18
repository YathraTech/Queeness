'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BankingCard } from '@/components/cards/BankingCard'
import { ComplianceCard } from '@/components/cards/ComplianceCard'
import { RegisteredAgentCard } from '@/components/cards/RegisteredAgentCard'
import { StockIssuanceCard } from '@/components/cards/StockIssuanceCard'

export function BentoGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <BentoHeader />
      <BentoCards />
    </section>
  )
}

function BentoHeader() {
  return (
    <motion.div 
      className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <HeaderContent />
      <NavigationButtons />
    </motion.div>
  )
}

function HeaderContent() {
  return (
    <div className="max-w-xl">
      <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">
        Franchissez les frontières linguistiques et professionnelles.
      </h2>
      <p className="text-stone-500 text-lg font-light leading-relaxed">
        Chaque leçon est une invitation à la découverte de soi et du monde. 
        Tissez des connexions, ouvrez votre esprit et enrichissez votre vie.
      </p>
    </div>
  )
}

function NavigationButtons() {
  return (
    <div className="flex gap-2">
      <NavButton icon={ArrowLeft} />
      <NavButton icon={ArrowRight} />
    </div>
  )
}

function NavButton({ icon: Icon }: { icon: typeof ArrowLeft }) {
  return (
    <motion.button 
      className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-stone-200 hover:bg-white text-stone-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={18} />
    </motion.button>
  )
}

function BentoCards() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <BankingCard />
      <ComplianceCard />
      <RegisteredAgentCard />
      <StockIssuanceCard />
    </motion.div>
  )
}