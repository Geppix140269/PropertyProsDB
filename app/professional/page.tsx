// PATH: app/professional/page.tsx
'use client'
import { useState } from 'react'

export default function ProfessionalPage() {
  const [language, setLanguage] = useState<'it' | 'en'>('it') // Default to Italian for local professionals
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Language Toggle */}
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <span>{language === 'it' ? '🇮🇹' : '🇬🇧'}</span>
              <span>{language === 'it' ? 'EN' : 'IT'}</span>
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'it' 
                ? 'Espandi la Tua Clientela con Investitori Stranieri'
                : 'Expand Your Client Base with Foreign Investors'
              }
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              {language === 'it'
                ? 'Unisciti alla rete di professionisti verificati che assistono investitori internazionali negli acquisti immobiliari in Puglia.'
                : 'Join the network of verified professionals assisting international investors with property purchases in Puglia.'
              }
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200">
              {language === 'it' ? 'Registrati Gratuitamente' : 'Register for Free'}
            </button>
          </div>
        </div>
      </section>

      {/* Who We Look For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {language === 'it' ? 'Professionisti che Cerchiamo' : 'Professionals We Seek'}
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">📐</div>
              <h3 className="font-semibold text-lg">
                {language === 'it' ? 'Geometri' : 'Surveyors'}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'it' ? 'Rilievi, catasto, pratiche edilizie' : 'Surveys, cadastre, building permits'}
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-semibold text-lg">
                {language === 'it' ? 'Architetti' : 'Architects'}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'it' ? 'Progettazione, ristrutturazioni' : 'Design, renovations'}
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="font-semibold text-lg">
                {language === 'it' ? 'Avvocati' : 'Lawyers'}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'it' ? 'Contratti, due diligence' : 'Contracts, due diligence'}
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">📜</div>
              <h3 className="font-semibold text-lg">
                {language === 'it' ? 'Notai' : 'Notaries'}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'it' ? 'Atti di vendita' : 'Sales deeds'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-semibold text-lg">
                {language === 'it' ? 'Agenzie Immobiliari' : 'Real Estate Agencies'}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'it' ? 'Ricerca proprietà, visite' : 'Property search, viewings'}
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🔨</div>
              <h3 className="font-semibold text-lg">
                {language === 'it' ? 'Imprese Edili' : 'Construction Companies'}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'it' ? 'Ristrutturazioni, manutenzione' : 'Renovations, maintenance'}
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-semibold text-lg">
                {language === 'it' ? 'Commercialisti' : 'Accountants'}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'it' ? 'Fiscalità, partita IVA' : 'Tax matters, VAT'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {language === 'it' ? 'Vantaggi per i Professionisti' : 'Benefits for Professionals'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">💰</span>
                {language === 'it' ? 'Nuovi Clienti Premium' : 'New Premium Clients'}
              </h3>
              <p className="text-gray-700">
                {language === 'it'
                  ? 'Accedi a investitori stranieri con budget importanti e progetti seri. Clienti che apprezzano la qualità e pagano il giusto prezzo.'
                  : 'Access foreign investors with significant budgets and serious projects. Clients who appreciate quality and pay fair prices.'
                }
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">🌍</span>
                {language === 'it' ? 'Nessuna Barriera Linguistica' : 'No Language Barriers'}
              </h3>
              <p className="text-gray-700">
                {language === 'it'
                  ? 'Non serve parlare inglese perfettamente. Forniamo supporto nella comunicazione e traduzioni quando necessario.'
                  : "You don't need perfect English. We provide communication support and translations when needed."
                }
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                {language === 'it' ? 'Clienti Pre-Qualificati' : 'Pre-Qualified Clients'}
              </h3>
              <p className="text-gray-700">
                {language === 'it'
                  ? 'Niente perdite di tempo. I clienti arrivano già informati, motivati e con aspettative realistiche.'
                  : 'No time wasters. Clients come already informed, motivated, and with realistic expectations.'
                }
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">📈</span>
                {language === 'it' ? 'Crescita del Fatturato' : 'Revenue Growth'}
              </h3>
              <p className="text-gray-700">
                {language === 'it'
                  ? 'I progetti internazionali hanno margini migliori. Diversifica la tua clientela e riduci la dipendenza dal mercato locale.'
                  : 'International projects have better margins. Diversify your client base and reduce dependence on the local market.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {language === 'it' ? 'Come Funziona' : 'How It Works'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'it' ? 'Registrati' : 'Register'}
              </h3>
              <p className="text-gray-700">
                {language === 'it'
                  ? 'Compila il form con i tuoi dati professionali. Verifica in 48 ore.'
                  : 'Fill the form with your professional details. Verification in 48 hours.'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'it' ? 'Ricevi Richieste' : 'Receive Requests'}
              </h3>
              <p className="text-gray-700">
                {language === 'it'
                  ? 'Ti contattiamo quando un cliente cerca i tuoi servizi nella tua zona.'
                  : 'We contact you when a client needs your services in your area.'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'it' ? 'Lavora e Guadagna' : 'Work and Earn'}
              </h3>
              <p className="text-gray-700">
                {language === 'it'
                  ? 'Fornisci il tuo servizio professionale. Pagamento garantito.'
                  : 'Provide your professional service. Payment guaranteed.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {language === 'it' ? 'Costi Trasparenti' : 'Transparent Pricing'}
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-green-600 mb-2">€0</div>
              <p className="text-xl text-gray-700">
                {language === 'it' ? 'Per iniziare' : 'To start'}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-green-600 text-xl mr-3">✓</span>
                <span className="text-gray-700">
                  {language === 'it' 
                    ? 'Registrazione gratuita per sempre'
                    : 'Free registration forever'
                  }
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 text-xl mr-3">✓</span>
                <span className="text-gray-700">
                  {language === 'it' 
                    ? 'Nessun abbonamento mensile'
                    : 'No monthly subscription'
                  }
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 text-xl mr-3">✓</span>
                <span className="text-gray-700">
                  {language === 'it' 
                    ? 'Commissione solo su affari conclusi (10-15%)'
                    : 'Commission only on closed deals (10-15%)'
                  }
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 text-xl mr-3">✓</span>
                <span className="text-gray-700">
                  {language === 'it' 
                    ? 'Servizi premium opzionali per maggiore visibilità'
                    : 'Optional premium services for increased visibility'
                  }
                </span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 text-center">
                {language === 'it'
                  ? '💡 Esempio: Su un incarico da €1.000, guadagni €850-900. Noi ci occupiamo di marketing, clienti e supporto.'
                  : '💡 Example: On a €1,000 job, you earn €850-900. We handle marketing, clients, and support.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {language === 'it' ? 'Storie di Successo' : 'Success Stories'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                {language === 'it'
                  ? "Grazie a PropertyPros ho aumentato il mio fatturato del 40%. I clienti stranieri apprezzano la professionalità e pagano puntualmente."
                  : "Thanks to PropertyPros, I increased my revenue by 40%. Foreign clients appreciate professionalism and pay on time."
                }
              </p>
              <p className="font-semibold">- Marco R., Geometra (Lecce)</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 italic">
                {language === 'it'
                  ? "Non parlo inglese ma questo non è un problema. Il team mi supporta nella comunicazione e i clienti sono sempre soddisfatti."
                  : "I don't speak English but it's not a problem. The team supports me with communication and clients are always satisfied."
                }
              </p>
              <p className="font-semibold">- Anna M., Architetto (Bari)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'it' 
              ? 'Unisciti alla Rete di Professionisti'
              : 'Join the Professional Network'
            }
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {language === 'it'
              ? 'Registrazione in 5 minuti. Approvazione in 48 ore. Nuovi clienti in una settimana.'
              : '5-minute registration. 48-hour approval. New clients within a week.'
            }
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200">
            {language === 'it' ? 'Registrati Ora' : 'Register Now'}
          </button>
        </div>
      </section>
    </>
  )
}
