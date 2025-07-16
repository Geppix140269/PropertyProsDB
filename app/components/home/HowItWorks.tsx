// PATH: app/components/home/HowItWorks.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'

export default function HowItWorks() {
  const { language } = useLanguage()

  const buyerSteps = [
    {
      number: '1',
      title: language === 'en' ? 'Submit Your Request' : 'Invia la Tua Richiesta',
      description: language === 'en'
        ? 'Tell us about the property you need surveyed and select your preferred package'
        : 'Raccontaci della proprietà che necessita di un rilievo e seleziona il pacchetto preferito',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '2',
      title: language === 'en' ? 'Get Matched' : 'Trova il Professionista',
      description: language === 'en'
        ? 'We match you with a verified geometra in your property area within 24 hours'
        : 'Ti abbiniamo con un geometra verificato nella zona della proprietà entro 24 ore',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: '3',
      title: language === 'en' ? 'Property Survey' : 'Rilievo della Proprietà',
      description: language === 'en'
        ? 'The geometra conducts a thorough on-site survey and gathers all documentation'
        : 'Il geometra conduce un rilievo approfondito sul posto e raccoglie tutta la documentazione',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: '4',
      title: language === 'en' ? 'Receive Your Report' : 'Ricevi il Tuo Report',
      description: language === 'en'
        ? 'Get a comprehensive report with photos, measurements, and expert recommendations'
        : 'Ricevi un report completo con foto, misurazioni e raccomandazioni esperte',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ]

  const geometraSteps = [
    {
      number: '1',
      title: language === 'en' ? 'Apply & Get Verified' : 'Candidati e Verifica',
      description: language === 'en'
        ? 'Submit your credentials and get verified through the Collegio dei Geometri'
        : 'Invia le tue credenziali e ottieni la verifica tramite il Collegio dei Geometri',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: '2',
      title: language === 'en' ? 'Receive Requests' : 'Ricevi Richieste',
      description: language === 'en'
        ? 'Get notified of survey requests in your area that match your expertise'
        : 'Ricevi notifiche di richieste di rilievo nella tua zona che corrispondono alla tua esperienza',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      number: '3',
      title: language === 'en' ? 'Conduct Surveys' : 'Esegui Rilievi',
      description: language === 'en'
        ? 'Perform professional surveys and create detailed reports for international clients'
        : 'Esegui rilievi professionali e crea report dettagliati per clienti internazionali',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '4',
      title: language === 'en' ? 'Get Paid' : 'Ricevi il Pagamento',
      description: language === 'en'
        ? 'Receive payment directly after client approval, minus a small platform fee'
        : 'Ricevi il pagamento direttamente dopo l\'approvazione del cliente, meno una piccola commissione',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">
            {language === 'en' ? 'How It Works' : 'Come Funziona'}
          </h2>
          <p className="text-xl text-stone-600">
            {language === 'en' ? 'Simple, transparent, professional' : 'Semplice, trasparente, professionale'}
          </p>
        </div>

        {/* For Buyers */}
        <div className="mb-20">
          <h3 className="font-playfair text-2xl font-semibold text-center text-navy mb-12">
            {language === 'en' ? 'For Property Buyers' : 'Per Acquirenti di Proprietà'}
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {buyerSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < buyerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-stone-200">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <svg className="w-4 h-4 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4 text-terracotta">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-lg text-navy mb-2">{step.title}</h4>
                  <p className="text-sm text-stone-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Geometri */}
        <div>
          <h3 className="font-playfair text-2xl font-semibold text-center text-navy mb-12">
            {language === 'en' ? 'For Geometri' : 'Per Geometri'}
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {geometraSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < geometraSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-stone-200">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <svg className="w-4 h-4 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 text-navy">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-lg text-navy mb-2">{step.title}</h4>
                  <p className="text-sm text-stone-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
