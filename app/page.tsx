// PATH: app/page.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const { language, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Modern Hero Section with Gradient Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta via-sea to-olive animate-gradient-shift bg-[length:400%_400%]"></div>
        
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-terracotta/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sea/30 rounded-full filter blur-3xl animate-float-delayed"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Status badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white font-medium text-sm tracking-wide">
              {t('PUGLIA PROPERTY EXPERTS', 'ESPERTI IMMOBILIARI PUGLIA')}
            </span>
          </div>
          
          <h1 className="font-playfair text-6xl md:text-8xl font-light text-white mb-6 leading-tight">
            {language === 'it' ? (
              <>
                Il Tuo Ponte verso<br />
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  l&apos;Investimento in Puglia
                </span>
              </>
            ) : (
              <>
                Your Bridge to<br />
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Puglia Investment
                </span>
              </>
            )}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            {t(
              'Connect with verified Italian professionals. Access exclusive properties. Navigate bureaucracy with confidence.',
              'Connettiti con professionisti italiani verificati. Accedi a proprietà esclusive. Naviga la burocrazia con fiducia.'
            )}
          </p>
          
          {/* CTA Buttons with ripple effect */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/buyer"
              className="group relative overflow-hidden bg-white text-terracotta px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center">
                {t('I Want to Buy', 'Voglio Comprare')}
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 to-terracotta/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            
            <a
              href="/professional"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                {t("I'm a Professional", 'Sono un Professionista')}
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '€125M+', label: t('Properties Sold', 'Proprietà Vendute'), icon: '🏛️' },
              { value: '500+', label: t('Happy Investors', 'Investitori Soddisfatti'), icon: '😊' },
              { value: '200+', label: t('Verified Experts', 'Esperti Verificati'), icon: '✓' },
              { value: '45', label: t('Days Average', 'Giorni in Media'), icon: '📅' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-terracotta/10 to-sea/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-terracotta to-sea bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-stone-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Modern Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-terracotta/10 rounded-full px-6 py-3 mb-6">
              <span className="text-terracotta font-semibold text-sm tracking-wide">
                {t('SIMPLE PROCESS', 'PROCESSO SEMPLICE')}
              </span>
            </div>
            <h2 className="font-playfair text-5xl font-light text-stone-800 mb-4">
              {t('How Apulink Works', 'Come Funziona Apulink')}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {t(
                'From dream to keys in hand, we make it simple',
                'Dal sogno alle chiavi in mano, rendiamo tutto semplice'
              )}
            </p>
          </div>
          
          {/* Modern process cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: t('Share Your Dream', 'Condividi il Tuo Sogno'),
                desc: t(
                  'Tell us what you&apos;re looking for - trullo, masseria, or villa. Your budget, timeline, and vision.',
                  'Dicci cosa cerchi - trullo, masseria o villa. Il tuo budget, tempistiche e visione.'
                ),
                gradient: 'from-terracotta to-terracotta-dark'
              },
              {
                step: '02',
                title: t('Meet Your Experts', 'Incontra i Tuoi Esperti'),
                desc: t(
                  'We match you with verified local professionals who speak your language and understand your needs.',
                  'Ti abbiniamo con professionisti locali verificati che parlano la tua lingua.'
                ),
                gradient: 'from-sea to-sea-dark'
              },
              {
                step: '03',
                title: t('Close with Confidence', 'Concludi con Fiducia'),
                desc: t(
                  'Navigate permits, taxes, and contracts with expert guidance. We&apos;re with you until you get your keys.',
                  'Naviga permessi, tasse e contratti con guida esperta. Siamo con te fino alle chiavi.'
                ),
                gradient: 'from-olive to-olive-dark'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-50 rounded-3xl transform group-hover:scale-105 transition-transform"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.gradient} text-white rounded-2xl mb-6 font-bold text-xl`}>
                    {item.step}
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Modern Cards */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-light text-stone-800 mb-4">
              {t('Why Choose Apulink', 'Perché Scegliere Apulink')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-terracotta to-terracotta-dark rounded-2xl flex items-center justify-center text-white text-2xl">
                    🛡️
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-3">
                    {t('Verified Professionals', 'Professionisti Verificati')}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {t(
                      'Every expert is background-checked, licensed, and rated by previous clients. Work with confidence.',
                      'Ogni esperto è verificato, autorizzato e valutato dai clienti precedenti. Lavora con fiducia.'
                    )}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-sea to-sea-dark rounded-2xl flex items-center justify-center text-white text-2xl">
                    💰
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-3">
                    {t('Transparent Pricing', 'Prezzi Trasparenti')}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {t(
                      'No hidden fees. Pay only when deals close. Our success is tied to yours.',
                      'Nessun costo nascosto. Paghi solo quando l&apos;affare si conclude. Il nostro successo è legato al tuo.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta via-sea to-olive animate-gradient-shift bg-[length:400%_400%]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-5xl md:text-6xl font-light text-white mb-6">
            {t('Ready to Start Your', 'Pronto per Iniziare la Tua')}
            <span className="block font-bold mt-2">
              {t('Puglia Journey?', 'Avventura in Puglia?')}
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {t(
              'Join hundreds who found their perfect property with expert help',
              'Unisciti a centinaia che hanno trovato la proprietà perfetta con l&apos;aiuto di esperti'
            )}
          </p>
          
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/buyer/inquiry"
              className="group bg-white text-terracotta px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            >
              {t('Start Your Search', 'Inizia la Ricerca')}
              <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </a>
            <a
              href="/professional/register"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              {t('Join as Expert', 'Unisciti come Esperto')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
