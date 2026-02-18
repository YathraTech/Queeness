'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { Scale, Shield } from 'lucide-react'

const sections = [
  {
    title: 'Informations légales',
    items: [
      { label: 'Site internet', value: 'www.queeness.fr' },
      {
        label: 'Éditeur',
        value:
          'Queeness, société par actions simplifiée (SAS), située en France métropolitaine, représentée par SUTHARSAN Lavania, en qualité de Directrice et représentante légale de Queeness.',
      },
      { label: 'Directrice de la publication', value: 'SUTHARSAN Lavania' },
      { label: 'Téléphone', value: '06.63.38.33.41' },
      { label: 'Email', value: 'lavania2000@hotmail.com' },
      { label: 'Conception et réalisation', value: 'Queeness' },
      {
        label: 'Hébergeur',
        value: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
      },
    ],
  },
  {
    title: 'Accès au site',
    content:
      'L\'accès et l\'utilisation du site sont destinés à un usage strictement personnel. L\'Utilisateur s\'engage à ne pas utiliser ce site et les informations qu\'il contient à des fins commerciales, politiques, publicitaires ou pour toute forme de sollicitation commerciale, notamment l\'envoi de courriels non sollicités.',
  },
  {
    title: 'Contenu du site',
    content:
      'Toutes les marques, photographies, textes, commentaires, illustrations, images, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le site sont protégés par les lois en vigueur au titre de la propriété intellectuelle. Ils sont la propriété pleine et entière de Queeness ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l\'accord préalable et écrit de Queeness, est strictement interdite.',
  },
  {
    title: 'Gestion du site',
    content:
      'Pour la bonne gestion du site, Queeness pourra à tout moment : suspendre, interrompre ou limiter l\'accès à tout ou partie du site, réserver l\'accès au site, ou à certaines parties du site, à une catégorie déterminée d\'internautes ; supprimer toute information pouvant en perturber le fonctionnement ou contrevenant aux lois nationales ou internationales ; suspendre le site afin de procéder à des mises à jour.',
  },
  {
    title: 'Responsabilités',
    content:
      'La responsabilité de Queeness ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement empêchant l\'accès au site ou à une de ses fonctionnalités. Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données, notamment contre les attaques virales par Internet. Vous êtes par ailleurs seul responsable des sites et données que vous consultez.',
  },
  {
    title: 'Liens hypertextes',
    content:
      'La mise en place par les utilisateurs de liens hypertextes vers tout ou partie du site est autorisée sous réserve d\'une autorisation préalable et écrite de Queeness. Queeness est libre de refuser cette autorisation sans avoir à justifier de quelque motif que ce soit. Dans le cas où Queeness accorderait son autorisation, celle-ci n\'est que temporaire et pourra être retirée à tout moment.',
  },
  {
    title: 'Collecte et protection des données',
    content:
      'Vos données sont collectées par Queeness. Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée). Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d\'un droit d\'accès, de rectification, de portabilité et d\'effacement de vos données, ainsi qu\'un droit d\'opposition et de limitation du traitement. Pour exercer vos droits, veuillez adresser votre demande à lavania2000@hotmail.com.',
  },
  {
    title: 'Droit applicable',
    content:
      'Les présentes conditions du site sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l\'interprétation ou de l\'exécution de celles-ci seront de la compétence exclusive des tribunaux compétents. La langue de référence, pour le règlement de contentieux éventuels, est le français.',
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <MentionsHero />
        <MentionsContent />
      </main>
      <Footer />
    </>
  )
}

function MentionsHero() {
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
              <Scale size={36} />
            </div>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-brown-600 text-sm font-medium mb-6 backdrop-blur-sm border-brown-200 bg-brown-50/50">
            <Shield size={14} className="text-brown-600" />
            Informations légales
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-brown-900">
            Mentions Légales
          </h1>

          <p className="text-xl md:text-2xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575
            du 21 juin 2004 pour la Confiance dans l&apos;Économie Numérique.
          </p>

          <p className="text-sm text-stone-400 mt-6">
            Mise à jour : Février 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function MentionsContent() {
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
            des formateurs experts et reconnus. La navigation sur ce site implique l&apos;acceptation
            intégrale et sans réserve des conditions d&apos;utilisation détaillées ci-après. La
            version actuelle de ces conditions reste en vigueur tout au long de l&apos;utilisation du
            site jusqu&apos;à son remplacement par une nouvelle version.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-8 md:p-10 hover:border-brown-200 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
            >
              <h3 className="font-serif text-xl font-medium text-brown-900 mb-4">
                {section.title}
              </h3>

              {section.content && (
                <p className="text-stone-600 leading-relaxed">{section.content}</p>
              )}

              {section.items && (
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.label} className="flex flex-col sm:flex-row sm:gap-4">
                      <span className="text-sm font-medium text-brown-700 sm:min-w-[200px] flex-shrink-0">
                        {item.label}
                      </span>
                      <span className="text-stone-600 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
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
            Pour toute question, contactez-nous à{' '}
            <a
              href="mailto:lavania2000@hotmail.com"
              className="text-brown-600 hover:text-brown-800 underline underline-offset-2 transition-colors"
            >
              lavania2000@hotmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
