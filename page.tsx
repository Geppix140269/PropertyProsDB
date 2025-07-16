// PATH: app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="font-playfair text-5xl font-bold text-center mb-8">
          Welcome to Apulink
        </h1>
        <p className="text-xl text-center text-stone-600">
          Your Bridge to Puglia Property Investment
        </p>
        <div className="mt-12 text-center">
          <a href="/buyer" className="bg-terracotta text-white px-8 py-4 rounded-lg font-semibold hover:bg-terracotta-dark inline-block mr-4">
            I'm a Buyer
          </a>
          <a href="/professional" className="bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-dark inline-block">
            I'm a Professional
          </a>
        </div>
      </div>
    </div>
  )
}
