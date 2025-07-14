/* PATH: app/components/home/HowItWorks.tsx */
import { motion } from 'framer-motion';

const stepsBuyer = [
  { title: 'Submit Request', desc: 'Tell us what you need and where.' },
  { title: 'Receive Quotes', desc: 'Get quotes from verified professionals.' },
  { title: 'Message & Choose', desc: 'Ask questions before you choose.' },
  { title: 'Pay & Connect', desc: 'Pay securely and unlock contact details.' },
];

const stepsSurveyor = [
  { title: 'Register Free', desc: 'Create your profile and choose areas.' },
  { title: 'Receive Requests', desc: 'Get notified of matching projects.' },
  { title: 'Send Quotes', desc: 'Send offers and answer questions.' },
  { title: 'Get Paid', desc: 'Get paid after buyer selects you.' },
];

export default function HowItWorks() {
  return (
    <section className="bg-stone-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-playfair font-semibold gradient-text fade-in">
          How It <span className="font-black">Works</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Buyer Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white card-modern"
        >
          <h3 className="text-terracotta font-bold text-lg mb-6">For Buyers</h3>
          <ol className="space-y-6">
            {stepsBuyer.map((step, i) => (
              <li key={i} className="relative pl-10">
                <div className="absolute left-0 top-1 text-white bg-terracotta rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="font-semibold text-stone-800 mb-1">{step.title}</p>
                <p className="text-sm text-stone-600">{step.desc}</p>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Surveyor Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white card-modern"
        >
          <h3 className="text-sea font-bold text-lg mb-6">For Surveyors</h3>
          <ol className="space-y-6">
            {stepsSurveyor.map((step, i) => (
              <li key={i} className="relative pl-10">
                <div className="absolute left-0 top-1 text-white bg-sea rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="font-semibold text-stone-800 mb-1">{step.title}</p>
                <p className="text-sm text-stone-600">{step.desc}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
