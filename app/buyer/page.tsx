// PATH: app/buyer/page.tsx
'use client'
import { useState } from 'react'

export default function BuyerPage() {
  const [language, setLanguage] = useState<'it' | 'en'>('en') // Default to English for foreign buyers
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-terracotta/5 to-white py-20 relative overflow-hidden">
        {/* Decorative olive branch */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M100 20 Q 80 60 100 100 Q 120 60 100 20" fill="#808000" />
            <circle cx="85" cy="50" r="8" fill="#808000" />
            <circle cx="115" cy="50" r="8" fill="#808000" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Language Toggle */}
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
              className="flex items-center space-x-2 text-stone-600 hover:text-terracotta font-medium"
            >
              <span className="text-2xl">{language === 'en' ? '🇬🇧' : '🇮🇹'}</span>
              <span>{language === 'en' ? 'IT' : 'EN'}</span>
            </button>
          </div>

          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              {language === 'en' 
                ? 'Your Dream Property in Puglia Awaits'
                : 'La Tua Proprietà da Sogno in Puglia Ti Aspetta'
              }
            </h1>
            <p className="text-xl text-stone-600 mb-10 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Apulink connects you with verified local professionals who speak your language and understand your needs. Buy with confidence.'
                : 'Apulink ti mette in contatto con professionisti locali verificati che parlano la tua lingua e capiscono le tue esigenze. Compra con fiducia.'
              }
            </p>
            <button className="bg-terracotta text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-terracotta-dark transition-all duration-200">
              {language === 'en' ? 'Start Your Journey' : 'Inizia il Tuo Viaggio'}
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Apulink */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-stone-800">
            {language === 'en' ? 'Why Foreign Buyers Choose Apulink' : 'Perché i Compratori Stranieri Scelgono Apulink'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4 text-terracotta">🛡️</div>
              <h3 className="font-playfair text-xl font-semibold mb-3">
                {language === 'en' ? 'Verified Professionals' : 'Professionisti Verificati'}
              </h3>
              <p className="text-stone-600">
                {language === 'en'
                  ? 'Every lawyer, notary, architect, and agent is pre-screened and verified'
                  : 'Ogni avvocato, notaio, architetto e agente è pre-selezionato e verificato'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4 text-sea">🌍</div>
              <h3 className="font-playfair text-xl font-semibold mb-3">
                {language === 'en' ? 'Language No Barrier' : 'Nessuna Barriera Linguistica'}
              </h3>
              <p className="text-stone-600">
                {language === 'en'
                  ? 'Professionals who speak English, German, French, and more'
                  : 'Professionisti che parlano inglese, tedesco, francese e altro'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4 text-olive">📋</div>
              <h3 className="font-playfair text-xl font-semibold mb-3">
                {language === 'en' ? 'Complete Support' : 'Supporto Completo'}
              </h3>
              <p className="text-stone-600">
                {language === 'en'
                  ? 'From first viewing to keys in hand, we guide you every step'
                  : 'Dalla prima visita alle chiavi in mano, ti guidiamo in ogni passo'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-stone-800">
            {language === 'en' ? 'Your Journey to Property Ownership' : 'Il Tuo Percorso verso la Proprietà'}
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="bg-terracotta/20 text-terracotta rounded-full w-12 h-12 flex items-center justify-center font-playfair font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {language === 'en' ? 'Tell Us Your Dream' : 'Raccontaci il Tuo Sogno'}
                </h3>
                <p className="text-stone-600">
                  {language === 'en'
                    ? 'Location, budget, type of property, timeline - we listen to understand exactly what you need'
                    : 'Posizione, budget, tipo di proprietà, tempi - ascoltiamo per capire esattamente cosa ti serve'
                  }
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="bg-terracotta/20 text-terracotta rounded-full w-12 h-12 flex items-center justify-center font-playfair font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {language === 'en' ? 'Meet Your Team' : 'Incontra il Tuo Team'}
                </h3>
                <p className="text-stone-600">
                  {language === 'en'
                    ? 'We match you with the perfect real estate agent, lawyer, and notary for your needs'
                    : 'Ti abbiniamo con l\'agente immobiliare, avvocato e notaio perfetti per le tue esigenze'
                  }
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="bg-terracotta/20 text-terracotta rounded-full w-12 h-12 flex items-center justify-center font-playfair font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {language === 'en' ? 'View Properties Safely' : 'Visita le Proprietà in Sicurezza'}
                </h3>
                <p className="text-stone-600">
                  {language === 'en'
                    ? 'Virtual tours, accompanied visits, or we can even view properties on your behalf'
                    : 'Tour virtuali, visite accompagnate, o possiamo anche visitare le proprietà per te'
                  }
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="bg-terracotta/20 text-terracotta rounded-full w-12 h-12 flex items-center justify-center font-playfair font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {language === 'en' ? 'Secure Purchase' : 'Acquisto Sicuro'}
                </h3>
                <p className="text-stone-600">
                  {language === 'en'
                    ? 'Full due diligence, contract review, and support through closing - all transparent and secure'
                    : 'Due diligence completa, revisione contratti e supporto fino alla chiusura - tutto trasparente e sicuro'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-stone-800">
            {language === 'en' ? 'Services Included' : 'Servizi Inclusi'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <span className="text-terracotta text-xl">✓</span>
              <span className="text-stone-700">
                {language === 'en' ? 'Property search and selection' : 'Ricerca e selezione proprietà'}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-terracotta text-xl">✓</span>
              <span className="text-stone-700">
                {language === 'en' ? 'Legal document translation' : 'Traduzione documenti legali'}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-terracotta text-xl">✓</span>
              <span className="text-stone-700">
                {language === 'en' ? 'Tax code (codice fiscale) assistance' : 'Assistenza codice fiscale'}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-terracotta text-xl">✓</span>
              <span className="text-stone-700">
                {language === 'en' ? 'Bank account opening support' : 'Supporto apertura conto bancario'}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-terracotta text-xl">✓</span>
              <span className="text-stone-700">
                {language === 'en' ? 'Utility connections' : 'Allacciamento utenze'}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-terracotta text-xl">✓</span>
              <span className="text-stone-700">
                {language === 'en' ? 'Renovation planning' : 'Pianificazione ristrutturazioni'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-terracotta/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-stone-800">
            {language === 'en' ? 'What Buyers Say' : 'Cosa Dicono i Compratori'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-terracotta text-xl">★★★★★</span>
              </div>
              <p className="text-stone-700 mb-4 italic">
                {language === 'en'
                  ? "Apulink made our dream of owning a trullo in Puglia come true. Professional, trustworthy, and always available."
                  : "Apulink ha reso realtà il nostro sogno di possedere un trullo in Puglia. Professionali, affidabili e sempre disponibili."
                }
              </p>
              <p className="font-semibold text-stone-800">- Sarah & John, UK</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-terracotta text-xl">★★★★★</span>
              </div>
              <p className="text-stone-700 mb-4 italic">
                {language === 'en'
                  ? "As Germans buying in Italy, we were worried about the bureaucracy. Apulink made everything smooth and simple."
                  : "Come tedeschi che comprano in Italia, eravamo preoccupati per la burocrazia. Apulink ha reso tutto fluido e semplice."
                }
              </p>
              <p className="font-semibold text-stone-800">- Klaus & Emma, Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-terracotta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">
            {language === 'en' 
              ? 'Ready to Find Your Perfect Property?'
              : 'Pronto a Trovare la Tua Proprietà Perfetta?'
            }
          </h2>
          <p className="text-xl mb-8 text-terracotta-light">
            {language === 'en'
              ? 'Start with a free consultation. No obligations, just honest advice.'
              : 'Inizia con una consulenza gratuita. Nessun obbligo, solo consigli onesti.'
            }
          </p>
          <button className="bg-white text-terracotta px-10 py-4 rounded-lg font-bold text-lg hover:bg-stone-100 transition-all duration-200">
            {language === 'en' ? 'Get Started Today' : 'Inizia Oggi'}
          </button>
        </div>
      </section>
    </>
  )
}
