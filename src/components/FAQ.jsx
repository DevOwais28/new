import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null)

  const faqs = [
    {
      question: 'How does AI logo generation work?',
      answer: 'Our AI uses advanced machine learning algorithms trained on millions of professional logos to understand design principles, color theory, and brand aesthetics. When you provide your requirements, the AI generates unique logo concepts tailored to your specifications.'
    },
    {
      question: 'Do I own the rights to my generated logo?',
      answer: 'Yes! All our plans include full commercial licensing. Once you download your logo, you own complete rights to use it for your business, marketing materials, products, and any commercial purposes without any restrictions.'
    },
    {
      question: 'Can I modify the generated logos?',
      answer: 'Absolutely! Our platform includes built-in editing tools for colors, fonts, and layouts. For Professional and Enterprise plans, you also get access to vector editing capabilities and can download editable SVG files.'
    },
    {
      question: 'What file formats do you provide?',
      answer: 'Free users get PNG files, while paid plans include PNG, SVG, PDF, and other formats. SVG files are vector-based, meaning they can be scaled to any size without losing quality - perfect for everything from business cards to billboards.'
    },
    {
      question: 'How quickly can I get my logo?',
      answer: 'Logo generation is instant! Our AI creates multiple logo options in seconds. The only time needed is for you to review, customize, and download your chosen design.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied with our service, contact us within 30 days for a full refund. Free users can always try our service risk-free.'
    },
    {
      question: 'Can I use the logo for my team or clients?',
      answer: 'Yes! Professional and Enterprise plans support team collaboration. You can share logos with team members and, with proper licensing, use them for client projects. Enterprise plans include multi-user access and team management features.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'We provide email support for all users, priority support for Professional subscribers, and dedicated account management for Enterprise customers. Our team is here to help with any questions or technical issues.'
    }
  ]

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <motion.section
      id="faq"
      className="py-20 font-sans"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-2">
            <img src="https://img.icons8.com/color/48/000000/flower.png" alt="OrchidLogos" className="w-10 h-10 rounded-lg bg-white dark:bg-neutral-900 p-1" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Questions</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-neutral-900 dark:text-neutral-100">
            Everything you need to know about NestLogos and our AI-powered logo generation
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="rounded-xl bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow p-6 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-950 px-0 py-0"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold pr-4 text-neutral-900 dark:text-neutral-100">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-neutral-500 dark:text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                        openItem === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openItem === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                >
                  <p className="text-neutral-900 dark:text-neutral-100 leading-relaxed">
                    {faq.answer}
                  </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center mt-16"
          >
            <div className="rounded-2xl p-8 bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                Still have questions?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-neutral-900 dark:text-neutral-100">
                Our support team is here to help you create the perfect logo for your brand
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-bold text-lg shadow-lg"
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default FAQ