// PATH: app/page.tsx
export default function HomePage() {
  return (
    <>
      {/* Hero Section - Clear Value Proposition */}
      <section className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🔗 Un Ponte tra Professionisti Locali<br />
              e Investitori Stranieri Seri
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Mettiamo in contatto investitori stranieri affidabili con professionisti 
              locali qualificati in tutta la Puglia
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200">
              Candidati Ora
            </button>
          </div>
        </div>
      </section>

      {/* What is this platform */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            🤝 Cos&apos;è questa piattaforma
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              La nostra piattaforma nasce con un obiettivo preciso: <strong>mettere in contatto 
              investitori stranieri affidabili con professionisti locali qualificati</strong> in 
              tutta la Puglia.
            </p>
            <p className="mb-6">
              Ogni anno, sempre più persone dall&apos;estero vogliono comprare, ristrutturare o 
              valorizzare immobili in Italia — soprattutto nel Sud. Ma si scontrano con burocrazia, 
              sfiducia e difficoltà nel trovare fornitori seri.
            </p>
            <p className="text-xl font-bold text-blue-800">
              Noi risolviamo questo problema.
            </p>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            🎯 A chi è rivolta
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Cerchiamo e selezioniamo professionisti che lavorano in modo trasparente, 
            professionale e vogliono <strong>espandere la propria clientela con clienti 
            stranieri prequalificati</strong>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Professionisti Tecnici</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Geometri</li>
                <li>• Architetti</li>
                <li>• Ingegneri</li>
                <li>• Periti</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Professionisti Legali</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Avvocati</li>
                <li>• Notai</li>
                <li>• Commercialisti</li>
                <li>• Consulenti fiscali</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Servizi Immobiliari</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Agenzie immobiliari</li>
                <li>• Imprese edili</li>
                <li>• Esperti in bandi</li>
                <li>• Consulenti immobiliari</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            🌍 Perché funziona
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-6">
              Gli investitori esteri si rivolgono a noi <strong>prima di comprare un immobile</strong>, perché:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">vogliono capire <strong>a chi affidarsi</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">non parlano italiano</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">vogliono un riferimento fidato che li accompagni in tutto il percorso</span>
              </li>
            </ul>
            <p className="text-lg text-gray-800 font-semibold">
              Noi li guidiamo passo dopo passo, li aiutiamo a evitare errori, e 
              <strong className="text-blue-800"> li mettiamo in contatto diretto solo con professionisti verificati.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            ✅ Cosa offriamo ai professionisti
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visibilità internazionale</h3>
                  <p className="text-gray-700">Accesso a clienti internazionali pronti a investire</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Contatti prequalificati</h3>
                  <p className="text-gray-700">Clienti selezionati e verificati da noi</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Nessun costo di iscrizione</h3>
                  <p className="text-gray-700">Registrazione completamente gratuita</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Sistema meritocratico</h3>
                  <p className="text-gray-700">Basato su reputazione, qualità e trasparenza</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Opportunità flessibili</h3>
                  <p className="text-gray-700">Incarichi individuali o team multidisciplinari</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Supporto continuo</h3>
                  <p className="text-gray-700">Assistenza nella comunicazione con clienti stranieri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we ask */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            📌 Cosa chiediamo
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700 text-lg">Serietà e disponibilità</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700 text-lg">Una breve presentazione professionale</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700 text-lg">Eventuali referenze o lavori svolti</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700 text-lg">Rispetto delle tempistiche e della comunicazione</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            📬 Vuoi far parte della rete?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Se credi nel tuo lavoro, nella qualità del tuo servizio e vuoi lavorare con 
            clienti stranieri che apprezzano la professionalità, allora sei nel posto giusto.
          </p>
          <p className="text-2xl font-bold mb-10">
            Candidati oggi stesso e inizia a far parte della nostra rete di fiducia.
          </p>
          <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200">
            📎 Compila il Modulo di Iscrizione
          </button>
        </div>
      </section>
    </>
  )
}
