// PATH: app/buyer/page.tsx
'use client'
import { useState } from 'react'

export default function BuyerPage() {
  const [language, setLanguage] = useState<'it' | 'en'>('en') // Default to English for foreign buyers
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Language Toggle */}
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <span>{language === 'en' ? '🇬🇧' : '🇮🇹'}</span>
              <span>{language === 'en' ? 'IT' : 'EN'}</span>
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'en' 
                ? 'Your Dream Property in Puglia Awaits'
                : 'La Tua Proprietà da Sogno in Puglia Ti Aspetta'
              }
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              {language === 'en'
                ? 'We connect you with verified local professionals who speak your language and understand your needs. Buy with confidence.'
                : 'Ti mettiamo in contatto con professionisti locali verificati che parlano la tua lingua e capiscono le tue esigenze. Compra con fiducia.'
              }
            </p>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-200">
              {language === 'en' ? 'Start Your Journey' : 'Inizia il Tuo Viaggio'}
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {language === 'en' ? 'Why Foreign Buyers Choose Us' : 'Perché i Compratori Stranieri Scelgono Noi'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Verified Professionals' : 'Professionisti Verificati'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? 'Every lawyer, notary, architect, and agent is pre-screened and verified'
                  : 'Ogni avvocato, notaio, architetto e agente è pre-selezionato e verificato'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Language No Barrier' : 'Nessuna Barriera Linguistica'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? 'Professionals who speak English, German, French, and more'
                  : 'Professionisti che parlano inglese, tedesco, francese e altro'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Complete Support' : 'Supporto Completo'}
              </h3>
              <p className="text-gray-700">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {language === 'en' ? 'Your Journey to Property Ownership' : 'Il Tuo Percorso verso la Proprietà'}
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'en' ? 'Tell Us Your Dream' : 'Raccontaci il Tuo Sogno'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Location, budget, type of property, timeline - we listen to understand exactly what you need'
                    : 'Posizione, budget, tipo di proprietà, tempi - ascoltiamo per capire esattamente cosa ti serve'
                  }
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'en' ? 'Meet Your Team' : 'Incontra il Tuo Team'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'We match you with the perfect real estate agent, lawyer, and notary for your needs'
                    : 'Ti abbiniamo con l\'agente immobiliare, avvocato e notaio perfetti per le tue esigenze'
                  }
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'en' ? 'View Properties Safely' : 'Visita le Proprietà in Sicurezza'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Virtual tours, accompanied visits, or we can even view properties on your behalf'
                    : 'Tour virtuali, visite accompagnate, o possiamo anche visitare le proprietà per te'
                  }
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'en' ? 'Secure Purchase' : 'Acquisto Sicuro'}
                </h3>
                <p className="text-gray-700">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {language === 'en' ? 'Services Included' : 'Servizi Inclusi'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">
                {language === 'en' ? 'Property search and selection' : 'Ricerca e selezione proprietà'}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">
                {language === 'en' ? 'Legal document translation' : 'Traduzione documenti legali'}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">
                {language === 'en' ? 'Tax code (codice fiscale) assistance' : 'Assistenza codice fiscale'}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">
                {language === 'en' ? 'Bank account opening support' : 'Supporto apertura conto bancario'}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">
                {language === 'en' ? 'Utility connections' : 'Allacciamento utenze'}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">
                {language === 'en' ? 'Renovation planning' : 'Pianificazione ristrutturazioni'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {language === 'en' ? 'What Buyers Say' : 'Cosa Dicono i Compratori'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                {language === 'en'
                  ? "The team made our dream of owning a trullo in Puglia come true. Professional, trustworthy, and always available."
                  : "Il team ha reso realtà il nostro sogno di possedere un trullo in Puglia. Professionali, affidabili e sempre disponibili."
                }
              </p>
              <p className="font-semibold">- Sarah & John, UK</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                {language === 'en'
                  ? "As Germans buying in Italy, we were worried about the bureaucracy. PropertyPros made everything smooth and simple."
                  : "Come tedeschi che comprano in Italia, eravamo preoccupati per la burocrazia. PropertyPros ha reso tutto fluido e semplice."
                }
              </p>
              <p className="font-semibold">- Klaus & Emma, Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' 
              ? 'Ready to Find Your Perfect Property?'
              : 'Pronto a Trovare la Tua Proprietà Perfetta?'
            }
          </h2>
          <p className="text-xl mb-8 text-green-100">
            {language === 'en'
              ? 'Start with a free consultation. No obligations, just honest advice.'
              : 'Inizia con una consulenza gratuita. Nessun obbligo, solo consigli onesti.'
            }
          </p>
          <button className="bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200">
            {language === 'en' ? 'Get Started Today' : 'Inizia Oggi'}
          </button>
        </div>
      </section>
    </>
  )
}
