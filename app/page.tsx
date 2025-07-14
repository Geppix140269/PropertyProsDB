// PATH: app/page.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'
import { useState } from 'react'

export default function HomePage() {
  const { language, t } = useLanguage()
  const [userType, setUserType] = useState<'buyer' | 'surveyor' | null>(null)

  return (
    <>
      {/* Clean Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-stone-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-800 mb-6">
              {t(
                'Property Surveys in Puglia',
                'Perizie Immobiliari in Puglia'
              )}
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">
              {t(
                'Get competitive quotes from verified surveyors. Pay securely. Connect with confidence.',
                'Ottieni preventivi competitivi da geometri verificati. Paga in sicurezza. Connettiti con fiducia.'
              )}
            </p>
          </div>

          {/* User Type Selection */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Buyer Card */}
              <div 
                onClick={() => setUserType('buyer')}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
                  userType === 'buyer' ? 'border-terracotta' : 'border-transparent'
                }`}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h2 className="font-playfair text-2xl font-bold text-stone-800 mb-3">
                    {t("I Need a Survey", "Ho Bisogno di una Perizia")}
                  </h2>
                  <p className="text-stone-600 mb-4">
                    {t(
                      'Get quotes from multiple verified surveyors for your property in Puglia',
                      'Ricevi preventivi da diversi geometri verificati per la tua proprietà in Puglia'
                    )}
                  </p>
                  <ul className="text-left text-sm text-stone-600 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t('Compare multiple quotes', 'Confronta più preventivi')}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t('Secure messaging', 'Messaggistica sicura')}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t('Protected payment', 'Pagamento protetto')}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Surveyor Card */}
              <div 
                onClick={() => setUserType('surveyor')}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
                  userType === 'surveyor' ? 'border-sea' : 'border-transparent'
                }`}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-sea/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="font-playfair text-2xl font-bold text-stone-800 mb-3">
                    {t("I'm a Surveyor", "Sono un Geometra")}
                  </h2>
                  <p className="text-stone-600 mb-4">
                    {t(
                      'Join our network of professionals and receive survey requests',
                      'Unisciti alla nostra rete di professionisti e ricevi richieste di perizie'
                    )}
                  </p>
                  <ul className="text-left text-sm text-stone-600 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t('Free registration', 'Registrazione gratuita')}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t('10% platform fee only', 'Solo 10% di commissione')}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t('Guaranteed payment', 'Pagamento garantito')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            {userType && (
              <div className="text-center mt-8">
                <a
                  href={userType === 'buyer' ? '/survey/request' : '/surveyor/register'}
                  className="inline-block bg-gradient-to-r from-terracotta to-terracotta-dark text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {userType === 'buyer' 
                    ? t('Request Survey Quotes', 'Richiedi Preventivi')
                    : t('Join as Surveyor', 'Registrati come Geometra')
                  }
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-center text-stone-800 mb-12">
            {t('How It Works', 'Come Funziona')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Buyers */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-terracotta mb-6">
                {t('For Property Buyers', 'Per Acquirenti')}
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: t('Submit Survey Request', 'Invia Richiesta di Perizia'),
                    desc: t(
                      'Provide property details and survey requirements',
                      'Fornisci dettagli della proprietà e requisiti della perizia'
                    )
                  },
                  {
                    step: '2',
                    title: t('Receive & Compare Quotes', 'Ricevi e Confronta Preventivi'),
                    desc: t(
                      'Get quotes from verified surveyors within 48 hours',
                      'Ricevi preventivi da geometri verificati entro 48 ore'
                    )
                  },
                  {
                    step: '3',
                    title: t('Message & Choose', 'Messaggia e Scegli'),
                    desc: t(
                      'Ask questions through secure messaging and select your surveyor',
                      'Fai domande tramite messaggi sicuri e scegli il tuo geometra'
                    )
                  },
                  {
                    step: '4',
                    title: t('Pay & Connect', 'Paga e Connetti'),
                    desc: t(
                      'Pay securely through platform, then get surveyor contact details',
                      'Paga in sicurezza sulla piattaforma, poi ricevi i contatti del geometra'
                    )
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center">
                        <span className="text-terracotta font-bold">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">{item.title}</h4>
                      <p className="text-stone-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Surveyors */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-sea mb-6">
                {t('For Surveyors', 'Per Geometri')}
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: t('Register & Verify', 'Registrati e Verifica'),
                    desc: t(
                      'Create anonymous profile with your credentials and service areas',
                      'Crea profilo anonimo con le tue credenziali e zone di servizio'
                    )
                  },
                  {
                    step: '2',
                    title: t('Receive Requests', 'Ricevi Richieste'),
                    desc: t(
                      'Get notified of survey requests in your area',
                      'Ricevi notifiche di richieste di perizie nella tua zona'
                    )
                  },
                  {
                    step: '3',
                    title: t('Send Quotes', 'Invia Preventivi'),
                    desc: t(
                      'Submit competitive quotes and answer buyer questions',
                      'Invia preventivi competitivi e rispondi alle domande'
                    )
                  },
                  {
                    step: '4',
                    title: t('Get Paid', 'Ricevi Pagamento'),
                    desc: t(
                      'Receive 90% of payment after buyer selects you',
                      'Ricevi il 90% del pagamento dopo che il cliente ti sceglie'
                    )
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-sea/10 rounded-full flex items-center justify-center">
                        <span className="text-sea font-bold">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">{item.title}</h4>
                      <p className="text-stone-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-center text-stone-800 mb-12">
            {t('Safe & Secure Platform', 'Piattaforma Sicura')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">
                {t('Anonymous Communication', 'Comunicazione Anonima')}
              </h3>
              <p className="text-stone-600 text-sm">
                {t(
                  'Surveyors use anonymous usernames. Contact details only revealed after payment.',
                  'I geometri usano username anonimi. I contatti vengono rivelati solo dopo il pagamento.'
                )}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">
                {t('Secure Messaging', 'Messaggi Sicuri')}
              </h3>
              <p className="text-stone-600 text-sm">
                {t(
                  'AI monitors messages to prevent sharing of contact information before payment.',
                  `L'IA monitora i messaggi per prevenire la condivisione di contatti prima del pagamento.`
                )}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">
                {t('Protected Payments', 'Pagamenti Protetti')}
              </h3>
              <p className="text-stone-600 text-sm">
                {t(
                  'Payment held securely until service is confirmed. Surveyors get paid, buyers get protection.',
                  'Pagamento trattenuto in sicurezza fino alla conferma del servizio.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 bg-gradient-to-r from-terracotta to-terracotta-dark">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-playfair text-4xl font-bold mb-4">
            {t('Ready to Start?', 'Pronto per Iniziare?')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t(
              'Join hundreds of buyers and surveyors using our secure platform',
              'Unisciti a centinaia di acquirenti e geometri che usano la nostra piattaforma sicura'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/survey/request"
              className="bg-white text-terracotta px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              {t('Request a Survey', 'Richiedi una Perizia')}
            </a>
            <a
              href="/surveyor/register"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              {t('Register as Surveyor', 'Registrati come Geometra')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
