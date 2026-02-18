'use client'

import { motion } from 'framer-motion'
import { Check, Clock } from 'lucide-react'

export function ComplianceCard() {
  return (
    <motion.div 
      className="sm:col-span-2 md:col-span-2 group relative rounded-2xl p-6 sm:p-8 overflow-hidden bg-brown-800 text-white"
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <BackgroundGradient />
      <CardContent />
    </motion.div>
  )
}

function BackgroundGradient() {
  return (
    <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 bg-brown-700/50" />
  )
}

function CardContent() {
  return (
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
      <ComplianceInfo />
      <ComplianceList />
    </div>
  )
}

function ComplianceInfo() {
  return (
    <div>
      <StatusBadge />
      <Title />
      <Description />
      <Stats />
    </div>
  )
}

function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-medium tracking-wider uppercase mb-6 border-white/10 bg-white/5 text-brown-100">
      <span className="w-1 h-1 rounded-full bg-brown-400" />
      Approche personnalisée
    </div>
  )
}

function Title() {
  return (
    <h3 className="font-serif text-3xl mb-4 text-white">Excellence et Amélioration Continue</h3>
  )
}

function Description() {
  return (
    <p className="text-sm leading-relaxed max-w-xs text-stone-400">
      Notre certification Qualiopi témoigne de notre engagement pour l'excellence et l'amélioration continue.
    </p>
  )
}

function Stats() {
  return (
    <div className="mt-8 flex gap-4">
      <StatItem value="94%" label="Réussite" />
    </div>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-serif text-white">{value}</span>
      <span className="text-[10px] uppercase tracking-widest text-stone-500">{label}</span>
    </div>
  )
}

function ComplianceList() {
  return (
    <motion.div 
      className="rounded-xl border p-6 backdrop-blur-sm bg-white/5 border-white/10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="space-y-4">
        <ListItem icon={Check} iconColor="emerald" date="Today" isActive />
        <ListItem icon={Clock} iconColor="stone" date="Apr 15" />
      </div>
    </motion.div>
  )
}

function ListItem({ 
  icon: Icon, 
  iconColor, 
  date, 
  isActive = false 
}: { 
  icon: typeof Check; 
  iconColor: string; 
  date: string;
  isActive?: boolean;
}) {
  const bgClass = isActive ? `bg-${iconColor}-500/20` : 'bg-white/5'
  const borderClass = isActive ? `border-${iconColor}-500/30` : 'border-white/10'
  const textClass = isActive ? `text-${iconColor}-400` : 'text-stone-500'
  
  return (
    <div className="flex items-center gap-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${isActive ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' : 'bg-white/5 border-white/10 text-stone-500'}`}>
        <Icon size={14} />
      </div>
      <div className="flex-1">
        <div className="h-2 w-24 rounded mb-1.5 bg-white/20" />
        <div className="h-1.5 w-16 rounded bg-white/10" />
      </div>
      <div className="text-[10px] text-stone-500">{date}</div>
    </div>
  )
}