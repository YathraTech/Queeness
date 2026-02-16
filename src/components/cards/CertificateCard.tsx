'use client'

import { Stamp } from 'lucide-react'
import { motion } from 'framer-motion'

const certificateData = [
  { label: 'Organisme', value: 'Queeness Formation' },
  { label: 'Apprenants', value: '20+ apprenants' },
  { label: 'Entreprises formées', value: '3' },
  { label: 'Taux de satisfaction', value: '94%' },
]

export function CertificateCard() {
  return (
    <motion.div
      className="absolute top-16 right-16 w-[90%] rounded-xl shadow-2xl border p-8 bg-white shadow-stone-200/50 border-stone-200"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <CertificateHeader />
      <CertificateFields />
    </motion.div>
  )
}

function CertificateHeader() {
  return (
    <div className="flex items-start justify-between mb-8 pb-6 border-b border-stone-100">
      <div>
        <h3 className="font-serif text-2xl italic text-stone-900">Des résultats qui parlent d'eux-mêmes</h3>
      </div>
      <motion.div
        className="w-12 h-12 rounded-full border flex items-center justify-center border-stone-200"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Stamp size={24} className="text-stone-600" />
      </motion.div>
    </div>
  )
}

function CertificateFields() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {certificateData.map((field) => (
        <motion.div
          key={field.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[10px] uppercase tracking-widest font-semibold mb-1 text-stone-400">
            {field.label}
          </div>
          <div className="text-lg font-serif text-stone-900">{field.value}</div>
        </motion.div>
      ))}
    </div>
  )
}
