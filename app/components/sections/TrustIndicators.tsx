// PATH: app/components/sections/TrustIndicators.tsx
export default function TrustIndicators() {
  return (
    <section className="bg-white py-12 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-terracotta">500+</div>
            <div className="text-stone-600">Properties Sold</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-terracotta">50+</div>
            <div className="text-stone-600">Verified Professionals</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-terracotta">15+</div>
            <div className="text-stone-600">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-terracotta">98%</div>
            <div className="text-stone-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
