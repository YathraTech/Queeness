'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-6"
    >
      <DirectContact />
      <QuickInfo />
      <Certifications />
    </motion.div>
  )
}

function DirectContact() {
  return (
    <div className="bg-brown-50 rounded-2xl border border-brown-200/50 p-6">
      <h3 className="font-serif text-2xl mb-6 text-brown-900">Contact Direct</h3>
      
      <div className="space-y-4">
        <ContactItem
          icon={Phone}
          label="Téléphone"
          value="06.63.38.33.41"
          href="tel:0663383341"
        />
        <ContactItem
          icon={Mail}
          label="Email"
          value="lavania2000@hotmail.com"
          href="mailto:lavania2000@hotmail.com"
        />
        <div className="pt-4 border-t border-brown-200/30">
          <div className="text-sm font-medium text-brown-800 mb-1">
            SUTHARSAN Lavania
          </div>
          <div className="text-xs text-brown-600">
            Directrice de Queeness
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactItem({ 
  icon: Icon, 
  label, 
  value, 
  href 
}: { 
  icon: typeof Phone; 
  label: string; 
  value: string; 
  href: string;
}) {
  return (
    <motion.a
      href={href}
      className="flex items-start gap-3 group"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="w-10 h-10 rounded-lg bg-white border border-brown-200 flex items-center justify-center flex-shrink-0 group-hover:bg-brown-100 transition-colors">
        <Icon size={18} className="text-brown-600" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-stone-500 mb-0.5">{label}</div>
        <div className="text-sm font-medium text-stone-900 group-hover:text-brown-700 transition-colors">
          {value}
        </div>
      </div>
    </motion.a>
  )
}

function QuickInfo() {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6">
      <h4 className="font-serif text-xl mb-4 text-stone-900">Informations Pratiques</h4>
      
      <div className="space-y-3">
        <InfoItem
          icon={Clock}
          text="Lundi - Vendredi : 9h - 18h"
        />
        <InfoItem
          icon={MapPin}
          text="France métropolitaine"
        />
      </div>
    </div>
  )
}

function InfoItem({ icon: Icon, text }: { icon: typeof Clock; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={16} className="text-stone-400" />
      <span className="text-sm text-stone-600">{text}</span>
    </div>
  )
}

function Certifications() {
  return (
    <motion.div 
      className="bg-gradient-to-br from-brown-800 to-brown-900 rounded-2xl p-6 text-white"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0">
          <CheckCircle size={20} className="text-brown-200" />
        </div>
        <div>
          <h4 className="font-serif text-lg mb-1">Certifié Qualiopi</h4>
          <p className="text-xs text-brown-200 leading-relaxed">
            Notre certification témoigne de notre engagement pour l'excellence et la qualité de nos formations.
          </p>
        </div>
      </div>
    </motion.div>
  )
}