'use client'

import { motion } from 'framer-motion'
import { Sparkles, Globe, Users, Target } from 'lucide-react'

export function AboutContent() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <StorySection />
        <JourneySection />
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
    >
      <TextContent />
      <VisualElement />
    </motion.div>
  )
}

function TextContent() {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-brown-600 text-xs font-medium backdrop-blur-sm border-brown-200 bg-brown-50/50">
        <Sparkles size={14} />
        Mon Histoire
      </div>
      
      <h2 className="font-serif text-4xl md:text-5xl text-brown-900">
        Une passion née de l'amour des langues
      </h2>
      
      <div className="space-y-4 text-stone-600 leading-relaxed">
        <p>
          Depuis toujours, j'ai été fascinée par le pouvoir des mots et leur capacité 
          à créer des ponts entre les cultures. Le français, avec sa richesse et sa 
          subtilité, est devenu pour moi bien plus qu'une langue : c'est un art de vivre.
        </p>
        
        <p>
          Après des années d'expérience dans l'enseignement, j'ai fondé Queeness avec 
          une vision claire : offrir une approche personnalisée et humaine de 
          l'apprentissage du français, où chaque apprenant est unique et mérite un 
          accompagnement sur mesure.
        </p>
        
        <p>
          Mon parcours m'a enseigné que l'apprentissage d'une langue est avant tout 
          une aventure humaine, une découverte de soi autant que de l'autre.
        </p>
      </div>
    </div>
  )
}

function VisualElement() {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-gradient-to-br from-brown-100 to-brown-50 rounded-2xl p-8 shadow-xl">
        <div className="grid grid-cols-2 gap-6">
          <StatCard number="10+" label="Années d'expérience" icon={Globe} />
          <StatCard number="500+" label="Apprenants accompagnés" icon={Users} />
          <StatCard number="98%" label="Taux de satisfaction" icon={Target} />
          <StatCard number="100%" label="Passion & dévouement" icon={Sparkles} />
        </div>
      </div>
      
      <div className="absolute -z-10 inset-0 bg-brown-200/20 rounded-2xl blur-2xl transform translate-x-4 translate-y-4" />
    </motion.div>
  )
}

function StatCard({ number, label, icon: Icon }: { number: string; label: string; icon: typeof Globe }) {
  return (
    <motion.div
      className="bg-white rounded-xl p-4 text-center"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Icon size={24} className="text-brown-600 mx-auto mb-2" />
      <div className="text-2xl font-bold text-brown-800">{number}</div>
      <div className="text-xs text-stone-500">{label}</div>
    </motion.div>
  )
}

function JourneySection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl border border-stone-200 p-10 md:p-12"
    >
      <JourneyHeader />
      <JourneySteps />
    </motion.div>
  )
}

function JourneyHeader() {
  return (
    <div className="text-center mb-12">
      <h3 className="font-serif text-3xl md:text-4xl text-brown-900 mb-4">
        Mon Parcours
      </h3>
      <p className="text-stone-600 max-w-2xl mx-auto">
        Chaque étape de mon parcours a enrichi ma vision de l'enseignement
      </p>
    </div>
  )
}

function JourneySteps() {
  const steps = [
    {
      year: "2014",
      title: "Premiers pas dans l'enseignement",
      description: "Découverte de ma passion pour la transmission du français et l'accompagnement pédagogique."
    },
    {
      year: "2018",
      title: "Expertise et spécialisation",
      description: "Développement de méthodes innovantes et obtention de diplômes en ingénierie pédagogique."
    },
    {
      year: "2020",
      title: "Création de Queeness",
      description: "Lancement de mon organisme de formation avec une vision personnalisée de l'apprentissage."
    },
    {
      year: "2022",
      title: "Certification Qualiopi",
      description: "Obtention de la certification après audit par ICPF, gage de qualité et d'excellence."
    }
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <TimelineStep key={step.year} {...step} index={index} />
      ))}
    </div>
  )
}

function TimelineStep({ year, title, description, index }: { year: string; title: string; description: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative"
    >
      <div className="text-3xl font-bold text-brown-200 mb-2">{year}</div>
      <h4 className="font-medium text-brown-800 mb-2">{title}</h4>
      <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
      
      {index < 3 && (
        <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-brown-200" />
      )}
    </motion.div>
  )
}