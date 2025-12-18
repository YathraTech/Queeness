'use client'

import { Check, Stamp } from 'lucide-react'
import { motion } from 'framer-motion'

interface CertificateData {
  companyName: string
  sharesAuthorized: string
  fileDate: string
  state: string
}

const certificateData: CertificateData = {
  companyName: 'Queeness Formation',
  sharesAuthorized: '500+ apprenants',
  fileDate: 'Déc 15, 2023',
  state: 'France'
}

export function CertificateCard() {
  return (
    <motion.div 
      className="absolute top-16 right-16 w-[90%] rounded-xl shadow-2xl border p-8 bg-white shadow-stone-200/50 border-stone-200"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <CertificateHeader />
      <CertificateData />
      <CertificateFooter />
    </motion.div>
  )
}

function CertificateHeader() {
  return (
    <div className="flex items-start justify-between mb-8 pb-6 border-b border-stone-100">
      <div>
        <h3 className="font-serif text-2xl italic text-stone-900">Certificat</h3>
        <p className="text-xs text-stone-500 mt-1 font-medium tracking-wide uppercase">
          Qualiopi
        </p>
      </div>
      <StampIcon />
    </div>
  )
}

function StampIcon() {
  return (
    <motion.div 
      className="w-12 h-12 rounded-full border flex items-center justify-center border-stone-200"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      <Stamp size={24} className="text-stone-600" />
    </motion.div>
  )
}

function CertificateData() {
  const fields = [
    { label: 'Organisme', value: certificateData.companyName },
    { label: 'Apprenants Formés', value: certificateData.sharesAuthorized },
    { label: 'Date Certification', value: certificateData.fileDate },
    { label: 'Pays', value: certificateData.state }
  ]
  
  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {fields.map((field) => (
        <DataField key={field.label} {...field} />
      ))}
    </div>
  )
}

function DataField({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-[10px] uppercase tracking-widest font-semibold mb-1 text-stone-400">
        {label}
      </div>
      <div className="text-lg font-serif text-stone-900">{value}</div>
    </motion.div>
  )
}

function CertificateFooter() {
  return (
    <motion.div 
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <ApprovalBadge />
      <ApprovalText />
    </motion.div>
  )
}

function ApprovalBadge() {
  return (
    <motion.div 
      className="h-8 w-8 rounded-full flex items-center justify-center border bg-brown-50 text-brown-700 border-brown-200"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Check size={14} strokeWidth={3} />
    </motion.div>
  )
}

function ApprovalText() {
  return (
    <div className="text-xs font-medium text-stone-600">
      Certifié & Approuvé
    </div>
  )
}