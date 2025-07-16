// PATH: app/components/home/SurveyPackages.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'
import Link from 'next/link'

export default function SurveyPackages() {
  const { language } = useLanguage()

  const packages = [
    {
      id: 'basic',
      name: language === 'en' ? 'Basic Property Survey' : 'Rilievo Base',
      price: '€450',
      description: language === 'en' 
        ? 'Essential property assessment for informed decisions'
        : 'Valutazione essenziale per decisioni informate',
      features: [
        language === 'en' ? 'Visual property inspection' : 'Ispezione visiva della proprietà',
        language === 'en' ? 'Basic measurements' : 'Misurazioni di base',
        language === 'en' ? 'Photographic documentation' : 'Documentazione fotografica',
        language === 'en' ? 'Summary report (10-15 pages)' : 'Relazione riassuntiva (10-15 pagine)',
        language === 'en' ? 'Cadastral verification' : 'Verifica catastale',
      ],
      turnaround: language === 'en' ? '3-5 business days' : '3-5 giorni lavorativi',
      popular: false
    },
    {
      id: 'comprehensive',
      name: language === 'en' ? 'Comprehensive Survey' : 'Rilievo Completo',
      price: '€750',
      description: language === 'en' 
        ? 'Detailed analysis for serious buyers'
        : 'Analisi dettagliata per acquirenti seri',
      features: [
        language === 'en' ? 'Everything in Basic' : 'Tutto incluso nel Base',
        language === 'en' ? 'Detailed measurements & floor plans' : 'Misurazioni dettagliate e planimetrie',
        language === 'en' ? 'Structural assessment' : 'Valutazione strutturale',
        language === 'en' ? 'Building compliance check' : 'Verifica conformità edilizia',
        language === 'en' ? 'Energy efficiency evaluation' : 'Valutazione efficienza energetica',
        language === 'en' ? 'Detailed report (25-30 pages)' : 'Relazione dettagliata (25-30 pagine)',
      ],
      turnaround: language === 'en' ? '5-7 business days' : '5-7 giorni lavorativi',
      popular: true
    },
    {
      id: 'premium',
      name: language === 'en' ? 'Premium Due Diligence' : 'Due Diligence Premium',
      price: '€1,200',
      description: language === 'en' 
        ? 'Complete peace of mind for your investment'
        : 'Tranquillità completa per il tuo investimento',
      features: [
        language === 'en' ? 'Everything in Comprehensive' : 'Tutto incluso nel Completo',
        language === 'en' ? 'Legal documentation review' : 'Revisione documentazione legale',
        language === 'en' ? 'Historical property research' : 'Ricerca storica proprietà',
        language === 'en' ? 'Renovation cost estimates' : 'Stima costi ristrutturazione',
        language === 'en' ? 'Video walkthrough' : 'Video tour della proprietà',
        language === 'en' ? 'Executive report (40+ pages)' : 'Relazione esecutiva (40+ pagine)',
        language === 'en' ? 'Post-survey consultation' : 'Consultazione post-rilievo',
      ],
      turnaround: language === 'en' ? '7-10 business days' : '7-10 giorni lavorativi',
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">
            {language === 'en' ? 'Survey Packages' : 'Pacchetti Rilievo'}
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Choose the right level of detail for your property investment needs'
              : 'Scegli il livello di dettaglio giusto per le tue esigenze di investimento'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 ${
                pkg.popular ? 'ring-2 ring-terracotta' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-terracotta text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {language === 'en' ? 'Most Popular' : 'Più Popolare'}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl font-semibold text-navy mb-2">
                  {pkg.name}
                </h3>
                <p className="text-stone-600 mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-terracotta">{pkg.price}</div>
                <p className="text-sm text-stone-500 mt-1">
                  {language === 'en' ? 'Starting from' : 'A partire da'}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-stone-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t pt-6">
                <p className="text-sm text-stone-500 mb-4">
                  <span className="font-medium">{language === 'en' ? 'Turnaround:' : 'Tempi:'}</span> {pkg.turnaround}
                </p>
                <Link
                  href="/buyer/inquiry"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-terracotta text-white hover:bg-terracotta/90'
                      : 'bg-stone-100 text-navy hover:bg-stone-200'
                  }`}
                >
                  {language === 'en' ? 'Get Started' : 'Inizia Ora'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-600 mb-4">
            {language === 'en'
              ? 'Need something specific? We can customize a package for your needs.'
              : 'Hai bisogno di qualcosa di specifico? Possiamo personalizzare un pacchetto per le tue esigenze.'}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-terracotta font-semibold hover:underline"
          >
            {language === 'en' ? 'Contact us for custom surveys' : 'Contattaci per rilievi personalizzati'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
