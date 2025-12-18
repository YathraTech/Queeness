'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Users, BookOpen } from 'lucide-react'

export function HandicapContent() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <EngagementSection />
        <PrinciplesSection />
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
      className="text-center mb-20"
    >
      <h2 className="font-serif text-4xl md:text-5xl text-brown-900 mb-6">
        Notre Engagement
      </h2>
      <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
        Conformément à la loi du 11 février 2005 pour l'égalité des droits et des chances, 
        nous garantissons l'accessibilité de nos formations à toutes les personnes en 
        situation de handicap, quelles que soient leurs difficultés.
      </p>
    </motion.div>
  )
}

function PrinciplesSection() {
  const principles = [
    {
      icon: CheckCircle,
      title: "Accessibilité universelle",
      description: "Nos formations sont conçues pour être accessibles à tous, avec des adaptations personnalisées selon les besoins spécifiques de chaque apprenant."
    },
    {
      icon: Shield,
      title: "Conformité légale",
      description: "Nous respectons scrupuleusement les obligations légales en matière d'accessibilité et travaillons en étroite collaboration avec les organismes spécialisés."
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description: "Un référent handicap dédié accompagne chaque apprenant tout au long de son parcours pour garantir les meilleures conditions d'apprentissage."
    },
    {
      icon: BookOpen,
      title: "Supports adaptés",
      description: "Tous nos supports pédagogiques peuvent être adaptés : documents en gros caractères, supports audio, sous-titrage, traduction en langue des signes."
    }
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {principles.map((principle, index) => (
        <PrincipleCard key={principle.title} {...principle} index={index} />
      ))}
    </div>
  )
}

function PrincipleCard({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: typeof CheckCircle; 
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
      className="bg-cream rounded-2xl p-8 border border-stone-200 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-brown-100 flex items-center justify-center flex-shrink-0">
          <Icon size={24} className="text-brown-700" />
        </div>
        <div>
          <h3 className="font-serif text-xl text-brown-900 mb-3">{title}</h3>
          <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}