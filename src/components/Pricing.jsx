import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        '3 logo generations per month',
        'Basic customization',
        'PNG downloads',
        'Email support',
        'Commercial license'
      ],
      popular: false,
      buttonText: 'Get Started Free',
      buttonStyle: 'btn-secondary'
    },
    {
      name: 'Professional',
      description: 'Ideal for businesses and agencies',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Unlimited logo generations',
        'Advanced customization',
        'All file formats (PNG, SVG, PDF)',
        'Priority support',
        'Commercial license',
        'Brand kit access',
        'Vector editing tools'
      ],
      popular: true,
      buttonText: 'Start Free Trial',
      buttonStyle: 'btn-primary'
    },
    {
      name: 'Enterprise',
      description: 'For large teams and organizations',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Everything in Professional',
        'Team collaboration',
        'Brand guidelines generator',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced analytics'
      ],
      popular: false,
      buttonText: 'Contact Sales',
      buttonStyle: 'btn-secondary'
    }
  ]

  return (
    <section id="pricing" className="py-20 font-sans">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-2">
            <img src="https://img.icons8.com/color/48/000000/flower.png" alt="OrchidLogos" className="w-10 h-10 rounded-lg bg-white dark:bg-neutral-900 p-1" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Pricing</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-neutral-900 dark:text-neutral-100">
            Choose the perfect plan for your needs. All plans include commercial licensing.
          </p>
          {/* Billing Toggle */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className={`font-medium ${!isYearly ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500 dark:text-neutral-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-purple-600' : 'bg-neutral-300 dark:bg-neutral-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isYearly ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500 dark:text-neutral-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2 py-1 rounded-full">
                Save 17%
              </span>
            )}
          </motion.div>
        </div>
        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, type: 'spring', bounce: 0.2 }}
              className={`relative rounded-2xl p-8 h-full transition-all duration-300 shadow-lg bg-white/90 dark:bg-neutral-900/80 border ${
                plan.popular 
                  ? 'border-2 border-purple-500 shadow-2xl scale-105' 
                  : 'border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    Most Popular
                  </span>
                </motion.div>
              )}
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">{plan.name}</h3>
                <p className="text-neutral-900 dark:text-neutral-100 mb-6">
                  {plan.description}
                </p>
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 ml-2">
                    {plan.monthlyPrice === 0 ? 'forever' : isYearly ? '/year' : '/month'}
                  </span>
                  {isYearly && plan.monthlyPrice > 0 && (
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                      ${Math.round(plan.yearlyPrice / 12)}/month billed annually
                    </div>
                  )}
                </div>
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full ${plan.buttonStyle} mb-8`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
              {/* Features */}
              <div>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-900 dark:text-neutral-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* FAQ Section */}
        <div className="text-center mt-16">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Have questions about our pricing?
          </p>
          <a href="#faq" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
            Check our FAQ section
          </a>
        </div>
      </div>
    </section>
  )
}

export default Pricing