import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20 font-sans">
      <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
        Turn Any <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Idea</span> Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">Professional Logo</span>
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl">
        Create high-quality logos fast with generative AI. 45+ styles. Vector output. No design skills needed.
      </p>
      <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
        Generate My Logo
      </button>
    </section>
  )
}

export default Hero