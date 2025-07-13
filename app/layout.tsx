// PATH: app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { LanguageProvider } from './providers/language-provider';
import { LanguageSelector } from './components/language-selector';

const inter = Inter({ 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PropertyPros Puglia | Investitori Stranieri",
  description: "Piattaforma che connette professionisti locali qualificati con investitori stranieri interessati al mercato immobiliare pugliese.",
};

function Navigation() {
  return (
    <nav className="hidden md:flex space-x-6">
      <a href="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
        How it Works
      </a>
      <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
        About
      </a>
      <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
        Contact
      </a>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-50">
            {/* Professional header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center space-x-8">
                    {/* Logo/Brand - Professional */}
                    <a href="/" className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-xl text-gray-800">
                        PropertyPros Puglia
                      </span>
                    </a>
                    
                    <Navigation />
                  </div>
                  
                  {/* Right side - Language selector & Login */}
                  <div className="flex items-center space-x-4">
                    <LanguageSelector />
                    
                    {/* Login Button */}
                    <button className="bg-blue-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-900 transition-all duration-200">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </header>
            
            {/* Main content */}
            <main>
              {children}
            </main>
            
            {/* Professional Footer */}
            <footer className="bg-gray-800 text-gray-300 mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-white font-semibold mb-4">Information</h3>
                    <ul className="space-y-2">
                      <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                      <li><a href="/how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
                      <li><a href="/professional" className="hover:text-white transition-colors">For Professionals</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-4">Support</h3>
                    <ul className="space-y-2">
                      <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                      <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                      <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                      <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                      <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                      <li><a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                  <p className="text-sm">
                    © 2024 PropertyPros Puglia. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
