'use client'

import { motion } from 'framer-motion'
import { Globe, Briefcase, GraduationCap } from 'lucide-react'

export function FLEHero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-br from-white via-cream to-brown-50">
      <BackgroundElements />
      <HeroContent />
    </section>
  )
}

function BackgroundElements() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,127,69,0.1),transparent_50%)]" />
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-brown-200/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-brown-100/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  )
}

function HeroContent() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <IconBadge />
        <Title />
        <Subtitle />
        <Description />
        <CertificationBadge />
        <FeaturesBadges />
      </motion.div>
    </div>
  )
}

function IconBadge() {
  return (
    <motion.div
      className="flex justify-center mb-8"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brown-600 to-brown-800 flex items-center justify-center text-white shadow-2xl">
          <Globe size={36} />
        </div>
        <motion.div
          className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-brown-300 flex items-center justify-center"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Briefcase size={16} className="text-brown-700" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function Title() {
  return (
    <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-4 text-brown-900">
      Français langue étrangère à visée professionnel
    </h1>
  )
}

function Subtitle() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-brown-600 text-sm font-medium mb-6 backdrop-blur-sm border-brown-200 bg-brown-50/50">
      <GraduationCap size={16} />
      Un parcours d'apprentissage personnalisé
    </div>
  )
}

function Description() {
  return (
    <p className="text-base sm:text-xl md:text-2xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed mb-4">
      Développez des compétences linguistiques solides et adaptées au monde
      du travail avec une certification de niveau A2+ à C1
    </p>
  )
}

function CertificationBadge() {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brown-300 bg-white text-sm text-brown-800 font-medium shadow-sm">
        <GraduationCap size={16} className="text-brown-600" />
        Certification LEVELTEL-FLE (RS6427)
      </div>
    </div>
  )
}

function FeaturesBadges() {
  const features = [
    "Présentiel",
    "Durée flexible",
    "Tout public",
    "Éligible CPF"
  ]

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {features.map((feature, index) => (
        <motion.span
          key={feature}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="px-4 py-2 bg-white rounded-lg border border-brown-200 text-sm text-brown-700 font-medium shadow-sm"
        >
          {feature}
        </motion.span>
      ))}
    </div>
  )
}
