import React from 'react'
import { motion } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 font-sans relative overflow-hidden transition-all duration-700 ease-in-out">
      {/* Animated Lottie Video */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
          className="flex items-center justify-center w-full"
        >
          <DotLottieReact
            src="https://lottie.host/9e8f70f4-85f0-4642-bc1e-3a2e38a92567/bY3AmO0qgC.lottie"
            loop
            autoplay
            style={{ width: '100%', height: '100%', maxWidth: 600, maxHeight: 500 }}
          />
        </motion.div>
      </motion.div>
      {/* Animated Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start"
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
          Turn Any <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Idea</span> Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">Professional Logo</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl">
          Create high-quality logos fast with generative AI. 45+ styles. Vector output. No design skills needed.
        </p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg"
        >
          Generate My Logo
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero