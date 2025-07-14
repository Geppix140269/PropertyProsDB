// components/home/UserTypeCards.tsx
'use client'

import { motion } from 'framer-motion'
import { Briefcase, Ruler } from 'lucide-react'

export default function UserTypeCards() {
  const cards = [
    {
      icon: <Briefcase className="w-10 h-10 text-orange-500" />,
      title: 'I Need a Survey',
      description:
        'Get quotes from verified surveyors for your property in Puglia.',
      features: [
        'Compare multiple quotes',
        'Secure messaging',
        'Protected payment',
      ],
    },
    {
      icon: <Ruler className="w-10 h-10 text-orange-500" />,
      title: 
        
        "I'm a Surveyor",
      description:
        'Join our network and receive project requests from buyers.',
      features: [
        'Free registration',
        '10% platform fee only',
        'Guaranteed payment',
      ],
    },
  ]

  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-light text-gray-900 mb-12">
          <strong className="font-bold">Choose</strong> your role
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl border border-gray-200 shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="mb-4 flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <ul className="text-sm text-left text-gray-700 space-y-2">
                {card.features.map((feature, i) => (
                  <li key={i} className="relative pl-6">
                    <span className="absolute left-0 top-1 text-green-500 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
