'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import {
  Award,
  Target,
  CheckCircle,
  Users,
  Clock,
  Shield,
  HeartHandshake,
  Search,
} from 'lucide-react'

const objectives = [
  {
    icon: HeartHandshake,
    title: 'Satisfaction client',
    description:
      'Répondre et dépasser les attentes de nos clients en proposant des formations adaptées à leurs besoins spécifiques.',
  },
  {
    icon: Shield,
    title: 'Conformité réglementaire',
    description:
      'Respecter l\'ensemble des exigences légales et réglementaires applicables à notre activité de formation.',
  },
  {
    icon: Clock,
    title: 'Respect des délais',
    description:
      'Délivrer nos prestations de formation avec ponctualité et dans le respect des plannings établis.',
  },
  {
    icon: Search,
    title: 'Contrôle qualité',
    description:
      'Maintenir une traçabilité et un contrôle rigoureux de l\'ensemble de nos prestations.',
  },
  {
    icon: Target,
    title: 'Réactivité',
    description:
      'Rester attentifs aux besoins de nos parties prenantes et apporter des réponses rapides et pertinentes.',
  },
  {
    icon: HeartHandshake,
    title: 'Respect des engagements',
    description:
      'Honorer l\'ensemble des accords pris avec nos clients, partenaires et financeurs.',
  },
  {
    icon: Users,
    title: 'Participation du personnel',
    description:
      'Favoriser la collaboration active entre nos équipes et nos partenaires pour garantir l\'excellence.',
  },
]

const strengths = [
  {
    title: 'Formatrice experte',
    description:
      'Une formatrice qualifiée et reconnue, spécialiste du FLE professionnel, avec des compétences pédagogiques certifiées.',
  },
  {
    title: 'Flexibilité horaire',
    description:
      'Des plannings adaptés à vos contraintes professionnelles, incluant des options en soirée et le week-end.',
  },
  {
    title: 'Financement accessible',
    description:
      'Des formations éligibles à différents dispositifs de financement : CPF, OPCO, Pôle Emploi et autres aides.',
  },
]

export default function PolitiqueQualitePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <QualiteHero />
        <QualiteContent />
      </main>
      <Footer />
    </>
  )
}

function QualiteHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-brown-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
      <motion.div
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-brown-100/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="flex justify-center mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brown-600 to-brown-800 flex items-center justify-center text-white shadow-2xl">
              <Award size={36} />
            </div>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-brown-600 text-sm font-medium mb-6 backdrop-blur-sm border-brown-200 bg-brown-50/50">
            <CheckCircle size={14} className="text-brown-600" />
            Excellence &amp; Amélioration continue
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-brown-900">
            Politique Qualité
          </h1>

          <p className="text-xl md:text-2xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Chez Queeness, notre mission est de répondre de manière totale et durable aux besoins de
            nos clients. Notre engagement envers la qualité est au c&oelig;ur de notre stratégie.
          </p>

          <p className="text-sm text-stone-400 mt-6">
            Mise à jour : Février 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function QualiteContent() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Introduction */}
        <motion.div
          className="mb-16 bg-white rounded-2xl border border-stone-200 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-medium text-brown-900 mb-4">
            Notre engagement qualité
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Chez Queeness, notre mission est de répondre de manière totale et durable aux besoins de
            nos clients et des parties prenantes. Notre engagement envers la qualité est au
            c&oelig;ur de notre stratégie, visant à assurer le développement et la pérennité de
            notre organisme de formation. Nous mettons tout en &oelig;uvre pour garantir
            l&apos;excellence de nos prestations en FLE professionnel.
          </p>
        </motion.div>

        {/* Objectifs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-medium text-brown-900 mb-8 text-center">
            Nos objectifs principaux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                className="bg-white rounded-2xl border border-stone-200 p-6 hover:border-brown-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brown-50 border border-brown-100 flex items-center justify-center flex-shrink-0">
                    <objective.icon size={20} className="text-brown-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-brown-900 mb-1">
                      {objective.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Système de Management */}
        <motion.div
          className="mb-16 bg-gradient-to-br from-brown-800 to-brown-900 rounded-2xl p-8 md:p-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl font-medium mb-4">
            Système de Management de la Qualité (SMQ)
          </h2>
          <p className="text-brown-100 leading-relaxed">
            Queeness conduit régulièrement des audits internes et des revues de direction pour
            évaluer l&apos;efficacité de ses processus et piloter l&apos;amélioration continue.
            Les retours d&apos;expérience de nos stagiaires, recueillis via des enquêtes de
            satisfaction, constituent un levier essentiel de notre démarche qualité.
          </p>
        </motion.div>

        {/* Pourquoi Queeness */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-medium text-brown-900 mb-8 text-center">
            Pourquoi choisir Queeness ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                className="bg-white rounded-2xl border border-stone-200 p-6 text-center hover:border-brown-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-serif text-lg font-medium text-brown-900 mb-2">
                  {strength.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification */}
        <motion.div
          className="bg-brown-50 rounded-2xl border border-brown-200/50 p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brown-600 to-brown-800 flex items-center justify-center text-white shadow-lg">
              <Award size={28} />
            </div>
          </div>
          <h3 className="font-serif text-2xl font-medium text-brown-900 mb-3">
            Certifié Qualiopi
          </h3>
          <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto mb-4">
            Queeness est certifié Qualiopi, attestant de la qualité du processus mis en &oelig;uvre
            pour le développement des compétences. Notre organisme privilégie la formation en
            présentiel et en distanciel avec un accompagnement personnalisé par notre formatrice.
          </p>
          <a
            href="/attestation-qualiopi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brown-700 hover:bg-brown-800 text-white text-sm font-medium px-6 py-3 rounded-lg transition-all shadow-md"
          >
            Consulter notre attestation Qualiopi
          </a>
        </motion.div>
      </div>
    </section>
  )
}
