import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-cyan-500 font-sans text-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-12 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Prove You’re the Original
        </motion.h1>
        <p className="text-lg md:text-xl mb-8">Secure your digital art with blockchain & biometrics</p>
        <button className="bg-cyan-500 px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition">
          Get Started
        </button>
      </section>

      {/* Particle background or animated particles */}
      {/* You can integrate particles.js or canvas animations here */}

      {/* Additional sections: How It Works, Technology, etc. */}
    </div>
  )
}