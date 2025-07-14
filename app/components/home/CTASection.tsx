// components/home/CTASection.tsx
'use client'

import { useLanguage } from '@/app/providers/language-provider'
import Link from 'next/link'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">
          {t('Ready to Start?', 'Pronto per Iniziare?')}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {t(
            'Join hundreds of users already relying on Apulink for trusted surveys.',
            'Unisciti a centinaia di utenti che si affidano ad Apulink per perizie sicure.'
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
