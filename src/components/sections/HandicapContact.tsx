'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, User, MessageCircle } from 'lucide-react'

export function HandicapContact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ContactCard />
      </div>
    </section>
  )
}

function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl border border-stone-200 shadow-2xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ReferentSection />
        <ActionSection />
      </div>
    </motion.div>
  )
}

function ReferentSection() {
  return (
    <div className="bg-gradient-to-br from-brown-50 to-brown-100 p-10 lg:p-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-brown-700 text-white flex items-center justify-center">
          <User size={24} />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-brown-900">Référent Handicap</h3>
          <p className="text-brown-600 text-sm">À votre écoute</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <p className="text-stone-600 leading-relaxed">
          Pour toute demande liée à l'accessibilité ou à un accompagnement spécifique,
          vous pouvez nous contacter via le formulaire de notre site ou vous présenter
          directement dans nos locaux.
        </p>

        <p className="text-stone-600 leading-relaxed">
          Lavania SUTHARSAN, directrice de Queeness, notre référent handicap est à votre
          disposition pour étudier les possibilités d'adaptation.
        </p>

        <div className="space-y-3">
          <ContactInfo icon={User} label="Référent" value="Lavania SUTHARSAN" />
          <ContactInfo icon={Mail} label="Email" value="lavania2000@hotmail.com" href="mailto:lavania2000@hotmail.com" />
          <ContactInfo icon={Phone} label="Téléphone" value="06.63.38.33.41" href="tel:0663383341" />
        </div>
      </div>

      <div className="p-4 bg-white/70 rounded-xl border border-brown-200">
        <p className="text-xs text-stone-600 leading-relaxed">
          <strong>Confidentialité garantie :</strong> Toutes les informations partagées
          restent strictement confidentielles et sont utilisées uniquement pour adapter
          au mieux votre formation.
        </p>
      </div>
    </div>
  )
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof User
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-3">
      <Icon size={16} className="text-brown-500" />
      <div>
        <div className="text-xs text-stone-500">{label}</div>
        <div className="text-sm font-medium text-brown-800">{value}</div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block hover:bg-white/50 p-2 -m-2 rounded-lg transition-colors">
        {content}
      </a>
    )
  }

  return content
}

function ActionSection() {
  return (
    <div className="p-10 lg:p-12 flex flex-col justify-center">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mx-auto mb-6"
        >
          <MessageCircle size={28} className="text-brown-700" />
        </motion.div>

        <h3 className="font-serif text-3xl text-brown-900 mb-4">
          Parlons de vos besoins
        </h3>

        <p className="text-stone-600 mb-8 max-w-md mx-auto">
          N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques.
          Nous trouverons ensemble les meilleures solutions d'adaptation.
        </p>

        <div className="space-y-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="w-full px-8 py-4 h-auto rounded-xl bg-brown-700 hover:bg-brown-800 text-white font-medium text-base"
              asChild
            >
              <Link href="/contact">
                Contactez-nous
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="w-full px-8 py-4 h-auto rounded-xl border-brown-300 hover:bg-brown-50 text-brown-700 font-medium text-base"
              asChild
            >
              <a href="tel:0663383341">
                Appeler directement
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-200">
          <p className="text-xs text-stone-500 text-center">
            Disponible du lundi au vendredi de 9h à 18h
          </p>
        </div>
      </div>
    </div>
  )
}
