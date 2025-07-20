import React, { useState } from 'react'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'tech', name: 'Technology' },
    { id: 'creative', name: 'Creative' },
    { id: 'business', name: 'Business' },
    { id: 'health', name: 'Healthcare' }
  ]

  const logos = [
    {
      id: 1,
      category: 'tech',
      title: 'TechFlow Solutions',
      description: 'AI-generated logo for a software company',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop&auto=format',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      category: 'creative',
      title: 'Creative Studio',
      description: 'Modern logo for a design agency',
      image: 'https://images.unsplash.com/photo-1561736288-f5e8f6a13a4b?w=400&h=400&fit=crop&auto=format',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      category: 'business',
      title: 'Global Enterprises',
      description: 'Professional logo for consulting firm',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&auto=format',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      category: 'health',
      title: 'MediCare Plus',
      description: 'Clean logo for healthcare provider',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&auto=format',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      id: 5,
      category: 'tech',
      title: 'DataSync Pro',
      description: 'Logo for data analytics platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&auto=format',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      category: 'creative',
      title: 'Artisan Collective',
      description: 'Artistic logo for creative community',
      image: 'https://images.unsplash.com/photo-1541960071727-c531398e7494?w=400&h=400&fit=crop&auto=format',
      gradient: 'from-yellow-500 to-red-500'
    },
    {
      id: 7,
      category: 'business',
      title: 'Summit Financial',
      description: 'Trustworthy logo for financial services',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop&auto=format',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      id: 8,
      category: 'health',
      title: 'Wellness Center',
      description: 'Calming logo for wellness brand',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop&auto=format',
      gradient: 'from-green-400 to-blue-400'
    }
  ]

  const filteredLogos = activeCategory === 'all' 
    ? logos 
    : logos.filter(logo => logo.category === activeCategory)

  return (
    <section id="gallery" className="py-20 font-sans">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Logo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Gallery</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            Explore thousands of AI-generated logos created for businesses across various industries
          </p>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredLogos.map((logo) => (
            <div
              key={logo.id}
              className="group relative overflow-hidden hover:scale-105 transform transition-all duration-300 cursor-pointer rounded-2xl shadow-lg bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800"
            >
              {/* Logo Image */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={logo.image}
                  alt={logo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${logo.gradient} opacity-40 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}></div>
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-neutral-900/80 rounded-full p-3 shadow-lg border border-neutral-200 dark:border-neutral-800">
                    <svg className="w-6 h-6 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Logo Info */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {logo.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {logo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Create Your Own?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses who have created their perfect logo with our AI technology
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Start Creating Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery