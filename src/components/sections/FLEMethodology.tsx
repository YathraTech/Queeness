'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, Video, HeadphonesIcon, BookCheck, Target } from 'lucide-react'

export function FLEMethodology() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <MethodologyCards />
        <ToolsSection />
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brown-200 bg-brown-50/50">
          <Sparkles size={16} className="text-brown-700" />
          <span className="text-sm font-medium text-brown-700">Méthodologie innovante</span>
        </div>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl text-brown-900 mb-4">
        Une approche pédagogique éprouvée
      </h2>
      <p className="text-lg text-stone-600 max-w-3xl mx-auto">
        Combinez apprentissage théorique et pratique intensive pour une progression optimale
      </p>
    </motion.div>
  )
}

function MethodologyCards() {
  const methods = [
    {
      icon: Users,
      title: "Approche communicative",
      description: "Mises en situation réelles et jeux de rôle pour développer vos compétences pratiques",
      features: [
        "Simulations d'entretiens",
        "Présentations en conditions réelles",
        "Débats et discussions",
        "Négociations simulées"
      ]
    },
    {
      icon: Target,
      title: "Apprentissage sur mesure",
      description: "Programme personnalisé selon votre secteur d'activité et vos objectifs professionnels",
      features: [
        "Évaluation initiale détaillée",
        "Plan de formation individualisé",
        "Contenus sectoriels spécifiques",
        "Suivi personnalisé"
      ]
    },
    {
      icon: Video,
      title: "Blended learning",
      description: "Combinez cours en présentiel et ressources numériques pour une flexibilité maximale",
      features: [
        "Cours en visioconférence",
        "Plateforme e-learning",
        "Ressources multimedia",
        "Exercices interactifs"
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
      {methods.map((method, index) => (
        <MethodCard key={method.title} {...method} index={index} />
      ))}
    </div>
  )
}

function MethodCard({
  icon: Icon,
  title,
  description,
  features,
  index
}: {
  icon: typeof Users
  title: string
  description: string
  features: string[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-2xl border border-stone-200 p-8 h-full hover:shadow-xl transition-all hover:border-brown-300">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brown-600 to-brown-800 flex items-center justify-center text-white mb-6 group-hover:shadow-lg"
        >
          <Icon size={28} />
        </motion.div>
        
        <h3 className="font-serif text-2xl text-brown-900 mb-3">{title}</h3>
        <p className="text-stone-600 mb-6">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="flex items-start gap-2 text-sm text-stone-600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-1.5 flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function ToolsSection() {
  const tools = [
    {
      icon: HeadphonesIcon,
      title: "Laboratoire de langues",
      description: "Exercices d'écoute et de prononciation avec feedback instantané"
    },
    {
      icon: BookCheck,
      title: "Ressources pédagogiques",
      description: "Bibliothèque de documents authentiques et supports multimedia"
    },
    {
      icon: Video,
      title: "Sessions enregistrées",
      description: "Revisionnez les cours à votre rythme pour renforcer vos acquis"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brown-100 to-cream rounded-3xl" />
      <div className="relative bg-white/80 backdrop-blur rounded-3xl border border-stone-200 p-10 md:p-16">
        <h3 className="font-serif text-3xl text-brown-900 text-center mb-4">
          Outils pédagogiques modernes
        </h3>
        <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">
          Des ressources technologiques avancées pour optimiser votre apprentissage
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={tool.title} {...tool} index={index} />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-brown-50 rounded-2xl border border-brown-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-medium text-brown-900 mb-1">Plateforme d'apprentissage disponible 24/7</h4>
              <p className="text-sm text-stone-600">Accédez à vos cours et exercices à tout moment</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-brown-300">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-brown-700">Accès illimité</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ToolCard({
  icon: Icon,
  title,
  description,
  index
}: {
  icon: typeof HeadphonesIcon
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center mx-auto mb-4"
      >
        <Icon size={28} className="text-brown-800" />
      </motion.div>
      <h4 className="font-medium text-brown-900 mb-2">{title}</h4>
      <p className="text-sm text-stone-600">{description}</p>
    </motion.div>
  )
}