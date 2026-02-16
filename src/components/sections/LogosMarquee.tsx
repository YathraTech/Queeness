'use client'

import { motion } from 'framer-motion'

export function LogosMarquee() {
  return (
    <section className="border-y py-10 mb-32 overflow-hidden border-stone-200/60 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-center text-lg font-medium tracking-wide text-stone-500"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Éligible au financement sous conditions
        </motion.p>
      </div>
    </section>
  )
}