'use client'

import { motion } from 'framer-motion'
import { Target, Headphones, MessageCircle, BookOpen, Mic, Users } from 'lucide-react'

export function FLEObjectives() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <ObjectivesGrid />
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
          <Target size={16} className="text-brown-700" />
          <span className="text-sm font-medium text-brown-700">Objectifs pédagogiques</span>
        </div>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl text-brown-900 mb-4">
        Une formation complète et structurée
      </h2>
      <p className="text-lg text-stone-600 max-w-3xl mx-auto">
        Développez vos compétences linguistiques et professionnelles pour
        réussir dans un environnement francophone
      </p>
    </motion.div>
  )
}

function ObjectivesGrid() {
  const objectives = [
    {
      icon: Headphones,
      title: "Compréhension",
      description: "Améliorer la compréhension auditive et la lecture de documents professionnels"
    },
    {
      icon: MessageCircle,
      title: "Aisance et fluidité",
      description: "Gagner en aisance et en fluidité dans les échanges en français"
    },
    {
      icon: BookOpen,
      title: "Grammaire",
      description: "Renforcer la maîtrise des règles grammaticales pour une communication claire et précise"
    },
    {
      icon: Mic,
      title: "Expression orale",
      description: "Éliminer les blocages à l'oral et s'exprimer avec confiance"
    },
    {
      icon: Users,
      title: "Interaction professionnelle",
      description: "Participer activement aux discussions et conversations professionnelles"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {objectives.map((objective, index) => (
        <ObjectiveCard key={objective.title} {...objective} index={index} />
      ))}
    </div>
  )
}

function ObjectiveCard({
  icon: Icon,
  title,
  description,
  index
}: {
  icon: typeof Headphones
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
      className="group"
    >
      <div className="bg-white rounded-2xl border border-stone-200 p-8 h-full hover:shadow-xl transition-all hover:border-brown-200">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
          <Icon size={24} className="text-brown-800" />
        </div>
        <h3 className="font-serif text-2xl text-brown-900 mb-3">{title}</h3>
        <p className="text-stone-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
