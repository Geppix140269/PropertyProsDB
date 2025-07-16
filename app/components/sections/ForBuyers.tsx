// PATH: app/components/sections/ForBuyers.tsx
export default function ForBuyers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
              For International Buyers
            </h2>
            <p className="text-lg text-stone-700 mb-8">
              Navigate the Italian property market with confidence. Our platform connects you with verified local professionals who speak your language and understand your needs.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terracotta mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Verified real estate agents, notaries, and surveyors</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terracotta mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure document sharing and translation services</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terracotta mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Step-by-step guidance through the purchase process</span>
              </li>
            </ul>
            <a href="/buyer/signup" className="inline-block bg-terracotta text-white px-6 py-3 rounded-lg font-semibold hover:bg-terracotta-dark transition-all">
              Start Your Journey
            </a>
          </div>
          <div className="bg-stone-100 h-96 rounded-lg flex items-center justify-center">
            <span className="text-stone-400">Property Image</span>
          </div>
        </d
