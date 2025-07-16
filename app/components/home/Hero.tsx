// PATH: app/components/home/Hero.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'
import SurvEYESMascot from '../SurvEYESMascot'
import Link from 'next/link'

export default function Hero() {
  const { language } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-white to-sky-50 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-navy leading-tight">
              {language === 'en' 
                ? 'Need a Property Survey in Puglia?'
                : 'Hai Bisogno di un Rilievo in Puglia?'}
            </h1>
            
            <p className="text-xl text-stone-600 leading-relaxed">
              {language === 'en'
                ? 'Connect with certified geometri for professional property surveys, cadastral reports, and technical assessments - all without leaving home.'
                : 'Connettiti con geometri certificati per rilievi professionali, relazioni catastali e valutazioni tecniche - tutto senza uscire di casa.'}
            </p>
            
            {/* Two CTAs for clear user paths */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/buyer/inquiry"
                className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta/90 transition-all hover:scale-105 shadow-lg"
              >
                {language === 'en' ? 'I Need a Survey' : 'Ho Bisogno di un Rilievo'}
              </Link>
              
              <Link 
                href="/professional/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy font-semibold rounded-lg border-2 border-navy hover:bg-navy hover:text-white transition-all"
              >
                {language === 'en' ? 'I am a Geometra' : 'Sono un Geometra'}
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'Verified Professionals' : 'Professionisti Verificati'}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? 'Official Documentation' : 'Documentazione Ufficiale'}
              </div>
            </div>
          </div>

          {/* Right Side - Mascot */}
          <div className="relative lg:pl-12">
            <SurvEYESMascot 
              size="xl" 
              expression="confident"
              showMagnifyingGlass={true}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
