// components/home/Hero.tsx
'use client'

import { useLanguage } from '@/app/providers/language-provider'
import Link from 'next/link'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center bg-orange-500 text-white px-6 text-center">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          🔍 {t('Your Survey', 'La tua perizia')} <br />
          <span className="underline">{t('is in good hands', 'è in buone mani')}</span>
        </h1>
        <p className="text-xl opacity-90">
          {t(
            'Get multiple quotes from verified local surveyors. Pay securely. Choose with confidence.',
            'Ricevi più preventivi da geometri locali verificati. Paga in sicurezza. Scegli con fiducia.'
          )}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link href="/survey/request">
            <span className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full shadow hover:bg-gray-100 transition cursor-pointer">
              {t('Request a Survey', 'Richiedi una Perizia')}
            </span>
          </Link>
          <Link href="/surveyor/register">
            <span className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition cursor-pointer">
              {t('Register as Surveyor', 'Registrati come Geometra')}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
