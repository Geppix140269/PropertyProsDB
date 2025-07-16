// PATH: app/components/home/UserTypeCards.tsx
'use client'
import Link from 'next/link'
import { useLanguage } from '@/app/providers/language-provider'

export default function UserTypeCards() {
  const { language } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-4xl font-bold text-center text-navy mb-4">
          {language === 'en' ? 'Professional Property Surveys in Puglia' : 'Rilievi Professionali in Puglia'}
        </h2>
        <p className="text-xl text-center text-stone-600 mb-12 max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Connect buyers with certified geometri for accurate, detailed property assessments'
            : 'Collega acquirenti con geometri certificati per valutazioni immobiliari accurate e dettagliate'}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Buyer Card */}
          <div className="bg-gradient-to-br from-cream to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-stone-200">
            <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-navy mb-3">
              {language === 'en' ? 'I Need a Property Survey' : 'Ho Bisogno di un Rilievo'}
            </h3>
            <p className="text-stone-600 mb-6">
              {language === 'en'
                ? 'Get professional property surveys, cadastral reports, and technical assessments from verified geometri in Puglia.'
                : 'Ottieni rilievi professionali, relazioni catastali e valutazioni tecniche da geometri verificati in Puglia.'}
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-stone-600">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'Verified professionals' : 'Professionisti verificati'}
              </li>
              <li className="flex items-center text-sm text-stone-600">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'Official documentation' : 'Documentazione ufficiale'}
              </li>
              <li className="flex items-center text-sm text-stone-600">
                <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'English-speaking service' : 'Servizio in inglese'}
              </li>
            </ul>
            <Link 
              href="/buyer/inquiry"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta/90 transition-all"
            >
              {language === 'en' ? 'Request a Survey' : 'Richiedi un Rilievo'}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Geometra Card */}
          <div className="bg-gradient-to-br from-navy to-sea-blue rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-semibold mb-3">
              {language === 'en' ? 'I am a Geometra' : 'Sono un Geometra'}
            </h3>
            <p className="text-white/90 mb-6">
              {language === 'en'
                ? 'Join our network of verified professionals and connect with international clients seeking property surveys in Puglia.'
                : 'Unisciti alla nostra rete di professionisti verificati e connettiti con clienti internazionali che cercano rilievi in Puglia.'}
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-white/90">
                <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'International clients' : 'Clienti internazionali'}
              </li>
              <li className="flex items-center text-sm text-white/90">
                <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'Professional growth' : 'Crescita professionale'}
              </li>
              <li className="flex items-center text-sm text-white/90">
                <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'Fair compensation' : 'Compenso equo'}
              </li>
            </ul>
            <Link 
              href="/professional/signup"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-stone-100 transition-all"
            >
              {language === 'en' ? 'Apply as Geometra' : 'Candidati come Geometra'}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
