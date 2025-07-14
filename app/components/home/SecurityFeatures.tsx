// components/home/SecurityFeatures.tsx
'use client'

import { useLanguage } from '@/app/providers/language-provider'

export default function SecurityFeatures() {
  const { t } = useLanguage()

  const features = [
    {
      icon: '🙈',
      title: t('Anonymous Messaging', 'Messaggistica Anonima'),
      desc: t(
        'No personal contact info is shown until payment is complete.',
        'Nessun contatto viene mostrato fino al pagamento.'
      ),
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: '🧠',
      title: t('AI Moderation', 'Moderazione Automatica'),
      desc: t(
        'Our system blocks message attempts to share phone, email, or links.',
        'Blocchiamo messaggi con numeri, email o link prima del pagamento.'
      ),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: '💳',
      title: t('Secure Payments', 'Pagamenti Sicuri'),
      desc: t(
        'Funds are held until survey is delivered and confirmed.',
        'Il pagamento viene trattenuto fino alla conferma del servizio.'
      ),
      color: 'bg-green-100 text-green-600'
    }
  ]

  return (
    <section className="bg-stone-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-stone-800 mb-16">
          {t('Safe & Secure Platform', 'Piattaforma Sicura')}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg text-center flex flex-col items-center"
            >
              <div
                className={`w-14 h-14 ${f.color} rounded-full text-2xl flex items-center justify-center mb-4`}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">{f.title}</h3>
              <p className="text-stone-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
