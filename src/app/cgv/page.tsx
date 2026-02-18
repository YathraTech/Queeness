'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { FileText, ScrollText } from 'lucide-react'

const articles = [
  {
    number: 1,
    title: 'Objet',
    content:
      'Les présentes conditions générales de vente définissent les modalités de vente des prestations de formation entre Queeness et ses clients, qu\'ils soient salariés, indépendants, demandeurs d\'emploi ou entreprises. Toute inscription à une formation implique l\'acceptation sans réserve des présentes CGV.',
  },
  {
    number: 2,
    title: 'Durée et validité de l\'offre',
    content:
      'Les offres de formation restent valables tant qu\'elles sont annoncées sur le site de Queeness, sous réserve de disponibilité des places. Queeness se réserve le droit de modifier ses offres à tout moment.',
  },
  {
    number: 3,
    title: 'Conditions financières, règlements et modalités de paiement',
    content:
      'Le paiement des formations est exigible à réception de facture, en euros TTC. Les modalités de paiement sont flexibles et négociables lors de l\'inscription. En cas de retard de paiement, des pénalités pourront être appliquées conformément à la législation en vigueur.',
  },
  {
    number: 4,
    title: 'Prise de commande et enregistrement de commande en ligne',
    content:
      'Les inscriptions aux formations se font via notre plateforme en ligne ou par contact direct. Les moyens de paiement acceptés sont : carte bancaire, virement bancaire ou chèque. Toute commande est confirmée par un email récapitulatif.',
  },
  {
    number: 5,
    title: 'Livraison et disponibilité des services',
    content:
      'Les services de formation deviennent accessibles après confirmation de l\'inscription et règlement. Conformément à la législation en vigueur, le client bénéficie d\'un droit de rétractation de 14 jours à compter de la date d\'inscription, sauf si la formation a déjà débuté avec l\'accord du client.',
  },
  {
    number: 6,
    title: 'Report, annulation, absence ou interruption d\'une formation',
    content:
      'Queeness autorise les reports ou annulations sous conditions spécifiques. Toute annulation intervenant moins de 10 jours ouvrés avant le début de la formation entraîne le paiement de 50% du coût total. Toute annulation intervenant moins de 5 jours ouvrés entraîne le paiement de l\'intégralité du prix. En cas d\'absence ou d\'interruption non justifiée, aucun remboursement ne sera effectué.',
  },
  {
    number: 7,
    title: 'Modalités d\'accueil, devis et attestation de formation',
    content:
      'Les informations pratiques relatives à chaque formation (lieu, horaires, programme, modalités d\'accès) sont communiquées au client avant le début de la formation. Des conventions de formation sont disponibles pour les prises en charge par les OPCO. Une attestation de formation est remise à l\'issue de chaque programme.',
  },
  {
    number: 8,
    title: 'Obligations et force majeure',
    content:
      'Queeness ne saurait être tenue pour responsable de la non-exécution ou du retard dans l\'exécution de ses obligations en cas de force majeure, telle que définie par la jurisprudence des tribunaux français. Sont considérés comme cas de force majeure les événements imprévisibles, irrésistibles et extérieurs aux parties.',
  },
  {
    number: 9,
    title: 'Parrainage',
    content:
      'Queeness peut proposer des avantages de parrainage sous conditions détaillées dans les offres spécifiques en cours. Les modalités et avantages du programme de parrainage sont susceptibles d\'évoluer et seront communiqués sur demande.',
  },
  {
    number: 10,
    title: 'Confidentialité et propriété intellectuelle',
    content:
      'L\'ensemble des contenus pédagogiques de Queeness (supports de cours, exercices, documents, méthodologies) sont protégés par les droits d\'auteur et sont réservés à un usage strictement personnel du stagiaire. Toute reproduction, diffusion ou exploitation sans autorisation expresse écrite de Queeness est strictement interdite.',
  },
  {
    number: 11,
    title: 'Protection et accès aux informations à caractère personnel',
    content:
      'Queeness s\'engage à protéger les données personnelles de ses clients conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés. Pour plus d\'informations, consultez notre Politique de Confidentialité.',
  },
  {
    number: 12,
    title: 'Droit d\'utilisation et d\'usage des formations en ligne',
    content:
      'L\'accès aux formations en ligne est personnel et non transférable. Les identifiants et mots de passe sont strictement confidentiels. Toute utilisation frauduleuse des accès en ligne entraînera la résiliation immédiate de l\'inscription sans remboursement.',
  },
  {
    number: 13,
    title: 'Clause résolutoire',
    content:
      'Queeness se réserve le droit de résilier unilatéralement tout contrat en cas de non-respect des présentes CGV par le client, notamment en cas de non-paiement ou de comportement inapproprié lors des sessions de formation.',
  },
  {
    number: 14,
    title: 'Délimitation géographique',
    content:
      'Les formations Queeness sont accessibles en France métropolitaine et dans les DOM-TOM. Les formations en ligne sont accessibles depuis tout pays disposant d\'une connexion internet.',
  },
  {
    number: 15,
    title: 'Droit applicable et juridiction compétente',
    content:
      'Les présentes CGV sont régies par le droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut d\'accord amiable, tout litige sera soumis aux tribunaux compétents du ressort du siège social de Queeness.',
  },
]

export default function CGVPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <CGVHero />
        <CGVContent />
      </main>
      <Footer />
    </>
  )
}

function CGVHero() {
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
              <ScrollText size={36} />
            </div>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-brown-600 text-sm font-medium mb-6 backdrop-blur-sm border-brown-200 bg-brown-50/50">
            <FileText size={14} className="text-brown-600" />
            Cadre contractuel
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-brown-900">
            Conditions Générales de Vente
          </h1>

          <p className="text-xl md:text-2xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Les présentes conditions régissent les relations contractuelles entre
            Queeness et ses clients dans le cadre de ses prestations de formation.
          </p>

          <p className="text-sm text-stone-400 mt-6">
            Mise à jour : Février 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function CGVContent() {
  return (
    <section className="py-12 sm:py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Préambule */}
        <motion.div
          className="mb-16 bg-white rounded-2xl border border-stone-200 p-5 sm:p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-medium text-brown-900 mb-4">Préambule</h2>
          <p className="text-stone-600 leading-relaxed">
            Queeness, organisme de formation spécialisé dans l&apos;enseignement du Français Langue
            Étrangère (FLE) professionnel, offre des parcours pédagogiques de qualité dispensés par
            des formateurs experts et reconnus. L&apos;acceptation des présentes conditions générales
            de vente signifie l&apos;adhésion pleine et entière à nos termes et engagements.
          </p>
        </motion.div>

        {/* Articles */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.number}
              className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-8 md:p-10 hover:border-brown-200 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brown-50 border border-brown-100 flex items-center justify-center">
                  <span className="font-serif text-lg font-medium text-brown-700">
                    {article.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-medium text-brown-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{article.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note finale */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-stone-400">
            Pour toute question relative aux présentes CGV, contactez-nous à{' '}
            <a
              href="mailto:lavania2000@hotmail.com"
              className="text-brown-600 hover:text-brown-800 underline underline-offset-2 transition-colors"
            >
              lavania2000@hotmail.com
            </a>{' '}
            ou par téléphone au{' '}
            <a
              href="tel:0663383341"
              className="text-brown-600 hover:text-brown-800 underline underline-offset-2 transition-colors"
            >
              06.63.38.33.41
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
