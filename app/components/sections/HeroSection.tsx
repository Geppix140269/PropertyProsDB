// PATH: app/components/sections/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-terracotta/10 via-white to-olive/10">
      <div className="absolute inset-0 bg-[url('/images/puglia-landscape.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-navy mb-6">
          Your Gateway to Puglia Property Investment
        </h1>
        <p className="text-xl text-stone-700 mb-8 max-w-2xl mx-auto">
          Connect with trusted local professionals for seamless property purchases in the heart of Italy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/buyer/signup" className="bg-terracotta text-white px-8 py-4 rounded-lg font-semibold hover:bg-terracotta-dark transition-all">
            I'm Looking to Buy
          </a>
          <a href="/professional/signup" className="bg-olive text-white px-8 py-4 rounded-lg font-semibold hover:bg-olive-dark transition-all">
            I'm a Local Professional
          </a>
        </div>
      </div>
    </section>
  )
}
