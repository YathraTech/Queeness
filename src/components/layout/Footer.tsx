'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Feather, Twitter, Github } from 'lucide-react'

const footerSections = [
  {
    title: 'Programmes',
    links: [
      { label: 'Français Professionnel', href: '#' },
      { label: 'Français des Affaires', href: '#' },
      { label: 'Préparation Examens', href: '#' },
    ],
  },
  {
    title: 'À Propos',
    links: [
      { label: 'Notre Mission', href: '#' },
      { label: 'Méthodologie', href: '#' },
      { label: 'Certification Qualiopi', href: '#' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-cream py-16 border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <FooterGrid />
        <FooterBottom />
      </div>
    </footer>
  )
}

function FooterGrid() {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <BrandColumn />
      {footerSections.map((section, index) => (
        <FooterColumn key={section.title} {...section} delay={index * 0.1} />
      ))}
    </motion.div>
  )
}

function BrandColumn() {
  return (
    <motion.div 
      className="col-span-2 md:col-span-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Logo />
      <BrandDescription />
    </motion.div>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="w-6 h-6 rounded flex items-center justify-center bg-brown-800 text-white">
        <Feather size={12} strokeWidth={2} />
      </div>
      <span className="font-serif text-lg font-medium tracking-tight text-brown-800">
        Queeness
      </span>
    </div>
  )
}

function BrandDescription() {
  return (
    <p className="text-xs text-stone-500 leading-relaxed max-w-[180px]">
      La puissance du français pour tisser des connexions et enrichir des vies.
    </p>
  )
}

function FooterColumn({ 
  title, 
  links, 
  delay 
}: { 
  title: string; 
  links: { label: string; href: string }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + delay }}
    >
      <h4 className="font-serif mb-4 text-brown-800">{title}</h4>
      <FooterLinks links={links} />
    </motion.div>
  )
}

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2 text-xs text-stone-500">
      {links.map((link) => (
        <li key={link.label}>
          <Link 
            href={link.href} 
            className="hover:text-brown-700 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function FooterBottom() {
  return (
    <motion.div 
      className="flex items-center justify-between pt-8 border-t border-stone-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Copyright />
      <SocialLinks />
    </motion.div>
  )
}

function Copyright() {
  return (
    <div className="text-[10px] text-stone-400">
      © 2024 Queeness SAS. Tous droits réservés.
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="flex gap-4">
      <SocialIcon icon={Twitter} href="#" />
      <SocialIcon icon={Github} href="#" />
    </div>
  )
}

function SocialIcon({ 
  icon: Icon, 
  href 
}: { 
  icon: typeof Twitter; 
  href: string;
}) {
  return (
    <motion.a
      href={href}
      className="text-stone-400 hover:text-stone-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={16} />
    </motion.a>
  )
}