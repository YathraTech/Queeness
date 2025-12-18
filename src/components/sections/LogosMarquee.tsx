'use client'

import { motion } from 'framer-motion'

const companies = [
  { name: 'Pôle Emploi', style: 'font-serif text-2xl font-bold italic' },
  { name: 'CPF', style: 'font-sans text-xl font-bold tracking-tighter' },
  { name: 'BPI France', style: 'font-serif text-2xl font-bold' },
  { name: 'CCI', style: 'font-mono text-xl font-bold tracking-tight' },
  { name: 'OPCO', style: 'font-sans text-xl font-black italic tracking-tighter' },
]

export function LogosMarquee() {
  return (
    <section className="border-y py-10 mb-32 overflow-hidden border-stone-200/60 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <MarqueeHeader />
        <CompanyLogos />
      </div>
    </section>
  )
}

function MarqueeHeader() {
  return (
    <motion.p 
      className="text-center text-xs font-medium uppercase tracking-widest mb-8 text-stone-400"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Une expérience d'apprentissage véritablement personnalisée
    </motion.p>
  )
}

function CompanyLogos() {
  return (
    <motion.div 
      className="flex justify-between items-center opacity-60 grayscale mix-blend-multiply gap-8 overflow-x-auto no-scrollbar"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {companies.map((company, index) => (
        <motion.span
          key={company.name}
          className={company.style}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {company.name}
        </motion.span>
      ))}
    </motion.div>
  )
}