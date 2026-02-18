'use client'

import { motion } from 'framer-motion'
import { BookOpen, MessageSquare, PenTool, Globe, Briefcase, GraduationCap } from 'lucide-react'

export function FLEProgram() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-cream">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <ProgramModules />
        <LevelsSection />
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brown-200 bg-white">
          <BookOpen size={16} className="text-brown-700" />
          <span className="text-sm font-medium text-brown-700">Programme détaillé</span>
        </div>
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brown-900 mb-4">
        Un parcours adapté à vos besoins
      </h2>
      <p className="text-lg text-stone-600 max-w-3xl mx-auto">
        Des modules complémentaires pour une maîtrise complète du français professionnel
      </p>
    </motion.div>
  )
}

function ProgramModules() {
  const modules = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Communication orale",
      content: [
        "Techniques de présentation",
        "Prise de parole en public",
        "Animation de réunions",
        "Gestion des conflits"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: PenTool,
      number: "02",
      title: "Expression écrite",
      content: [
        "Rédaction de rapports",
        "Emails professionnels",
        "Notes de synthèse",
        "Propositions commerciales"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      number: "03",
      title: "Vocabulaire métier",
      content: [
        "Terminologie sectorielle",
        "Expressions idiomatiques",
        "Jargon professionnel",
        "Acronymes courants"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Briefcase,
      number: "04",
      title: "Négociation",
      content: [
        "Techniques de négociation",
        "Argumentation",
        "Gestion des objections",
        "Conclusion de contrats"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: GraduationCap,
      number: "05",
      title: "Culture d'entreprise",
      content: [
        "Codes professionnels",
        "Savoir-vivre en entreprise",
        "Relations interculturelles",
        "Management à la française"
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: BookOpen,
      number: "06",
      title: "Projet professionnel",
      content: [
        "Mise en situation réelle",
        "Cas pratiques",
        "Simulations",
        "Évaluation finale"
      ],
      color: "from-brown-500 to-brown-600"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
      {modules.map((module, index) => (
        <ModuleCard key={module.title} {...module} index={index} />
      ))}
    </div>
  )
}

function ModuleCard({
  icon: Icon,
  number,
  title,
  content,
  color,
  index
}: {
  icon: typeof MessageSquare
  number: string
  title: string
  content: string[]
  color: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl transition-all"
    >
      <div className={`h-2 bg-gradient-to-r ${color}`} />

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl font-bold text-stone-300">{number}</span>
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white`}>
            <Icon size={20} />
          </div>
        </div>

        <h3 className="font-serif text-xl text-brown-900 mb-4">{title}</h3>

        <ul className="space-y-2">
          {content.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
              <span className="w-1 h-1 rounded-full bg-brown-400 mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function LevelsSection() {
  const levels = [
    { level: "A2+", name: "Élémentaire avancé", description: "Communiquer dans des situations simples du quotidien professionnel" },
    { level: "B1-B2", name: "Intermédiaire", description: "Interagir avec aisance dans un contexte professionnel courant" },
    { level: "C1", name: "Avancé", description: "Maîtriser le français dans des situations professionnelles complexes" }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-brown-800 to-brown-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-white"
    >
      <h3 className="font-serif text-3xl mb-4 text-center">
        Niveaux visés : A2+ à C1
      </h3>
      <p className="text-brown-200 text-center mb-12 max-w-2xl mx-auto">
        Quel que soit votre niveau actuel, nous vous accompagnons vers l'excellence
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        {levels.map((level, index) => (
          <LevelCard key={level.level} {...level} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

function LevelCard({
  level,
  name,
  description,
  index
}: {
  level: string
  name: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors"
    >
      <div className="text-2xl font-bold mb-2">{level}</div>
      <div className="text-lg font-medium mb-3">{name}</div>
      <p className="text-sm text-brown-200">{description}</p>
    </motion.div>
  )
}
