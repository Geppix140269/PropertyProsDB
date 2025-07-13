'use client'
import { useLanguage } from '@/app/providers/language-provider'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const { language, t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=90',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1920&q=90',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=90',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
              <img
                src={image}
                alt="Luxury property in Puglia"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium text-sm">
                {t('Trusted by 500+ International Investors', 'Scelto da 500+ Investitori Internazionali')}
              </span>
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {language === 'it' ? (
                <>
                  Realizza il Tuo <br />
                  <span className="text-terracotta">Sogno in Puglia</span>
                </>
              ) : (
                <>
                  Unlock Your <br />
                  <span className="text-terracotta">Puglia Dream</span>
                </>
              )}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              {t(
                'The trusted marketplace connecting international buyers with verified Italian real estate professionals.',
                'Il marketplace di fiducia che connette acquirenti internazionali con professionisti immobiliari italiani verificati.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/buyer"
                className="group inline-flex items-center justify-center bg-terracotta text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-terracotta-dark transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {t('I Want to Buy', 'Voglio Comprare')}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="/professional"
                className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-200 hover:border-white/50"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t("I'm a Professional", 'Sono un Professionista')}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  )
}
