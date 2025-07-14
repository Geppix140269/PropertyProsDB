// components/home/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-orange-500 text-white py-24 px-6 sm:px-12 lg:px-20">
      <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-spin-slow" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full text-sm font-semibold shadow-md mb-6 animate-pulse">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-ping"></span>
          Verified Local Surveyors
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-4 text-shadow-md"
        >
          <strong className="font-bold">Your Survey</strong> is in good hands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Get multiple quotes from verified local surveyors. Pay securely. Choose with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/buyer/request"
            className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition transform"
          >
            Request a Survey
          </Link>
          <Link
            href="/professional/register"
            className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition"
          >
            Register as Surveyor
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
