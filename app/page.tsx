// PATH: app/page.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const { language, t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=90', // Luxury trullo
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1920&q=90', // Villa with pool
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=90', // Modern estate
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <>
      {/* Hero Section - Premium Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
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
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium text-sm">
                {t('Trusted by 500+ International Investors', 'Scelto da 500+ Investitori Internazionali')}
              </span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t(
                <>Unlock Your <br/><span className="text-terracotta">Puglia Dream</span></>,
                <>Realizza il Tuo <br/><span className="text-terracotta">Sogno in Puglia</span></>
              )}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              {t(
                'The trusted marketplace connecting international buyers with verified Italian real estate professionals.',
                'Il marketplace di fiducia che connette acquirenti internazionali con professionisti immobiliari italiani verificati.'
              )}
            </p>

            {/* CTA Buttons */}
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

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">€125M+</div>
                <div className="text-sm text-white/70 mt-1">
                  {t('Properties Sold', 'Proprietà Vendute')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">200+</div>
                <div className="text-sm text-white/70 mt-1">
                  {t('Verified Experts', 'Esperti Verificati')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
                <div className="text-sm text-white/70 mt-1">
                  {t('Success Rate', 'Tasso di Successo')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-stone-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <div>
                <div className="text-sm text-stone-500">Rated</div>
                <div className="font-bold text-stone-800">4.9/5 Stars</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <div className="text-sm text-stone-500">Security</div>
                <div className="font-bold text-stone-800">Bank-Level</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div className="text-sm text-stone-500">Response</div>
                <div className="font-bold text-stone-800">< 24 Hours</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <div>
                <div className="text-sm text-stone-500">Payment</div>
                <div className="font-bold text-stone-800">100% Secure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Apulink Works */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              {t('How Apulink Works', 'Come Funziona Apulink')}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {t(
                'A seamless process designed to make your Italian property journey simple, secure, and successful.',
                'Un processo semplice progettato per rendere il tuo viaggio immobiliare italiano semplice, sicuro e di successo.'
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <span className="font-playfair text-3xl font-bold text-terracotta">1</span>
                </div>
                <div className="w-16 h-16 bg-terracotta rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-3">
                  {t('Tell Us Your Dream', 'Condividi il Tuo Sogno')}
                </h3>
                <p className="text-stone-600">
                  {t(
                    'Share your property preferences, budget, and timeline. Our smart matching system starts working immediately.',
                    'Condividi le tue preferenze, budget e tempistiche. Il nostro sistema di matching inizia subito a lavorare.'
                  )}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-sea/10 rounded-full flex items-center justify-center">
                  <span className="font-playfair text-3xl font-bold text-sea">2</span>
                </div>
                <div className="w-16 h-16 bg-sea rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-3">
                  {t('Meet Verified Experts', 'Incontra Esperti Verificati')}
                </h3>
                <p className="text-stone-600">
                  {t(
                    'We connect you with pre-screened lawyers, architects, and agents who speak your language.',
                    'Ti connettiamo con avvocati, architetti e agenti pre-selezionati che parlano la tua lingua.'
                  )}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center">
                  <span className="font-playfair text-3xl font-bold text-olive">3</span>
                </div>
                <div className="w-16 h-16 bg-olive rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-3">
                  {t('Secure Your Dream', 'Realizza il Tuo Sogno')}
                </h3>
                <p className="text-stone-600">
                  {t(
                    'Navigate the purchase with confidence. Every step verified, every document translated, every detail handled.',
                    'Naviga l\'acquisto con fiducia. Ogni passo verificato, ogni documento tradotto, ogni dettaglio gestito.'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-6 text-center">
              {t('Average Timeline: 45-60 Days', 'Tempistica Media: 45-60 Giorni')}
            </h3>
            <div className="relative">
              <div className="absolute top-5 left-0 right-0 h-1 bg-stone-200"></div>
              <div className="absolute top-5 left-0 w-3/4 h-1 bg-terracotta"></div>
              <div className="flex justify-between relative">
                <div className="text-center">
                  <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white font-bold mb-2">✓</div>
                  <div className="text-sm font-medium text-stone-800">{t('Register', 'Registrati')}</div>
                  <div className="text-xs text-stone-600">{t('Day 1', 'Giorno 1')}</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white font-bold mb-2">✓</div>
                  <div className="text-sm font-medium text-stone-800">{t('Property Search', 'Ricerca')}</div>
                  <div className="text-xs text-stone-600">{t('Days 2-14', 'Giorni 2-14')}</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white font-bold mb-2">✓</div>
                  <div className="text-sm font-medium text-stone-800">{t('Due Diligence', 'Due Diligence')}</div>
                  <div className="text-xs text-stone-600">{t('Days 15-30', 'Giorni 15-30')}</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center text-white font-bold mb-2">4</div>
                  <div className="text-sm font-medium text-stone-800">{t('Closing', 'Chiusura')}</div>
                  <div className="text-xs text-stone-600">{t('Days 45-60', 'Giorni 45-60')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-terracotta/10 text-terracotta rounded-full text-sm font-medium mb-4">
              {t('Exclusive Listings', 'Annunci Esclusivi')}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              {t('Featured Properties This Week', 'Proprietà in Evidenza Questa Settimana')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="absolute top-4 left-4 z-10 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t('New', 'Nuovo')}
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=400&fit=crop" 
                  alt="Luxury Trullo"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-stone-800 mb-2">Restored Trullo with Pool</h3>
              <p className="text-stone-600 mb-2">Ostuni, Puglia</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-terracotta">€385,000</span>
                <span className="text-sm text-stone-500">3 beds • 2 baths</span>
              </div>
            </div>

            {/* Property 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="absolute top-4 left-4 z-10 bg-sea text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t('Sea View', 'Vista Mare')}
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop" 
                  alt="Modern Villa"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-stone-800 mb-2">Modern Villa Polignano</h3>
              <p className="text-stone-600 mb-2">Polignano a Mare, Puglia</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-terracotta">€750,000</span>
                <span className="text-sm text-stone-500">5 beds • 4 baths</span>
              </div>
            </div>

            {/* Property 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="absolute top-4 left-4 z-10 bg-olive text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t('Investment', 'Investimento')}
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop" 
                  alt="Masseria"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-stone-800 mb-2">Historic Masseria Estate</h3>
              <p className="text-stone-600 mb-2">Fasano, Puglia</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-terracotta">€1,200,000</span>
                <span className="text-sm text-stone-500">8 beds • 6 baths</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/buyer" className="inline-flex items-center text-terracotta font-semibold hover:text-terracotta-dark">
              {t('View All Properties', 'Vedi Tutte le Proprietà')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              {t('Success Stories', 'Storie di Successo')}
            </h2>
            <p className="text-xl text-stone-600">
              {t('Real buyers. Real professionals. Real results.', 'Veri acquirenti. Veri professionisti. Veri risultati.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-700 mb-6 text-lg italic">
                "Apulink made our dream possible. We found a beautiful trullo, and their team handled everything - from translation to taxes. We saved €30,000 compared to going alone."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                  alt="Client"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-stone-800">Michael & Lisa Chen</div>
                  <div className="text-stone-600">San Francisco → Ostuni</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-700 mb-6 text-lg italic">
                "As a geometra, Apulink brings me clients I could never reach on my own. The platform is professional, and the commission model is fair. My business has grown 60% this year."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                  alt="Professional"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-stone-800">Giuseppe Marino</div>
                  <div className="text-stone-600">Geometra, Bari</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-terracotta to-terracotta-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            {t(
              'Start Your Puglia Journey Today',
              'Inizia Oggi il Tuo Viaggio in Puglia'
            )}
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            {t(
              'Join thousands who have found their perfect property or grown their business with Apulink.',
              'Unisciti a migliaia che hanno trovato la proprietà perfetta o fatto crescere il loro business con Apulink.'
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/buyer"
              className="inline-flex items-center justify-center bg-white text-terracotta px-10 py-4 rounded-lg font-bold text-lg hover:bg-stone-100 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              {t('Find Your Property', 'Trova la Tua Proprietà')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a 
              href="/professional"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-200"
            >
              {t('Join as Professional', 'Diventa Partner')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
