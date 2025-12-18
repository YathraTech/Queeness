'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/fle-professionnel', label: 'FLE Professionnel' },
  { href: '/qui-suis-je', label: 'Qui suis-je ?' },
  { href: '/handicap', label: 'Handicap' },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-cream/80 backdrop-blur-md border-stone-200/50">
      <div className="flex h-20 max-w-6xl mx-auto px-6 items-center justify-between">
        <Logo />
        <NavLinks />
        <CTAButton />
      </div>
    </nav>
  )
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <motion.div 
        className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg bg-brown-800 text-white shadow-brown-800/20"
        whileHover={{ rotate: -5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1zM16 8L2 22m15.5-7H9" />
        </svg>
      </motion.div>
      <span className="font-serif text-xl font-medium tracking-tight text-brown-800 group-hover:text-brown-600 transition-colors">
        Queeness
      </span>
    </Link>
  )
}

function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative text-sm font-medium text-stone-500 transition-colors hover:text-stone-900 py-2"
        >
          {link.label}
          <motion.span
            className="absolute bottom-0 left-0 w-full h-px bg-stone-900 origin-left scale-x-0"
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      ))}
    </div>
  )
}

function CTAButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link 
        href="/contact"
        className="inline-flex items-center gap-2 bg-brown-700 hover:bg-brown-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-md"
      >
        Contactez-nous
      </Link>
    </motion.div>
  )
}