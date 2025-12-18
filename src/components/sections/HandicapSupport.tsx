'use client'

import { motion } from 'framer-motion'
import { Eye, Ear, Brain, Users, Accessibility, Heart } from 'lucide-react'

export function HandicapSupport() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-cream">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <SupportTypes />
        <ProcessSection />
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
      <h2 className="font-serif text-4xl md:text-5xl text-brown-900 mb-4">
        Types d'accompagnement
      </h2>
      <p className="text-lg text-stone-600 max-w-3xl mx-auto">
        Nous proposons des adaptations spécifiques pour chaque type de handicap
      </p>
    </motion.div>
  )
}

function SupportTypes() {
  const supports = [
    {
      icon: Eye,
      title: "Handicap visuel",
      adaptations: [
        "Documents en braille",
        "Supports audio",
        "Logiciels de synthèse vocale",
        "Agrandissement des caractères"
      ]
    },
    {
      icon: Ear,
      title: "Handicap auditif",
      adaptations: [
        "Interprète LSF",
        "Sous-titrage en temps réel",
        "Supports visuels renforcés",
        "Boucle magnétique"
      ]
    },
    {
      icon: Accessibility,
      title: "Handicap moteur",
      adaptations: [
        "Locaux accessibles PMR",
        "Formation à distance",
        "Outils adaptés",
        "Pauses aménagées"
      ]
    },
    {
      icon: Brain,
      title: "Handicap cognitif",
      adaptations: [
        "Rythme adapté",
        "Supports simplifiés",
        "Répétitions et reformulations",
        "Accompagnement renforcé"
      ]
    },
    {
      icon: Heart,
      title: "Handicap psychique",
      adaptations: [
        "Environnement rassurant",
        "Flexibilité des horaires",
        "Accompagnement bienveillant",
        "Gestion du stress"
      ]
    },
    {
      icon: Users,
      title: "Troubles DYS",
      adaptations: [
        "Police adaptée",
        "Mise en page aérée",
        "Outils numériques spécifiques",
        "Temps supplémentaire"
      ]
    }
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      {supports.map((support, index) => (
        <SupportCard key={support.title} {...support} index={index} />
      ))}
    </div>
  )
}

function SupportCard({ 
  icon: Icon, 
  title, 
  adaptations, 
  index 
}: { 
  icon: typeof Eye; 
  title: string; 
  adaptations: string[]; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-brown-100 flex items-center justify-center">
          <Icon size={20} className="text-brown-700" />
        </div>
        <h3 className="font-medium text-brown-900">{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {adaptations.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
            <span className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-1.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function ProcessSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-brown-800 to-brown-900 rounded-3xl p-10 md:p-16 text-white"
    >
      <h3 className="font-serif text-3xl mb-8 text-center">
        Notre processus d'accompagnement
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: "1", title: "Évaluation", desc: "Analyse des besoins spécifiques" },
          { step: "2", title: "Adaptation", desc: "Mise en place des aménagements" },
          { step: "3", title: "Formation", desc: "Accompagnement personnalisé" },
          { step: "4", title: "Suivi", desc: "Ajustements continus" }
        ].map((item, index) => (
          <ProcessStep key={item.step} {...item} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

function ProcessStep({ 
  step, 
  title, 
  desc, 
  index 
}: { 
  step: string; 
  title: string; 
  desc: string; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {step}
      </div>
      <h4 className="font-medium text-lg mb-2">{title}</h4>
      <p className="text-sm text-brown-200">{desc}</p>
    </motion.div>
  )
}