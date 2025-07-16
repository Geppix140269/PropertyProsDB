// PATH: app/components/sections/CTASection.tsx
export default function CTASection() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl font-bold mb-6">
          Ready to Start Your Puglia Property Journey?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Join thousands who have successfully invested in their dream Italian property
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/buyer/signup" className="bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-all">
            Get Started as Buyer
          </a>
          <a href="/professional/signup" className="bg-terracotta text-white px-8 py-4 rounded-lg font-semibold hover:bg-terracotta-dark transition-all">
            Register as Professional
          </a>
        </div>
      </div>
    </section>
  )
}
