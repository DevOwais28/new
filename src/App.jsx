import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FeatureSection from './components/FeatureSection';
import LogoWall from './components/LogoWall';
import ProductOverviewSection from './components/ProductOverviewSection';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200) // Simulate loading
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-neutral-950">
        <DotLottieReact
          src="https://lottie.host/1e2e7b7b-2b2e-4e7e-8e2e-7b7b2b2e4e7e/loader.lottie"
          autoplay
          loop
          style={{ width: 120, height: 120 }}
        />
      </div>
    )
  }

  return (
    <div className="font-sans min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex flex-col items-center w-full px-2 sm:px-4 pt-20 sm:pt-24">
        <div className="w-full max-w-7xl">
          <Hero />
          <ProductOverviewSection />
          {/* Feature Highlights */}
          <FeatureSection
            title="Convert any 2D logo or image into a striking 3D illustration"
            description="Upload your 2D artwork, icon, or logo, giving your social media, website, or ads a fresh look."
            image="https://img.icons8.com/3d-fluency/256/000000/artificial-intelligence.png"
            buttonText="See how it works"
            buttonLink="#"
            reverse={false}
          />
          <FeatureSection
            title="Transfer the style of any image to your logo!"
            description="Got a specific style you want? Style Transfer gives you complete control over both the style and composition."
            image="https://img.icons8.com/3d-fluency/256/000000/paint-palette.png"
            buttonText="See how it works"
            buttonLink="#"
            reverse={true}
          />
          <FeatureSection
            title="Upscale your images up to 4x while enhancing details."
            description="Upscale and enhance your images for high-resolution downloads and beautiful details."
            image="https://img.icons8.com/3d-fluency/256/000000/medal.png"
            buttonText="See how it works"
            buttonLink="#"
            reverse={false}
          />
          {/* Logo Wall */}
          <LogoWall />
          {/* Gallery and other sections */}
          <Gallery />
          <HowItWorks />
          <Pricing />
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App