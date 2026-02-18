'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { Lock, ShieldCheck, Database, Users, UserCog, Briefcase } from 'lucide-react'

const dataCategories = [
  {
    icon: Users,
    title: 'Fichier Clients',
    purpose: 'Gestion de la relation commerciale, suivi des inscriptions et facturation.',
    access: 'Accès limité à l\'équipe Queeness et au service informatique.',
  },
  {
    icon: UserCog,
    title: 'Fichier Stagiaires',
    purpose:
      'Suivi pédagogique, évaluations, attestations de formation et communications relatives aux formations.',
    access: 'Accès limité à l\'équipe Queeness et au service informatique.',
  },
  {
    icon: Briefcase,
    title: 'Fichier Formateurs',
    purpose: 'Gestion des activités de formation, planification et suivi des interventions.',
    access: 'Accès limité à l\'équipe Queeness et au service informatique.',
  },
]

const rights = [
  {
    title: 'Droit d\'accès',
    description:
      'Vous pouvez obtenir la confirmation que des données vous concernant sont ou ne sont pas traitées et, lorsqu\'elles le sont, l\'accès auxdites données.',
  },
  {
    title: 'Droit de rectification',
    description:
      'Vous pouvez obtenir la rectification de données inexactes vous concernant.',
  },
  {
    title: 'Droit à l\'effacement',
    description:
      'Vous pouvez obtenir l\'effacement de vos données dans les cas prévus par la législation.',
  },
  {
    title: 'Droit à la portabilité',
    description:
      'Vous pouvez recevoir les données vous concernant dans un format structuré, couramment utilisé et lisible par machine.',
  },
  {
    title: 'Droit d\'opposition',
    description:
      'Vous pouvez vous opposer à tout moment au traitement de vos données pour des motifs légitimes.',
  },
  {
    title: 'Droit de limitation',
    description:
      'Vous pouvez obtenir la limitation du traitement de vos données dans certains cas prévus par la loi.',
  },
]

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <ConfidentialiteHero />
        <ConfidentialiteContent />
      </main>
      <Footer />
    </>
  )
}

function ConfidentialiteHero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-br from-cream via-brown-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
      <motion.div
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-brown-100/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
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
              <Lock size={36} />
            </div>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-brown-600 text-sm font-medium mb-6 backdrop-blur-sm border-brown-200 bg-brown-50/50">
            <ShieldCheck size={14} className="text-brown-600" />
            RGPD &amp; Protection des données
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-brown-900">
            Politique de Confidentialité
          </h1>

          <p className="text-xl md:text-2xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Vos données personnelles sont précieuses. Découvrez comment Queeness
            les collecte, les utilise et les protège conformément au RGPD.
          </p>

          <p className="text-sm text-stone-400 mt-6">
            Mise à jour : Février 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ConfidentialiteContent() {
  return (
    <section className="py-12 sm:py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Introduction RGPD */}
        <motion.div
          className="mb-16 bg-white rounded-2xl border border-stone-200 p-5 sm:p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-medium text-brown-900 mb-4">
            Vos données &amp; le RGPD
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Le Règlement Général sur la Protection des Données (RGPD, règlement n° 2016/679) est le
            texte de référence en matière de protection des données à caractère personnel au sein de
            l&apos;Union Européenne. Il vise à renforcer et unifier la protection des données pour
            les individus. Queeness s&apos;engage à respecter l&apos;ensemble de ces dispositions
            dans le cadre de son activité de formation.
          </p>
        </motion.div>

        {/* Gestion des données */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-medium text-brown-900 mb-8 text-center">
            Gestion des données chez Queeness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white rounded-2xl border border-stone-200 p-6 hover:border-brown-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-brown-50 border border-brown-100 flex items-center justify-center mb-4">
                  <category.icon size={22} className="text-brown-700" />
                </div>
                <h3 className="font-serif text-lg font-medium text-brown-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  <span className="font-medium text-stone-700">Finalité :</span> {category.purpose}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  <span className="font-medium text-stone-700">Accès :</span> {category.access}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engagements */}
        <motion.div
          className="mb-16 bg-gradient-to-br from-brown-800 to-brown-900 rounded-2xl p-5 sm:p-8 md:p-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Database size={24} className="text-brown-200" />
            <h2 className="font-serif text-2xl font-medium">Sécurité &amp; Confidentialité</h2>
          </div>
          <div className="space-y-4 text-brown-100 leading-relaxed">
            <p>
              Queeness garantit qu&apos;aucun transfert de données personnelles n&apos;a lieu en
              dehors de l&apos;organisme. Toutes les données non nécessaires ou sensibles qui ne sont
              pas requises pour nos opérations sont systématiquement supprimées.
            </p>
            <p>
              Les données sont stockées sur des serveurs sécurisés et conservées uniquement le temps
              nécessaire à la réalisation de leur finalité. L&apos;accès est restreint au personnel
              autorisé via un système ERP/CRM sécurisé nécessitant des identifiants et mots de passe.
            </p>
            <p>
              Queeness s&apos;assure que ses collaborateurs et prestataires comprennent leurs
              obligations en matière de confidentialité.
            </p>
          </div>
        </motion.div>

        {/* Vos droits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-medium text-brown-900 mb-8 text-center">
            Vos droits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rights.map((right, index) => (
              <motion.div
                key={right.title}
                className="bg-white rounded-2xl border border-stone-200 p-6 hover:border-brown-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h3 className="font-serif text-lg font-medium text-brown-900 mb-2">
                  {right.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="bg-brown-50 rounded-2xl border border-brown-200/50 p-5 sm:p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-2xl font-medium text-brown-900 mb-4">
            Exercer vos droits
          </h3>
          <p className="text-stone-600 leading-relaxed mb-4">
            Pour exercer l&apos;un de vos droits ou pour toute question relative à la protection de
            vos données personnelles, vous pouvez nous contacter :
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:lavania2000@hotmail.com"
              className="inline-flex items-center gap-2 bg-brown-700 hover:bg-brown-800 text-white text-sm font-medium px-6 py-3 rounded-lg transition-all shadow-md"
            >
              Par email
            </a>
            <a
              href="tel:0663383341"
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-brown-800 text-sm font-medium px-6 py-3 rounded-lg transition-all border border-brown-200"
            >
              06.63.38.33.41
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
