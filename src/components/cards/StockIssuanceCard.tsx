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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <CardText />
      <PieChartVisual />
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

function PieChartVisual() {
  return (
    <div className="relative flex items-center justify-center">
      <PieChart />
      <ChartCenter />
    </div>
  )
}

function PieChart() {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      className="w-40 h-40 transform -rotate-90"
      initial={{ scale: 0, rotate: -90 }}
      whileInView={{ scale: 1, rotate: -90 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
    >
      <circle 
        cx="50" 
        cy="50" 
        r="40" 
        fill="transparent" 
        stroke="#E7E5E4" 
        strokeWidth="20"
      />
      <motion.circle 
        cx="50" 
        cy="50" 
        r="40" 
        fill="transparent" 
        stroke="#1C1917" 
        strokeWidth="20" 
        strokeDasharray="180 251"
        initial={{ strokeDasharray: "0 251" }}
        whileInView={{ strokeDasharray: "180 251" }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
      />
      <motion.circle 
        cx="50" 
        cy="50" 
        r="40" 
        fill="transparent" 
        stroke="#57534E" 
        strokeWidth="20" 
        strokeDasharray="40 251" 
        strokeDashoffset="-180"
        initial={{ strokeDasharray: "0 251" }}
        whileInView={{ strokeDasharray: "40 251" }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      />
    </motion.svg>
  )
}

function ChartCenter() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <div className="text-center">
        <div className="text-2xl font-serif text-stone-900">100%</div>
        <div className="text-[8px] uppercase tracking-widest text-stone-400">Progression</div>
      </div>
    </motion.div>
  )
}