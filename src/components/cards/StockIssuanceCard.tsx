'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function StockIssuanceCard() {
  return (
    <motion.div 
      className="md:col-span-2 group relative rounded-2xl border p-8 overflow-hidden bg-white border-stone-200"
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <CardContent />
    </motion.div>
  )
}

function CardContent() {
  return (
    <div className="h-full">
      <CardText />
    </div>
  )
}

function CardText() {
  return (
    <div className="flex flex-col justify-center">
      <CardTitle />
      <CardDescription />
      <LearnMoreLink />
    </div>
  )
}

function CardTitle() {
  return (
    <h3 className="font-serif text-2xl mb-2 text-stone-900">Communauté Dynamique</h3>
  )
}

function CardDescription() {
  return (
    <p className="text-stone-500 text-sm leading-relaxed mb-6">
      Rejoignez une communauté diverse pour échanger, pratiquer et progresser ensemble.
    </p>
  )
}

function LearnMoreLink() {
  return (
    <motion.a 
      href="#" 
      className="font-medium text-sm flex items-center gap-2 text-stone-900 group/link"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      En savoir plus
      <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
    </motion.a>
  )
}

