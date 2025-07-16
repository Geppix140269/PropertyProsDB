// PATH: app/components/home/Hero.tsx
export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 via-white to-sea/20"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-stone-700">Certified Geometri Network</span>
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-navy mb-6 leading-tight">
          Professional Property<br/>
          <span className="text-terracotta">Surveys in Puglia</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Get accurate property surveys, cadastral reports, and technical assessments from verified geometri. 
          Your eyes on the ground in Puglia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="/buyer/inquiry" className="group bg-terracotta text-white px-8 py-4 rounded-lg font-semibold hover:bg-terracotta-dark transition-all transform hover:scale-105 shadow-lg">
            I Need a Property Survey
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="/professional/signup" className="group bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-white transition-all transform hover:scale-105 shadow-lg">
            I am a Geometra
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-stone-600">Collegio dei Geometri Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-stone-600">Official Documentation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-stone-600">English Reports Available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
