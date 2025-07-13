// PATH: app/page.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'

export default function HomePage() {
  const { language, t } = useLanguage()
  
  return (
    <>
      {/* Simple Hero - Immediate Choice */}
      <section className="min-h-[80vh] bg-gradient-to-b from-blue-50 to-white flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Language Toggle - Top Right */}
          <div className="absolute top-20 right-8">
            <button 
              onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
              className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-gray-700 font-medium"
            >
              <span className="text-2xl">{language === 'en' ? '🇬🇧' : '🇮🇹'}</span>
              <span>{language === 'en' ? 'Italiano' : 'English'}</span>
            </button>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'en' 
              ? 'Your trusted bridge to property investment in Puglia'
              : 'Il ponte di fiducia per il tuo investimento immobiliare in Puglia'
            }
          </h1>
          
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            {language === 'en'
              ? 'We connect foreign investors with verified local professionals for safe and transparent property purchases.'
              : 'Mettiamo in contatto investitori stranieri con professionisti locali verificati per acquisti immobiliari sicuri e trasparenti.'
            }
          </p>

          {/* The Choice */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
              {language === 'en' ? 'Who are you?' : 'Chi sei?'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Buyer Option */}
              <a 
                href="/buyer" 
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-300"
              >
                <div className="text-6xl mb-4">🏡</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-green-700">
                  {language === 'en' ? 'I Want to Buy' : 'Voglio Comprare'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === 'en'
                    ? "I'm a foreign investor interested in buying property in Puglia"
                    : 'Sono un investitore straniero interessato ad acquistare proprietà in Puglia'
                  }
                </p>
                <div className="text-green-600 font-semibold group-hover:underline">
                  {language === 'en' ? 'Discover how we can help →' : 'Scopri come possiamo aiutarti →'}
                </div>
              </a>

              {/* Professional Option */}
              <a 
                href="/professional" 
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-300"
              >
                <div className="text-6xl mb-4">💼</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-700">
                  {language === 'en' ? "I'm a Professional" : 'Sono un Professionista'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === 'en'
                    ? "I'm a surveyor, architect, lawyer, notary or real estate agency"
                    : 'Sono un geometra, architetto, avvocato, notaio o agenzia immobiliare'
                  }
                </p>
                <div className="text-blue-600 font-semibold group-hover:underline">
                  {language === 'en' ? 'Join our network →' : 'Entra nella rete →'}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600 mt-1">
                {language === 'en' ? 'Verified Professionals' : 'Professionisti Verificati'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">€5M+</div>
              <div className="text-gray-600 mt-1">
                {language === 'en' ? 'Transaction Value' : 'Valore Transazioni'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">48h</div>
              <div className="text-gray-600 mt-1">
                {language === 'en' ? 'Response Guaranteed' : 'Risposta Garantita'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">0€</div>
              <div className="text-gray-600 mt-1">
                {language === 'en' ? 'To Start' : 'Per Iniziare'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Make Money - Transparency */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === 'en' ? 'How It Works' : 'Come Funziona'}
          </h2>
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-lg text-gray-700">
              {language === 'en'
                ? '✅ Free for professionals during launch phase'
                : '✅ Gratis per professionisti durante la fase di lancio'
              }
            </p>
            <p className="text-lg text-gray-700 mt-2">
              {language === 'en'
                ? '✅ Small commission only on successfully completed transactions'
                : '✅ Piccola commissione solo su transazioni completate con successo'
              }
            </p>
            <p className="text-lg text-gray-700 mt-2">
              {language === 'en'
                ? '✅ Optional premium services for increased visibility'
                : '✅ Servizi premium opzionali per maggiore visibilità'
              }
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
