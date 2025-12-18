'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Lightbulb, Star } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Chaque cours est une invitation à découvrir la beauté de la langue française avec enthousiasme et joie."
  },
  {
    icon: Users,
    title: "Personnalisation",
    description: "Votre parcours est unique. Mes programmes s'adaptent à vos objectifs et votre rythme d'apprentissage."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Des méthodes modernes et interactives pour rendre l'apprentissage stimulant et efficace."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Un engagement constant vers la qualité, certifié Qualiopi pour garantir le meilleur accompagnement."
  }
]

export function AboutValues() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="max-w-6xl mx-auto px-6">
        <ValuesHeader />
        <ValuesGrid />
        <PhilosophySection />
      </div>
    </section>
  )
}

function ValuesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="font-serif text-4xl md:text-5xl text-brown-900 mb-4">
        Mes Valeurs
      </h2>
      <p className="text-stone-600 max-w-2xl mx-auto text-lg">
        Les piliers qui guident ma mission d'enseignement et façonnent 
        l'expérience unique que je propose
      </p>
    </motion.div>
  )
}

function ValuesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {values.map((value, index) => (
        <ValueCard key={value.title} {...value} index={index} />
      ))}
    </div>
  )
}

function ValueCard({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: typeof Heart; 
  title: string; 
  description: string; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-xl transition-shadow"
    >
      <motion.div
        className="w-14 h-14 rounded-xl bg-brown-100 flex items-center justify-center mb-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon size={24} className="text-brown-700" />
      </motion.div>
      
      <h3 className="font-serif text-xl text-brown-900 mb-3">{title}</h3>
      <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

function PhilosophySection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-brown-800 via-brown-900 to-brown-950 rounded-3xl p-10 md:p-16 text-white overflow-hidden">
        <BackgroundPattern />
        <PhilosophyContent />
      </div>
    </motion.div>
  )
}

function BackgroundPattern() {
  return (
    <>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      </div>
    </>
  )
}

function PhilosophyContent() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-8"
      >
        <Star size={28} className="text-brown-200" fill="currentColor" />
      </motion.div>
      
      <h3 className="font-serif text-3xl md:text-4xl mb-6">
        Ma Philosophie
      </h3>
      
      <p className="text-lg md:text-xl leading-relaxed text-brown-100 mb-8">
        "Apprendre le français n'est pas seulement acquérir une nouvelle langue. 
        C'est ouvrir une porte vers une culture riche, tisser des liens authentiques 
        et enrichir sa vision du monde. Chaque leçon est une étape vers la découverte 
        de soi et des autres."
      </p>
      
      <div className="flex items-center justify-center gap-4 text-brown-200">
        <div className="h-px w-20 bg-brown-400" />
        <span className="text-sm font-medium">Lavania SUTHARSAN</span>
        <div className="h-px w-20 bg-brown-400" />
      </div>
    </div>
  )
}