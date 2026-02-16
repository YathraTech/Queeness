'use client'

import { motion } from 'framer-motion'
import { Users, Building2, Heart } from 'lucide-react'

export function HandicapContent() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <EngagementSection />
        <ContentCards />
      </div>
    </section>
  )
}

function EngagementSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="font-serif text-4xl md:text-5xl text-brown-900 mb-6">
        Notre Engagement
      </h2>
      <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
        Nous nous engageons à accompagner les personnes en situation de handicap
        afin de leur permettre de suivre leur parcours de formation dans les
        meilleures conditions.
      </p>
    </motion.div>
  )
}

function ContentCards() {
  const cards = [
    {
      icon: Users,
      title: "Sensibilisation de l'équipe",
      text: "L'ensemble de notre équipe est sensibilisée à l'accueil et à l'accompagnement des stagiaires en situation de handicap. Notre démarche vise à identifier les besoins spécifiques dès l'analyse du besoin et à mettre en place des solutions pédagogiques et organisationnelles adaptées."
    },
    {
      icon: Building2,
      title: "Accessibilité des locaux",
      text: "En tant qu'établissement recevant du public (ERP), nous portons une attention particulière à la conformité de nos locaux aux normes d'accessibilité, notamment pour les personnes à mobilité réduite."
    },
    {
      icon: Heart,
      title: "Notre objectif",
      text: "Offrir à chaque stagiaire un environnement bienveillant, inclusif et sécurisé, propice à la réussite de son parcours de formation, quelle que soit sa situation."
    }
  ]

  return (
    <div className="space-y-8">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-cream rounded-2xl p-8 border border-stone-200 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-brown-100 flex items-center justify-center flex-shrink-0">
              <card.icon size={24} className="text-brown-700" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-brown-900 mb-3">{card.title}</h3>
              <p className="text-stone-600 leading-relaxed">{card.text}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
