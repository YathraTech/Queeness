'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle2, FileCheck, Shield } from 'lucide-react'

export function AboutCertification() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <CertificationHeader />
        <CertificationContent />
      </div>
    </section>
  )
}

function CertificationHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-brown-600 text-sm font-medium mb-6 backdrop-blur-sm border-brown-200 bg-brown-50/50">
        <Shield size={16} />
        Centre de formation agréé
      </div>
      
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brown-900 mb-4">
        Notre Certification
      </h2>
    </motion.div>
  )
}

function CertificationContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <MainCertificationCard />
      <DetailsCards />
    </div>
  )
}

function MainCertificationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-brown-800 to-brown-900 rounded-2xl p-6 sm:p-8 text-white shadow-2xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <motion.div
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Award size={28} className="text-brown-200 sm:hidden" />
            <Award size={32} className="text-brown-200 hidden sm:block" />
          </motion.div>
          <div>
            <h3 className="text-xl sm:text-2xl font-serif mb-1">Certifié Qualiopi</h3>
            <p className="text-brown-200 text-sm">Depuis 2022</p>
          </div>
        </div>

        <motion.a
          href="/attestation-qualiopi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-sm font-medium transition-all group self-start"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Voir l&apos;attestation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </motion.a>
      </div>
      
      <div className="space-y-4 text-brown-100">
        <p className="leading-relaxed">
          Depuis 2022, nous sommes devenus un organisme de formation certifié Qualiopi 
          après avoir été audités par ICPF.
        </p>
        
        <div className="bg-white/10 backdrop-blur rounded-xl p-4">
          <div className="text-xs font-medium text-brown-200 mb-2">N° de déclaration d'activité</div>
          <div className="text-xl font-mono font-bold">11931027393</div>
        </div>
        
        <p className="text-sm italic">
          Nous sommes fiers d'être certifiés Qualiopi, une marque de qualité qui témoigne 
          de notre engagement à fournir des formations de haut niveau, conformément aux 
          exigences nationales.
        </p>
      </div>
    </motion.div>
  )
}

function DetailsCards() {
  return (
    <div className="space-y-6">
      <CategoriesCard />
      <QualityCard />
    </div>
  )
}

function CategoriesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white rounded-2xl border border-stone-200 p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-brown-100 flex items-center justify-center">
          <FileCheck size={20} className="text-brown-700" />
        </div>
        <h3 className="font-medium text-lg text-brown-900">Catégories d'actions certifiées</h3>
      </div>
      
      <p className="text-sm text-stone-600 mb-4">
        La certification qualité a été délivrée au titre des catégories d'actions suivantes :
      </p>
      
      <div className="space-y-3">
        <CategoryItem title="ACTIONS DE FORMATION" />
      </div>
    </motion.div>
  )
}

function CategoryItem({ title }: { title: string }) {
  return (
    <motion.div
      className="flex items-center gap-3 p-3 rounded-lg bg-brown-50 border border-brown-100"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <CheckCircle2 size={18} className="text-brown-600 flex-shrink-0" />
      <span className="text-sm font-medium text-brown-800">{title}</span>
    </motion.div>
  )
}

function QualityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-br from-brown-50 to-brown-100/50 rounded-2xl border border-brown-200 p-6"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
          <Shield size={20} className="text-brown-700" />
        </div>
        <div>
          <h3 className="font-medium text-brown-900 mb-2">Gage de qualité</h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Notre certification Qualiopi garantit le respect des critères qualité définis 
            par le référentiel national. Elle atteste de la qualité de notre processus de 
            formation et de notre amélioration continue.
          </p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-brown-200">
        <div className="flex items-center justify-between text-xs">
          <span className="text-stone-500">Audité par</span>
          <span className="font-medium text-brown-700">ICPF</span>
        </div>
      </div>
    </motion.div>
  )
}