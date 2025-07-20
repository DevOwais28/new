import React, { useState, useEffect } from 'react'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-neutral-950/90 dark:bg-neutral-950/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    } font-sans`}> 
      <nav className="container mx-auto max-w-7xl h-20 px-4 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex items-center min-w-0">
          <a href="#" className="flex items-center gap-3 min-w-max">
            <span className="text-3xl font-extrabold tracking-tight text-white whitespace-nowrap">Orchid<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Logos</span></span>
          </a>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-neutral-200 hover:text-purple-400 transition font-medium text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Right side buttons */}
        <div className="flex-1 flex items-center justify-end gap-3 min-w-0">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Toggle dark mode"
            type="button"
          >
            {darkMode ? (
              <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-purple-400"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            ) : (
              <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-yellow-400"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
            )}
          </button>
          <button className="ml-2 px-4 py-2 rounded-lg border border-purple-500 text-purple-500 font-semibold hover:bg-purple-500 hover:text-white transition hidden md:block">Log in</button>
          <button className="px-4 py-2 rounded-lg bg-white text-neutral-900 font-semibold hover:bg-purple-500 hover:text-white transition border border-white hidden md:block">Sign up</button>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-800 transition-colors duration-200"
            aria-label="Toggle mobile menu"
            type="button"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          {/* Menu */}
          <div className="relative bg-neutral-950 w-full py-8 px-6 flex flex-col gap-4 shadow-2xl animate-fade-in-down rounded-2xl mx-2 mt-4 border border-neutral-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-200 hover:text-purple-400 transition font-medium text-xl py-3 text-center rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white"
              aria-label="Close menu"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header