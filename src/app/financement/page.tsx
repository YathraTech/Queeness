'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Wallet,
  Euro,
  GraduationCap,
  Building2,
  Briefcase,
  UserCheck,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Phone,
  Mail,
} from 'lucide-react'

const financingOptions = [
  {
    icon: GraduationCap,
    title: 'CPF',
    subtitle: 'Compte Personnel de Formation',
    description:
      'Votre compte personnel vous permet de cumuler des droits à la formation tout au long de votre carrière, dès votre entrée sur le marché du travail et jusqu\'à la retraite.',
    eligible: [
      'Certifications inscrites au RNCP (Répertoire National des Certifications Professionnelles)',
      'Certifications inscrites au Répertoire Spécifique (RS)',
      'Accompagnement VAE (Validation des Acquis de l\'Expérience)',
      'Aide à la création ou reprise d\'entreprise',
    ],
    cta: {
      label: 'Activer mon CPF',
      href: 'https://www.moncompteformation.gouv.fr/',
    },
    highlight: true,
    color: 'from-brown-600 to-brown-800',
  },
  {
    icon: Building2,
    title: 'OPCO',
    subtitle: 'Pour les salariés',
    description:
      'Les Opérateurs de Compétences financent le développement professionnel de tous les actifs dès 16 ans via les plans de développement des compétences de l\'entreprise.',
    eligible: [
      'Salariés en CDI ou CDD',
      'Plans de développement des compétences',
      'Adaptation au poste de travail',
      'Maintien dans l\'emploi et évolution professionnelle',
    ],
    cta: {
      label: 'En savoir plus',
      href: '/contact',
      internal: true,
    },
    highlight: false,
    color: 'from-stone-600 to-stone-800',
  },
  {
    icon: UserCheck,
    title: 'France Travail',
    subtitle: 'Pour les demandeurs d\'emploi',
    description:
      'Les demandeurs d\'emploi inscrits à France Travail (ex-Pôle Emploi) peuvent bénéficier de financements pour se former et faciliter leur retour à l\'emploi.',
    eligible: [
      'Demandeurs d\'emploi inscrits à France Travail',
      'Aide Individuelle à la Formation (AIF)',
      'Action de Formation Conventionnée (AFC)',
      'Préparation Opérationnelle à l\'Emploi (POE)',
    ],
    cta: {
      label: 'En savoir plus',
      href: '/contact',
      internal: true,
    },
    highlight: false,
    color: 'from-stone-600 to-stone-800',
  },
  {
    icon: Briefcase,
    title: 'FNE-Formation',
    subtitle: 'Pour les entreprises',
    description:
      'Le FNE-Formation soutient les salariés en activité partielle ou employés dans des entreprises en difficulté, en mutation ou en reprise d\'activité.',
    eligible: [
      'Entreprises en activité partielle',
      'Entreprises en difficulté économique',
      'Entreprises en mutation (transition écologique, numérique)',
      'Prise en charge jusqu\'à 100% des coûts pédagogiques',
    ],
    cta: {
      label: 'En savoir plus',
      href: '/contact',
      internal: true,
    },
    highlight: false,
    color: 'from-stone-600 to-stone-800',
  },
]

const steps = [
  {
    number: '01',
    title: 'Prenez contact',
    description:
      'Échangeons sur votre projet de formation, vos objectifs et votre situation professionnelle.',
  },
  {
    number: '02',
    title: 'Étude de votre dossier',
    description:
      'Nous identifions ensemble le dispositif de financement le plus adapté à votre profil.',
  },
  {
    number: '03',
    title: 'Montage du dossier',
    description:
      'Nous vous accompagnons dans les démarches administratives et le montage de votre dossier de financement.',
  },
  {
    number: '04',
    title: 'Début de la formation',
    description:
      'Une fois le financement validé, vous démarrez votre parcours de formation en toute sérénité.',
  },
]

export default function FinancementPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <FinancementHero />
        <FinancingOptions />
        <Steps />
        <FinancementCTA />
      </main>
      <Footer />
    </>
  )
}

function FinancementHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-brown-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
      <motion.div
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-brown-100/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-48 h-48 bg-brown-200/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brown-600 to-brown-800 flex items-center justify-center text-white shadow-2xl">
                <Wallet size={36} />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-brown-300 flex items-center justify-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Euro size={16} className="text-brown-700" />
              </motion.div>
            </div>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-brown-600 text-sm font-medium mb-6 backdrop-blur-sm border-brown-200 bg-brown-50/50">
            <Euro size={14} className="text-brown-600" />
            Plusieurs solutions de financement
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-brown-900">
            Financez votre formation
          </h1>

          <p className="text-xl md:text-2xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Vous êtes salarié, demandeur d&apos;emploi, indépendant ou chef d&apos;entreprise ?
            Découvrez les dispositifs de financement adaptés à votre situation pour vous former au
            français professionnel.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['CPF', 'OPCO', 'France Travail', 'FNE-Formation'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-white rounded-lg border border-brown-200 text-sm text-brown-700 font-medium shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FinancingOptions() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-brown-900 mb-4">
            Les dispositifs de financement
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Selon votre statut professionnel, plusieurs solutions existent pour financer votre
            formation en FLE professionnel chez Queeness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {financingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              className={`rounded-2xl border p-8 transition-all ${
                option.highlight
                  ? 'bg-gradient-to-br from-brown-800 to-brown-900 text-white border-brown-700 shadow-xl'
                  : 'bg-white border-stone-200 hover:border-brown-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    option.highlight
                      ? 'bg-white/10 backdrop-blur'
                      : 'bg-brown-50 border border-brown-100'
                  }`}
                >
                  <option.icon
                    size={26}
                    className={option.highlight ? 'text-brown-200' : 'text-brown-700'}
                  />
                </div>
                <div>
                  <h3
                    className={`font-serif text-2xl font-medium ${
                      option.highlight ? 'text-white' : 'text-brown-900'
                    }`}
                  >
                    {option.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      option.highlight ? 'text-brown-200' : 'text-stone-500'
                    }`}
                  >
                    {option.subtitle}
                  </p>
                </div>
              </div>

              <p
                className={`leading-relaxed mb-6 ${
                  option.highlight ? 'text-brown-100' : 'text-stone-600'
                }`}
              >
                {option.description}
              </p>

              <div className="mb-6">
                <p
                  className={`text-sm font-medium mb-3 ${
                    option.highlight ? 'text-brown-200' : 'text-brown-700'
                  }`}
                >
                  Éligibilité &amp; dispositifs :
                </p>
                <ul className="space-y-2">
                  {option.eligible.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${
                          option.highlight ? 'text-brown-300' : 'text-brown-500'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          option.highlight ? 'text-brown-100' : 'text-stone-600'
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {option.cta.internal ? (
                <Link
                  href={option.cta.href}
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    option.highlight
                      ? 'text-white hover:text-brown-200'
                      : 'text-brown-700 hover:text-brown-900'
                  }`}
                >
                  {option.cta.label}
                  <ArrowRight size={16} />
                </Link>
              ) : (
                <a
                  href={option.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    option.highlight
                      ? 'bg-white text-brown-800 hover:bg-brown-50 shadow-md'
                      : 'bg-brown-700 text-white hover:bg-brown-800 shadow-md'
                  }`}
                >
                  {option.cta.label}
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-brown-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Un accompagnement personnalisé de A à Z pour monter votre dossier de financement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative bg-cream rounded-2xl border border-stone-200 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brown-600 to-brown-800 flex items-center justify-center text-white font-serif text-lg font-medium mx-auto mb-4 shadow-lg">
                {step.number}
              </div>
              <h3 className="font-serif text-lg font-medium text-brown-900 mb-2">{step.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight size={18} className="text-brown-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinancementCTA() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="bg-gradient-to-br from-brown-800 to-brown-900 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Besoin d&apos;aide pour votre financement ?
          </h2>
          <p className="text-brown-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Notre équipe vous accompagne gratuitement dans l&apos;identification du meilleur
            dispositif de financement et le montage de votre dossier. N&apos;hésitez pas à nous
            contacter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brown-800 hover:bg-brown-50 text-sm font-medium px-6 py-3 rounded-lg transition-all shadow-md"
            >
              Nous contacter
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:0663383341"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur hover:bg-white/20 text-white text-sm font-medium px-6 py-3 rounded-lg transition-all border border-white/20"
            >
              <Phone size={16} />
              06.63.38.33.41
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-brown-300 text-sm">
            <a
              href="mailto:lavania2000@hotmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={14} />
              lavania2000@hotmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
