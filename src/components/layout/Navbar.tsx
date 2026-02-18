'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/fle-professionnel', label: 'FLE Professionnel' },
  { href: '/financement', label: 'Financement' },
  { href: '/qui-suis-je', label: 'Qui suis-je ?' },
  { href: '/handicap', label: 'Handicap' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-cream/80 backdrop-blur-md border-stone-200/50">
      <div className="flex h-16 sm:h-20 max-w-6xl mx-auto px-4 sm:px-6 items-center justify-between">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-3">
          <CTAButton className="hidden sm:inline-flex" />
          <MobileMenuButton isOpen={mobileOpen} toggle={() => setMobileOpen(!mobileOpen)} />
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </nav>
  )
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
      <motion.div
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shadow-lg bg-brown-800 text-white shadow-brown-800/20"
        whileHover={{ rotate: -5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sm:w-4 sm:h-4"
        >
          <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1zM16 8L2 22m15.5-7H9" />
        </svg>
      </motion.div>
      <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-brown-800 group-hover:text-brown-600 transition-colors">
        Queeness
      </span>
    </Link>
  )
}

function DesktopNav() {
  return (
    <div className="hidden lg:flex items-center gap-8">
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

function CTAButton({ className = '' }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href="/contact"
        className={`items-center gap-2 bg-brown-700 hover:bg-brown-800 text-white text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all shadow-md ${className}`}
      >
        Contactez-nous
      </Link>
    </motion.div>
  )
}

function MobileMenuButton({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
      aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="lg:hidden overflow-hidden border-t border-stone-200/50 bg-cream/95 backdrop-blur-lg"
    >
      <div className="px-4 py-4 space-y-1">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="block py-3 px-4 rounded-lg text-base font-medium text-stone-700 hover:text-brown-800 hover:bg-brown-50 transition-colors"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: navLinks.length * 0.05 }}
          className="pt-3"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-brown-700 hover:bg-brown-800 text-white text-sm font-medium px-5 py-3 rounded-lg transition-all shadow-md"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
