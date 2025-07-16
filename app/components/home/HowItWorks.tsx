// PATH: app/components/home/HowItWorks.tsx
export default function HowItWorks() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            How Our Survey Process Works
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            From request to report in just a few days
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative text-center">
            <div className="w-20 h-20 bg-terracotta text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Submit Request</h3>
            <p className="text-stone-600 text-sm">
              Tell us about the property you need surveyed and select your package
            </p>
            {/* Arrow */}
            <div className="hidden md:block absolute top-10 -right-4 text-stone-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative text-center">
            <div className="w-20 h-20 bg-olive text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Get Matched</h3>
            <p className="text-stone-600 text-sm">
              We connect you with a verified geometra in your property area
            </p>
            {/* Arrow */}
            <div className="hidden md:block absolute top-10 -right-4 text-stone-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative text-center">
            <div className="w-20 h-20 bg-sea text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Survey Conducted</h3>
            <p className="text-stone-600 text-sm">
              Professional on-site inspection and documentation gathering
            </p>
            {/* Arrow */}
            <div className="hidden md:block absolute top-10 -right-4 text-stone-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg mb-2">Receive Report</h3>
            <p className="text-stone-600 text-sm">
              Comprehensive report with photos, measurements, and recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
