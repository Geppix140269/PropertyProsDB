// components/home/UserTypeCards.tsx
'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/providers/language-provider'
import Link from 'next/link'

export default function UserTypeCards() {
  const { t } = useLanguage()
  const [userType, setUserType] = useState<'buyer' | 'surveyor' | null>(null)

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-stone-800 mb-12">
          {t('Choose your role', 'Scegli il tuo ruolo')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Buyer Card */}
          <div
            onClick={() => setUserType('buyer')}
            className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all cursor-pointer hover:shadow-xl ${
              userType === 'buyer' ? 'border-orange-500' : 'border-transparent'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🏡</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">
                {t('I Need a Survey', 'Ho Bisogno di una Perizia')}
              </h3>
              <p className="text-stone-600 mb-4 text-sm">
                {t(
                  'Get quotes from verified surveyors for your property in Puglia.',
                  'Ricevi preventivi da geometri verificati per la tua proprietà in Puglia.'
                )}
              </p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>✔ {t('Compare multiple quotes', 'Confronta più preventivi')}</li>
                <li>✔ {t('Secure messaging', 'Messaggistica sicura')}</li>
                <li>✔ {t('Protected payment', 'Pagamento protetto')}</li>
              </ul>
            </div>
          </div>

          {/* Surveyor Card */}
          <div
            onClick={() => setUserType('surveyor')}
            className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all cursor-pointer hover:shadow-xl ${
              userType === 'surveyor' ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">📐</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">
                {t("I'm a Surveyor", 'Sono un Geometra')}
              </h3>
              <p className="text-stone-600 mb-4 text-sm">
                {t(
                  'Join our network and receive project requests from buyers.',
                  'Unisciti alla nostra rete e ricevi richieste da acquirenti.'
                )}
              </p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>✔ {t('Free registration', 'Registrazione gratuita')}</li>
                <li>✔ {t('10% platform fee only', 'Solo 10% di commissione')}</li>
                <li>✔ {t('Guaranteed payment', 'Pagamento garantito')}</li>
              </ul>
            </div>
          </div>
        </div>

        {userType && (
          <div className="mt-10">
            <Link
              href={userType === 'buyer' ? '/survey/request' : '/surveyor/register'}
              className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow hover:shadow-xl transition"
            >
              {userType === 'buyer'
                ? t('Request Survey Quotes', 'Richiedi Preventivi')
                : t('Join as Surveyor', 'Registrati come Geometra')}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
