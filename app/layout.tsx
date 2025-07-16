// PATH: app/layout.tsx
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import LoginButton from '@/app/components/LoginButton'
import LanguageSelector from '@/app/components/language-selector'
import ApulinkLogo from '@/app/components/ApulinkLogo'
import { LanguageProvider } from '@/app/providers/language-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Apulink - Professional Property Surveys in Puglia',
  description: 'Connect with certified geometri for professional property surveys, cadastral reports, and technical assessments in Puglia. Your eyes on the ground.',
  keywords: 'Puglia, property survey, geometra, surveyor, cadastral report, real estate, Italy, rilievi, catasto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            {/* Main Navigation Header */}
            <header className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                  {/* Official Apulink Logo */}
                  <ApulinkLogo size="md" />

                  {/* Navigation Links */}
                  <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/how-it-works" className="text-stone-600 hover:text-terracotta font-medium transition-colors">
                      How it Works
                    </Link>
                    <Link href="/about" className="text-stone-600 hover:text-terracotta font-medium transition-colors">
                      About
                    </Link>
                    <Link href="/contact" className="text-stone-600 hover:text-terracotta font-medium transition-colors">
                      Contact
                    </Link>
                  </nav>

                  {/* Right Side Actions */}
                  <div className="flex items-center space-x-4">
                    <LanguageSelector />
                    <LoginButton />
                  </div>
                </div>
              </div>
            </header>
            
            {/* Main content */}
            <main className="flex-1">
              {children}
            </main>
            
            {/* Professional Footer */}
            <footer className="bg-stone-800 text-stone-300 mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    {/* Footer Logo */}
                    <ApulinkLogo size="sm" className="mb-4" />
                    <p className="text-sm">
                      Professional property surveys in Puglia. Connecting international buyers with certified geometri.
                    </p>
                  </div>
                  
                  {/* Quick Links */}
                  <div>
                    <h3 className="font-semibold text-white mb-4">For Buyers</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/buyer/inquiry" className="hover:text-white transition-colors">Get a Survey</Link></li>
                      <li><Link href="/how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
                      <li><Link href="/survey-packages" className="hover:text-white transition-colors">Survey Types</Link></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-4">For Geometri</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/professional/signup" className="hover:text-white transition-colors">Join as Geometra</Link></li>
                      <li><Link href="/professional/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                      <li><Link href="/about" className="hover:text-white transition-colors">About Apulink</Link></li>
                    </ul>
                  </div>
                  
                  {/* Contact Info */}
                  <div>
                    <h3 className="font-semibold text-white mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm">
                      <li>hello@apulink.com</li>
                      <li>Bari, Puglia, Italy</li>
                    </ul>
                  </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-stone-700 mt-8 pt-8 text-sm text-center">
                  <p>&copy; 2025 Apulink. All rights reserved. Built with ❤️ in Puglia</p>
                </div>
              </div>
            </footer>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
