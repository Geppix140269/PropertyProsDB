// PATH: app/components/sections/ForProfessionals.tsx
export default function ForProfessionals() {
  return (
    <section className="py-20 bg-olive/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-stone-100 h-96 rounded-lg flex items-center justify-center order-2 md:order-1">
            <span className="text-stone-400">Professional Image</span>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-6">
              For Local Professionals
            </h2>
            <p className="text-lg text-stone-700 mb-8">
              Expand your client base internationally. Connect with foreign investors looking for trusted professionals to guide their property purchases in Puglia.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-olive mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to international clients</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-olive mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure payment processing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-olive mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Professional profile and ratings system</span>
              </li>
            </ul>
            <a href="/professional/signup" className="inline-block bg-olive text-white px-6 py-3 rounded-lg font-semibold hover:bg-olive-dark transition-all">
              Join Our Network
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
