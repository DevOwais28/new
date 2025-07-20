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
        ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    } font-sans`}> 
      <nav className="container mx-auto max-w-7xl h-20 px-4 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex items-center min-w-0">
          <a href="#" className="flex items-center gap-3 min-w-max">
            <img src="https://img.icons8.com/color/48/000000/flower.png" alt="OrchidLogos" className="w-8 h-8 rounded-lg bg-white dark:bg-neutral-900 p-1" />
            <span className="text-3xl font-extrabold tracking-tight whitespace-nowrap text-neutral-900 dark:text-white">
              Orchid<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Logos</span>
            </span>
          </a>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition font-medium text-lg text-neutral-900 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400"
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
            className="rounded-full p-2 transition hover:bg-neutral-200 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Toggle dark mode"
            type="button"
          >
            {darkMode ? (
              <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-purple-400"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            ) : (
              <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-yellow-400"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
            )}
          </button>
          <button className="ml-2 px-4 py-2 rounded-lg border border-purple-500 text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition hidden md:block bg-transparent dark:bg-transparent">Log in</button>
          <button className="px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-semibold hover:bg-purple-500 hover:text-white transition border border-neutral-300 dark:border-neutral-700 hidden md:block">Sign up</button>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200"
            aria-label="Toggle mobile menu"
            type="button"
          >
            <svg className="w-6 h-6 text-neutral-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          {/* Menu */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white dark:bg-neutral-950 py-4 px-3 flex flex-col gap-2 shadow-2xl rounded-xl border border-neutral-200 dark:border-neutral-800 w-64 max-w-[calc(100vw-2rem)]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition font-medium text-base py-2 text-center rounded-lg text-neutral-900 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-2 mt-2 pt-2 border-t border-neutral-200 dark:border-neutral-700">
              <button className="flex-1 px-3 py-2 rounded-lg border border-purple-500 text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition bg-transparent text-sm">
                Log in
              </button>
              <button className="flex-1 px-3 py-2 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition text-sm">
                Sign up
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-2 right-2 p-1 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white transition"
              aria-label="Close menu"
              type="button"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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