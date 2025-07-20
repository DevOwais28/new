import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Describe Your Vision',
      description: 'Tell us about your brand, industry, and style preferences. Our AI understands your unique requirements.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'AI Generates Options',
      description: 'Our advanced AI creates multiple professional logo variations based on your specifications in seconds.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Customize & Refine',
      description: 'Fine-tune colors, fonts, and layouts with our intuitive editor. Make it perfectly yours.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Download & Use',
      description: 'Get your logo in multiple formats (PNG, SVG, PDF) ready for web, print, and everything in between.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ]

  return (
    <section id="how-it-works" className="py-20 font-sans">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Works</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Create professional logos in four simple steps with our AI-powered platform
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="rounded-2xl bg-neutral-900 p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 text-white font-bold text-xl rounded-full mb-6">
                {step.step}
              </div>
              <div className="text-purple-400 mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
            Try It Now - It's Free
          </button>
          <p className="text-sm text-neutral-400 mt-4">
            No credit card required • Generate 3 logos for free
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks