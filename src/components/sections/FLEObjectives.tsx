'use client'

import { motion } from 'framer-motion'
import { Target, CheckCircle2, TrendingUp, Users, BookOpen, Award } from 'lucide-react'

export function FLEObjectives() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <ObjectivesGrid />
        <ResultsSection />
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
      icon: BookOpen,
      title: "Compréhension écrite",
      description: "Lire et analyser des documents professionnels : emails, rapports, présentations",
      skills: ["Emails professionnels", "Rapports techniques", "Documentation", "Contrats"]
    },
    {
      icon: Users,
      title: "Expression orale",
      description: "Communiquer efficacement en réunion, présentation et négociation",
      skills: ["Réunions", "Présentations", "Négociations", "Entretiens"]
    },
    {
      icon: Award,
      title: "Rédaction professionnelle",
      description: "Maîtriser les écrits professionnels et la correspondance d'entreprise",
      skills: ["Courriers formels", "Comptes-rendus", "Propositions", "Notes de synthèse"]
    },
    {
      icon: TrendingUp,
      title: "Culture d'entreprise",
      description: "Comprendre les codes et usages du monde professionnel français",
      skills: ["Savoir-vivre", "Protocole", "Networking", "Relations hiérarchiques"]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
  skills,
  index
}: {
  icon: typeof BookOpen
  title: string
  description: string
  skills: string[]
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
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon size={24} className="text-brown-800" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-brown-900 mb-2">{title}</h3>
            <p className="text-stone-600">{description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center gap-2 text-sm text-stone-600">
              <CheckCircle2 size={14} className="text-brown-500" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ResultsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-brown-50 via-cream to-brown-100 rounded-3xl p-10 md:p-16"
    >
      <div className="text-center mb-12">
        <h3 className="font-serif text-3xl text-brown-900 mb-4">
          Des résultats concrets et mesurables
        </h3>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Notre approche pédagogique garantit une progression rapide et durable
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ResultMetric 
          value="95%" 
          label="Taux de réussite" 
          description="Obtention de la certification visée"
        />
        <ResultMetric 
          value="+2" 
          label="Niveaux CECRL" 
          description="Progression moyenne constatée"
        />
        <ResultMetric 
          value="4.9/5" 
          label="Satisfaction" 
          description="Note moyenne des apprenants"
        />
      </div>
    </motion.div>
  )
}

function ResultMetric({
  value,
  label,
  description
}: {
  value: string
  label: string
  description: string
}) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-5xl font-bold text-brown-800 mb-2"
      >
        {value}
      </motion.div>
      <div className="text-lg font-medium text-brown-700 mb-1">{label}</div>
      <div className="text-sm text-stone-600">{description}</div>
    </div>
  )
}