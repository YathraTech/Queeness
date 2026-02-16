'use client'

import { motion } from 'framer-motion'
import { ArrowRight, HeartHandshake } from 'lucide-react'
import Link from 'next/link'

export function HandicapSupport() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-cream">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-brown-800 to-brown-900 rounded-3xl p-10 md:p-16 text-white"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
              <HeartHandshake size={32} className="text-brown-200" />
            </div>
          </div>

          <h3 className="font-serif text-3xl mb-6 text-center">
            Adaptation & Orientation
          </h3>

          <p className="text-brown-100 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            Si certaines adaptations ne peuvent être mises en œuvre dans nos locaux ou dans
            le cadre de notre offre actuelle, nous nous engageons à orienter la personne vers
            un partenaire ou un organisme compétent, capable de répondre à ses besoins spécifiques.
          </p>

          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-sm font-medium transition-all"
              >
                Nous contacter
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
