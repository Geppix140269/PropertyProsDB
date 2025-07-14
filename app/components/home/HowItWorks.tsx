// components/home/HowItWorks.tsx
'use client'

import { useLanguage } from '@/app/providers/language-provider'

export default function HowItWorks() {
  const { t } = useLanguage()

  const buyerSteps = [
    [t('Submit Request', 'Invia Richiesta'), t('Tell us what you need and where.', 'Dicci cosa ti serve e dove.')],
    [t('Receive Quotes', 'Ricevi Preventivi'), t('Compare offers from verified surveyors.', 'Confronta offerte da geometri verificati.')],
    [t('Chat Anonymously', 'Chat Anonimamente'), t('Ask questions, clarify scope securely.', 'Fai domande e chiarisci in modo sicuro.')],
    [t('Pay & Connect', 'Paga e Connettiti'), t('Pay securely, get full contact details.', 'Paga in sicurezza, ricevi i contatti.')]  
  ]

  const surveyorSteps = [
    [t('Register Free', 'Registrati Gratis'), t('Create your profile and choose areas.', 'Crea il tuo profilo e scegli le zone.')],
    [t('Get Requests', 'Ricevi Richieste'), t('See new jobs matching your zone.', 'Vedi nuovi lavori nella tua zona.')],
    [t('Send Quotes', 'Invia Preventivi'), t('Submit offers and respond to questions.', 'Invia offerte e rispondi ai clienti.')],
    [t('Get Paid', 'Ricevi Pagamento'), t('90% released when job confirmed.', '90% versato alla conferma.')]  
  ]

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-stone-800 mb-16">
          {t('How It Works', 'Come Funziona')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Buyer Flow */}
          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-6">
              {t('For Buyers', 'Per Acquirenti')}
            </h3>
            <ol className="space-y-6">
              {buyerSteps.map(([title, desc], idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">{title}</h4>
                    <p className="text-sm text-stone-600">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Surveyor Flow */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              {t('For Surveyors', 'Per Geometri')}
            </h3>
            <ol className="space-y-6">
              {surveyorSteps.map(([title, desc], idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">{title}</h4>
                    <p className="text-sm text-stone-600">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
