// PATH: app/components/home/WhyUseApulink.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'
import SurvEYESMascot from '../SurvEYESMascot'

export default function WhyUseApulink() {
  const { language } = useLanguage()

  const benefits = [
    {
      title: language === 'en' ? 'Verified Professionals' : 'Professionisti Verificati',
      description: language === 'en'
        ? 'Every geometra is verified through the official Collegio dei Geometri registry'
        : 'Ogni geometra è verificato tramite il registro ufficiale del Collegio dei Geometri',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Transparent Pricing' : 'Prezzi Trasparenti',
      description: language === 'en'
        ? 'Clear, upfront pricing with no hidden fees or surprises'
        : 'Prezzi chiari e anticipati senza costi nascosti o sorprese',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'English Support' : 'Supporto in Inglese',
      description: language === 'en'
        ? 'All professionals provide services in English for international clients'
        : 'Tutti i professionisti forniscono servizi in inglese per clienti internazionali',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Fast Turnaround' : 'Tempi Rapidi',
      description: language === 'en'
        ? 'Receive comprehensive reports within days, not weeks'
        : 'Ricevi report completi in giorni, non settimane',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Legal Compliance' : 'Conformità Legale',
      description: language === 'en'
        ? 'All surveys meet Italian legal requirements and standards'
        : 'Tutti i rilievi rispettano i requisiti e gli standard legali italiani',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Secure Platform' : 'Piattaforma Sicura',
      description: language === 'en'
        ? 'Your data and documents are protected with bank-level security'
        : 'I tuoi dati e documenti sono protetti con sicurezza di livello bancario',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ]

  const stats = [
    {
      value: '500+',
      label: language === 'en' ? 'Properties Surveyed' : 'Proprietà Rilevate'
    },
    {
      value: '50+',
      label: language === 'en' ? 'Verified Geometri' : 'Geometri Verificati'
    },
    {
      value: '98%',
      label: language === 'en' ? 'Client Satisfaction' : 'Soddisfazione Clienti'
    },
    {
      value: '4.9★',
      label: language === 'en' ? 'Average Rating' : 'Valutazione Media'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">
            {language === 'en' ? 'Why Choose Apulink?' : 'Perché Scegliere Apulink?'}
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'We bridge the gap between international buyers and Italian property professionals'
              : 'Colmiamo il divario tra acquirenti internazionali e professionisti immobiliari italiani'}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center text-terracotta mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg text-navy mb-2">{benefit.title}</h3>
              <p className="text-stone-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-playfair text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <SurvEYESMascot size="md" expression="happy" className="mx-auto mb-6" />
          <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">
            {language === 'en' 
              ? 'Your Eyes on the Ground in Puglia' 
              : 'I Tuoi Occhi sul Territorio in Puglia'}
          </h3>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'SurvEYES, our trusted mascot, represents our commitment to providing you with comprehensive, reliable property surveys. We see what you cannot, ensuring your investment is secure.'
              : 'SurvEYES, la nostra mascotte di fiducia, rappresenta il nostro impegno a fornirti rilievi immobiliari completi e affidabili. Vediamo ciò che tu non puoi vedere, garantendo che il tuo investimento sia sicuro.'}
          </p>
        </div>
      </div>
    </section>
  )
}
