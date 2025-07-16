// PATH: app/professional/signup/page.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProfessionalSignupPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<'it' | 'en'>('it')

  const handleExistingUser = () => {
    router.push('/professional/dashboard')
  }

  const handleNewRegistration = () => {
    router.push('/professional/register')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-terracotta/5 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div 
              onClick={() => router.push('/')}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-stone-800">Apulink</span>
            </div>
            
            <button 
              onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
              className="flex items-center space-x-2 text-stone-600 hover:text-terracotta font-medium"
            >
              <span className="text-xl">{language === 'it' ? '🇮🇹' : '🇬🇧'}</span>
              <span>{language === 'it' ? 'English' : 'Italiano'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl font-bold text-stone-800 mb-6">
            {language === 'it' 
              ? 'Accedi al Network Professionale'
              : 'Access Professional Network'
            }
          </h1>
          
          <p className="text-xl text-stone-600 mb-12">
            {language === 'it'
              ? 'Unisciti alla rete di professionisti leader in Puglia per servizi immobiliari di qualità.'
              : 'Join the leading network of professionals in Puglia for quality real estate services.'
            }
          </p>

          {/* Login Options */}
          <div className="space-y-6">
            {/* Existing User */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-stone-200">
              <h2 className="font-playfair text-2xl font-semibold text-stone-800 mb-4">
                {language === 'it' ? 'Hai già un account?' : 'Already have an account?'}
              </h2>
              <p className="text-stone-600 mb-6">
                {language === 'it'
                  ? 'Accedi al tuo dashboard professionale per gestire le richieste e i clienti.'
                  : 'Access your professional dashboard to manage requests and clients.'
                }
              </p>
              <button
                onClick={handleExistingUser}
                className="w-full bg-terracotta text-white py-3 px-6 rounded-lg font-semibold hover:bg-terracotta-dark transition-all duration-200"
              >
                {language === 'it' ? 'Accedi al Dashboard' : 'Access Dashboard'}
              </button>
            </div>

            {/* New Registration */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-stone-200">
              <h2 className="font-playfair text-2xl font-semibold text-stone-800 mb-4">
                {language === 'it' ? 'Nuovo Professionista?' : 'New Professional?'}
              </h2>
              <p className="text-stone-600 mb-6">
                {language === 'it'
                  ? 'Registrati gratuitamente e inizia a ricevere richieste da clienti internazionali.'
                  : 'Register for free and start receiving requests from international clients.'
                }
              </p>
              <button
                onClick={handleNewRegistration}
                className="w-full bg-sea text-white py-3 px-6 rounded-lg font-semibold hover:bg-sea-dark transition-all duration-200"
              >
                {language === 'it' ? 'Registrati Gratuitamente' : 'Register for Free'}
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-12 pt-8 border-t border-stone-200">
            <h3 className="font-playfair text-xl font-semibold text-stone-800 mb-6">
              {language === 'it' ? 'Perché Scegliere Apulink?' : 'Why Choose Apulink?'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-terracotta/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-terracotta text-lg">🌍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">
                    {language === 'it' ? 'Clienti Internazionali' : 'International Clients'}
                  </h4>
                  <p className="text-sm text-stone-600">
                    {language === 'it' ? 'Accesso diretto a investitori esteri' : 'Direct access to foreign investors'}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-sea/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sea text-lg">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">
                    {language === 'it' ? 'Opportunità Verificate' : 'Verified Opportunities'}
                  </h4>
                  <p className="text-sm text-stone-600">
                    {language === 'it' ? 'Solo clienti qualificati e verificati' : 'Only qualified and verified clients'}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-olive/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-olive text-lg">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">
                    {language === 'it' ? 'Commissioni Eque' : 'Fair Commissions'}
                  </h4>
                  <p className="text-sm text-stone-600">
                    {language === 'it' ? 'Pagamento solo a successo' : 'Payment only on success'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
