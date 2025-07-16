// PATH: app/components/LanguageSelector.tsx
'use client'
import { useState } from 'react'

export default function LanguageSelector() {
  const [language, setLanguage] = useState<'it' | 'en'>('it')

  const toggleLanguage = () => {
    const newLanguage = language === 'it' ? 'en' : 'it'
    setLanguage(newLanguage)
    // In the future, this will also update the global language context
    // For now, it just updates the local state
  }

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-stone-600 hover:text-terracotta font-medium transition-colors duration-200"
    >
      <span className="text-xl">{language === 'it' ? '🇮🇹' : '🇬🇧'}</span>
      <span>{language === 'it' ? 'Italiano' : 'English'}</span>
    </button>
  )
}
