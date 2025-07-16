// PATH: app/layout.tsx
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import LoginButton from './components/LoginButton'
import LanguageSelector from './components/LanguageSelector'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Apulink - Your Eyes on the Ground in Puglia',
  description: 'Expert surveys, legal reviews, and renovation estimates without stepping on a plane. Connect with trusted professionals in Puglia.',
  keywords: 'Puglia, property survey, real estate, Italy, geometra, surveyor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          {/* Main Navigation Header */}
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-terracotta to-sea rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <span className="font-playfair text-2xl font-bold text-stone-800">Apulink</span>
                </Link>

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
                  <h3 className="font-playfair text-2xl text-terracotta mb-4">Apulink</h3>
                  <p className="text-sm">
                    Your trusted bridge to property investment in Puglia. Connecting worlds, building futures.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4">For Buyers</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/buyer" className="hover:text-terracotta transition-colors">Request Survey</Link></li>
                    <li><Link href="/how-it-works" className="hover:text-terracotta transition-colors">How it Works</Link></li>
                    <li><Link href="/buyer/dashboard" className="hover:text-terracotta transition-colors">My Dashboard</Link></li>
                    <li><Link href="/contact" className="hover:text-terracotta transition-colors">Support</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4">For Professionals</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/professional" className="hover:text-terracotta transition-colors">Join Network</Link></li>
                    <li><Link href="/professional/signup" className="hover:text-terracotta transition-colors">Sign Up</Link></li>
                    <li><Link href="/professional/dashboard" className="hover:text-terracotta transition-colors">Dashboard</Link></li>
                    <li><Link href="/professional/resources" className="hover:text-terracotta transition-colors">Resources</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4">Company</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/about" className="hover:text-terracotta transition-colors">About Us</Link></li>
                    <li><Link href="/contact" className="hover:text-terracotta transition-colors">Contact</Link></li>
                    <li><Link href="/privacy" className="hover:text-terracotta transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="hover:text-terracotta transition-colors">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-stone-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                  © 2024 Apulink. All rights reserved.
                </p>
                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                  <span className="text-sm">🇮🇹 Proudly serving Puglia</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
