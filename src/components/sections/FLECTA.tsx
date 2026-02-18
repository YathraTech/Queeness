'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export function FLECTA() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-cream to-white">
      <div className="max-w-6xl mx-auto">
        <CTACard />
        <InfoSection />
      </div>
    </section>
  )
}

function CTACard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brown-700 to-brown-900 rounded-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10 p-6 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MainContent />
          <ContactInfo />
        </div>
      </div>
    </motion.div>
  )
}

function MainContent() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white mb-6">
          Prêt à développer vos compétences en français professionnel ?
        </h2>
        <p className="text-xl text-brown-100 mb-8">
          Rejoignez notre programme de formation et donnez un nouvel élan à votre carrière
        </p>
        
        <div className="space-y-3 mb-10">
          <BenefitItem text="Formation 100% personnalisée" />
          <BenefitItem text="Éligible au CPF" />
          <BenefitItem text="Certification reconnue" />
          <BenefitItem text="Accompagnement individuel" />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg"
              className="px-8 py-6 rounded-xl bg-white hover:bg-cream text-brown-800 font-medium text-base"
              asChild
            >
              <Link href="/contact">
                Démarrer ma formation
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-6 rounded-xl border-2 border-white/30 hover:bg-white/10 text-white font-medium text-base backdrop-blur"
              asChild
            >
              <a href="tel:0663383341">
                <Phone className="mr-2" size={20} />
                06.63.38.33.41
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle size={20} className="text-green-400" />
      <span className="text-brown-100">{text}</span>
    </div>
  )
}

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-8"
    >
      <h3 className="font-serif text-2xl text-white mb-6">
        Contactez-nous
      </h3>
      
      <div className="space-y-4">
        <ContactItem
          icon={Mail}
          label="Email"
          value="lavania2000@hotmail.com"
          href="mailto:lavania2000@hotmail.com"
        />
        <ContactItem
          icon={Phone}
          label="Téléphone"
          value="06.63.38.33.41"
          href="tel:0663383341"
        />
        <ContactItem
          icon={Clock}
          label="Horaires"
          value="Lun-Ven : 9h-18h"
        />
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/20">
        <p className="text-sm text-brown-200">
          Réponse garantie sous 24h ouvrées
        </p>
      </div>
    </motion.div>
  )
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Mail
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
        <Icon size={20} className="text-brown-200" />
      </div>
      <div>
        <div className="text-xs text-brown-200">{label}</div>
        <div className="text-white font-medium">{value}</div>
      </div>
    </div>
  )
  
  if (href) {
    return (
      <a href={href} className="block hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors">
        {content}
      </a>
    )
  }
  
  return content
}

function InfoSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8"
    >
      <InfoCard
        title="Financement CPF"
        description="Notre formation est éligible au Compte Personnel de Formation. Utilisez vos droits pour financer votre parcours."
      />
      <InfoCard
        title="Certification Qualiopi"
        description="Centre de formation certifié Qualiopi, nous garantissons la qualité de nos formations et leur reconnaissance."
      />
      <InfoCard
        title="Suivi personnalisé"
        description="Un formateur dédié vous accompagne tout au long de votre parcours pour garantir votre réussite."
      />
    </motion.div>
  )
}

function InfoCard({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg transition-all">
      <h4 className="font-serif text-xl text-brown-900 mb-3">{title}</h4>
      <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
    </div>
  )
}