// PATH: app/page.tsx
export default function HomePage() {
  return (
    <>
      {/* Hero Section - More professional, less startup-y */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Language Toggle */}
            <div className="mb-8">
              <span className="text-sm text-gray-600">🇮🇹 Italiano | 🇬🇧 English</span>
            </div>
            
            {/* Clear Value Proposition */}
            <div className="mb-12 p-6 bg-blue-50 rounded-lg max-w-3xl mx-auto">
              <p className="text-lg text-blue-900 font-medium">
                Piattaforma di Registrazione Fornitori Qualificati
              </p>
              <p className="text-md text-blue-800 mt-2">
                Qualified Supplier Registration Platform
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
              <span className="block">Diventa Fornitore Accreditato</span>
              <span className="block text-3xl md:text-4xl text-gray-700 mt-3">
                per Aziende Leader in Italia
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto font-light">
              Se sei un <strong>commercialista</strong>, <strong>architetto</strong>, <strong>ingegnere</strong>, 
              <strong>consulente</strong> o <strong>professionista</strong>, registrati per accedere a nuove opportunità 
              di business con aziende verificate.
            </p>
            
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto italic">
              For accountants, architects, engineers, consultants and professionals: 
              register to access new business opportunities with verified companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-900 transition-all duration-200">
                Inizia la Registrazione / Start Registration
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-lg font-medium border-2 border-gray-300 hover:border-gray-400 transition-all duration-200">
                Scopri di Più / Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is - Clear Explanation */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Cos&apos;è questa piattaforma? / What is this platform?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-800">🇮🇹 Per Professionisti Italiani</h3>
                <p className="text-gray-700 leading-relaxed">
                  Questa è una piattaforma esclusiva dove professionisti qualificati possono registrarsi 
                  come fornitori per grandi aziende e organizzazioni. Una volta verificate le vostre 
                  credenziali, potrete ricevere richieste di preventivo, partecipare a gare, e 
                  collaborare con clienti prestigiosi.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-800">🇬🇧 For Italian Professionals</h3>
                <p className="text-gray-700 leading-relaxed">
                  This is an exclusive platform where qualified professionals can register as suppliers 
                  for large companies and organizations. Once your credentials are verified, you can 
                  receive quote requests, participate in tenders, and collaborate with prestigious clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Register */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Chi Dovrebbe Registrarsi / Who Should Register
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                🏢 Commercialisti e Consulenti Fiscali
              </h3>
              <p className="text-gray-600">
                Studi professionali, dottori commercialisti, esperti contabili e consulenti del lavoro
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                🏗️ Architetti e Ingegneri
              </h3>
              <p className="text-gray-600">
                Studi di architettura, ingegneria civile, strutturale, impiantistica e progettazione
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                💼 Consulenti e Servizi Professionali
              </h3>
              <p className="text-gray-600">
                Consulenza aziendale, legale, IT, marketing, risorse umane e formazione
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Why Register */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Perché Registrarsi / Why Register
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Vantaggi per i Professionisti</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Accesso a grandi clienti corporate pre-verificati</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Partecipazione a gare e richieste di preventivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Pagamenti garantiti e termini chiari</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Nessun costo di intermediazione</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Professional Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Access to pre-verified corporate clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Participate in tenders and quote requests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Guaranteed payments and clear terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">No intermediation fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200 mt-1">Fornitori Verificati</div>
            </div>
            <div>
              <div className="text-3xl font-bold">€2M+</div>
              <div className="text-blue-200 mt-1">Valore Contratti</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-200 mt-1">Pagamenti Sicuri</div>
            </div>
            <div>
              <div className="text-3xl font-bold">48h</div>
              <div className="text-blue-200 mt-1">Verifica Rapida</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Inizia Oggi la Tua Registrazione
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            La registrazione richiede solo 10 minuti. Verifica entro 48 ore.
          </p>
          <p className="text-lg mb-10 text-gray-600 italic">
            Registration takes only 10 minutes. Verification within 48 hours.
          </p>
          <button className="bg-blue-800 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-200 text-lg">
            Registrati Ora / Register Now
          </button>
        </div>
      </section>
    </>
  )
}
