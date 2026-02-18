'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FormData {
  nom: string
  prenom: string
  email: string
  objet: string
  message: string
}

const initialFormData: FormData = {
  nom: '',
  prenom: '',
  email: '',
  objet: '',
  message: ''
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData(initialFormData)
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl border border-stone-200 shadow-xl p-5 sm:p-8 md:p-10"
    >
      <FormHeader />
      <form onSubmit={handleSubmit} className="space-y-6">
        <NameFields formData={formData} onChange={handleChange} />
        <EmailField formData={formData} onChange={handleChange} />
        <SubjectField formData={formData} onChange={handleChange} />
        <MessageField formData={formData} onChange={handleChange} />
        <SubmitSection isSubmitting={isSubmitting} submitStatus={submitStatus} />
      </form>
    </motion.div>
  )
}

function FormHeader() {
  return (
    <div className="mb-8">
      <h2 className="font-serif text-3xl mb-2 text-brown-900">Envoyez-nous un message</h2>
      <p className="text-stone-500">Les champs marqués d'un * sont obligatoires</p>
    </div>
  )
}

function NameFields({ formData, onChange }: { formData: FormData; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        label="Nom"
        name="nom"
        value={formData.nom}
        onChange={onChange}
        placeholder="Votre nom"
      />
      <FormField
        label="Prénom"
        name="prenom"
        value={formData.prenom}
        onChange={onChange}
        placeholder="Votre prénom"
        required
      />
    </div>
  )
}

function EmailField({ formData, onChange }: { formData: FormData; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <FormField
      label="Email"
      name="email"
      type="email"
      value={formData.email}
      onChange={onChange}
      placeholder="votre.email@exemple.com"
      required
    />
  )
}

function SubjectField({ formData, onChange }: { formData: FormData; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-2">
        Objet de contact <span className="text-red-500">*</span>
      </label>
      <select
        name="objet"
        value={formData.objet}
        onChange={onChange}
        required
        className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all"
      >
        <option value="">Sélectionnez un sujet</option>
        <option value="formation">Information sur les formations</option>
        <option value="inscription">Inscription à une formation</option>
        <option value="financement">Questions sur le financement</option>
        <option value="partenariat">Proposition de partenariat</option>
        <option value="autre">Autre demande</option>
      </select>
    </div>
  )
}

function MessageField({ formData, onChange }: { formData: FormData; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-2">
        Message <span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={onChange}
        required
        rows={6}
        placeholder="Décrivez votre demande..."
        className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all resize-none"
      />
    </div>
  )
}

function FormField({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false 
}: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all"
      />
    </div>
  )
}

function SubmitSection({ isSubmitting, submitStatus }: { isSubmitting: boolean; submitStatus: 'idle' | 'success' | 'error' }) {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brown-700 hover:bg-brown-800 text-white font-medium py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 h-auto"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={18} />
              Envoyer le message
            </>
          )}
        </Button>
      </motion.div>
      
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
        >
          Votre message a été envoyé avec succès !
        </motion.div>
      )}
    </div>
  )
}