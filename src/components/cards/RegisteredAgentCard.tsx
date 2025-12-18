'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, User } from 'lucide-react'
import Link from 'next/link'

export function RegisteredAgentCard() {
  return (
    <motion.div 
      className="group relative rounded-2xl bg-brown-50 border p-8 overflow-hidden border-brown-200/50"
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <CardContent />
    </motion.div>
  )
}

function CardContent() {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between">
      <CardHeader />
      <StatesBadges />
    </div>
  )
}

function CardHeader() {
  return (
    <div>
      <CardIcon />
      <CardTitle />
      <CardDescription />
    </div>
  )
}

function CardIcon() {
  return (
    <div className="w-12 h-12 rounded-xl border flex items-center justify-center shadow-sm mb-6 bg-white border-brown-200 text-brown-800">
      <User size={24} />
    </div>
  )
}

function CardTitle() {
  return (
    <h3 className="font-serif text-2xl mb-2 text-stone-900">Contact</h3>
  )
}

function CardDescription() {
  return (
    <div className="space-y-3 text-sm text-stone-600">
      <div className="font-medium text-stone-900">SUTHARSAN Lavania</div>
      <div className="text-stone-500">Directrice de Queeness</div>
    </div>
  )
}

function StatesBadges() {
  return (
    <motion.div 
      className="mt-6 space-y-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <ContactItem icon={Mail} text="lavania2000@hotmail.com" href="mailto:lavania2000@hotmail.com" />
      <ContactItem icon={Phone} text="06.63.38.33.41" href="tel:0663383341" />
      <motion.div
        className="mt-4"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-brown-700 text-white text-sm font-medium hover:bg-brown-800 transition-colors"
        >
          Page Contact
        </Link>
      </motion.div>
    </motion.div>
  )
}

function ContactItem({ icon: Icon, text, href }: { icon: typeof Mail; text: string; href: string }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-3 text-sm text-stone-600 hover:text-stone-900 transition-colors group"
    >
      <Icon size={16} className="text-stone-400 group-hover:text-stone-600" />
      <span>{text}</span>
    </a>
  )
}