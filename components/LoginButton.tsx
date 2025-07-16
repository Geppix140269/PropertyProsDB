// PATH: app/components/LoginButton.tsx
'use client'
import Link from 'next/link'
import { useLanguage } from '@/app/providers/language-provider'

export default function LoginButton() {
  const { language } = useLanguage()

  return (
    <Link 
      href="/professional/dashboard"
      className="px-4 py-2 bg-navy text-white font-medium rounded-lg hover:bg-navy/90 transition-colors"
    >
      {language === 'en' ? 'Professional Login' : 'Accesso Professionisti'}
    </Link>
  )
}
