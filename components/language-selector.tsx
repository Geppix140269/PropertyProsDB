// PATH: app/components/language-selector.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === 'it' ? 'en' : 'it'
    setLanguage(newLanguage)
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
