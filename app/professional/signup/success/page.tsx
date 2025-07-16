// PATH: app/professional/signup/success/page.tsx
'use client'
import { useLanguage } from '@/app/providers/language-provider'
import Link from 'next/link'
import SurvEYESMascot from '@/app/components/SurvEYESMascot'

export default function SignupSuccess() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <SurvEYESMascot size="lg" expression="happy" className="mx-auto mb-8" />
        
        <h1 className="font-playfair text-4xl font-bold text-navy mb-4">
          {language === 'en' ? 'Application Submitted Successfully!' : 'Candidatura Inviata con Successo!'}
        </h1>
        
        <p className="text-xl text-stone-600 mb-8">
          {language === 'en'
            ? 'Thank you for applying to join Apulink as a professional geometra. We will review your application and verify your credentials within 48 hours.'
            : 'Grazie per esserti candidato come geometra professionista su Apulink. Esamineremo la tua candidatura e verificheremo le tue credenziali entro 48 ore.'}
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="font-semibold text-lg mb-4">
            {language === 'en' ? 'What happens next?' : 'Cosa succede ora?'}
          </h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-terracotta font-semibold">1</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  {language === 'en' ? 'Credential Verification' : 'Verifica Credenziali'}
                </h3>
                <p className="text-sm text-stone-600">
                  {language === 'en'
                    ? 'We will verify your registration with the Collegio dei Geometri'
                    : 'Verificheremo la tua iscrizione presso il Collegio dei Geometri'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-terracotta font-semibold">2</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  {language === 'en' ? 'Profile Review' : 'Revisione Profilo'}
                </h3>
                <p className="text-sm text-stone-600">
                  {language === 'en'
                    ? 'Our team will review your experience and qualifications'
                    : 'Il nostro team esaminerà la tua esperienza e qualifiche'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-terracotta font-semibold">3</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  {language === 'en' ? 'Approval Email' : 'Email di Approvazione'}
                </h3>
                <p className="text-sm text-stone-600">
                  {language === 'en'
                    ? 'You will receive an email with your login credentials and next steps'
                    : 'Riceverai un email con le tue credenziali di accesso e i prossimi passi'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center text-terracotta font-semibold hover:underline"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {language === 'en' ? 'Return to Homepage' : 'Torna alla Homepage'}
        </Link>
      </div>
    </div>
  )
}
