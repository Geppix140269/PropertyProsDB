// PATH: app/page.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'

export default function HomePage() {
  const { language, t } = useLanguage()
  
  return (
    <>
      {/* Hero Section with Apulink Branding */}
      <section className="min-h-[80vh] bg-gradient-to-b from-stone-50 to-white flex items-center relative overflow-hidden">
        {/* Decorative arch pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <svg viewBox="0 0 400 800" className="w-full h-full">
            <path d="M0 0 Q 200 400 0 800" fill="none" stroke="#E2725B" strokeWidth="100"/>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Message */}
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-stone-800 mb-6">
            {t(
              'Your Bridge to Property Investment in Puglia',
              'Il Tuo Ponte per Investimenti Immobiliari in Puglia'
            )}
          </h1>
          
          <p className="text-xl text-stone-600 mb-12 max-w-3xl mx-auto">
            {t(
              'Apulink connects foreign investors with verified local professionals for safe and transparent property purchases.',
              'Apulink connette investitori stranieri con professionisti locali verificati per acquisti immobiliari sicuri e trasparenti.'
            )}
          </p>

          {/* The Choice */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
              {t('Who are you?', 'Chi sei?')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Buyer Option */}
              <a 
                href="/buyer" 
                className="group bg-gradient-to-br from-terracotta/10 to-terracotta/5 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-terracotta/30"
              >
                <div className="text-6xl mb-4">🏡</div>
                <h3 className="font-playfair text-2xl font-bold mb-3 text-stone-800 group-hover:text-terracotta">
                  {t('I Want to Buy', 'Voglio Comprare')}
                </h3>
                <p className="text-stone-600 mb-4">
                  {t(
                    "I'm a foreign investor interested in buying property in Puglia",
                    'Sono un investitore straniero interessato ad acquistare proprietà in Puglia'
                  )}
                </p>
                <div className="text-terracotta font-semibold group-hover:underline">
                  {t('Discover how we can help →', 'Scopri come possiamo aiutarti →')}
                </div>
              </a>

              {/* Professional Option */}
              <a 
                href="/professional" 
                className="group bg-gradient-to-br from-sea/10 to-sea/5 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-sea/30"
              >
                <div className="text-6xl mb-4">💼</div>
                <h3 className="font-playfair text-2xl font-bold mb-3 text-stone-800 group-hover:text-sea">
                  {t("I'm a Professional", 'Sono un Professionista')}
                </h3>
                <p className="text-stone-600 mb-4">
                  {t(
                    "I'm a surveyor, architect, lawyer, notary or real estate agency",
                    'Sono un geometra, architetto, avvocato, notaio o agenzia immobiliare'
                  )}
                </p>
                <div className="text-sea font-semibold group-hover:underline">
                  {t('Join our network →', 'Entra nella rete →')}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="font-playfair text-3xl font-bold text-terracotta">100%</div>
              <div className="text-stone-600 mt-1">
                {t('Verified Professionals', 'Professionisti Verificati')}
              </div>
            </div>
            <div>
              <div className="font-playfair text-3xl font-bold text-terracotta">€5M+</div>
              <div className="text-stone-600 mt-1">
                {t('Transaction Value', 'Valore Transazioni')}
              </div>
            </div>
            <div>
              <div className="font-playfair text-3xl font-bold text-terracotta">48h</div>
              <div className="text-stone-600 mt-1">
                {t('Response Guaranteed', 'Risposta Garantita')}
              </div>
            </div>
            <div>
              <div className="font-playfair text-3xl font-bold text-terracotta">0€</div>
              <div className="text-stone-600 mt-1">
                {t('To Start', 'Per Iniziare')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Make Money - Transparency */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-2xl font-bold mb-6 text-stone-800">
            {t('How It Works', 'Come Funziona')}
          </h2>
          <div className="bg-terracotta/5 rounded-xl p-8 border border-terracotta/20">
            <p className="text-lg text-stone-700">
              {t(
                '✅ Free for professionals during launch phase',
                '✅ Gratis per professionisti durante la fase di lancio'
              )}
            </p>
            <p className="text-lg text-stone-700 mt-2">
              {t(
                '✅ Small commission only on successfully completed transactions',
                '✅ Piccola commissione solo su transazioni completate con successo'
              )}
            </p>
            <p className="text-lg text-stone-700 mt-2">
              {t(
                '✅ Optional premium services for increased visibility',
                '✅ Servizi premium opzionali per maggiore visibilità'
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
