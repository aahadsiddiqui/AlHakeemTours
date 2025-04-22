'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [selectedCities, setSelectedCities] = React.useState<string[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const cities = ['Ottawa', 'Toronto', 'Vancouver'];
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [state, handleSubmit] = useForm("xgvkekao");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleCityToggle = (city: string) => {
    setSelectedCities(prev => 
      prev.includes(city) 
        ? prev.filter(c => c !== city)
        : [...prev, city]
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-end items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100/10 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t"
            >
              <nav className="container mx-auto px-4 py-4">
                <ul className="space-y-4">
                  {cities.map((city) => (
                    <motion.li
                      key={city}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="text-gray-800 hover:text-sky-500 transition-colors"
                    >
                      {city}
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 px-4 md:px-8 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text & Form */}
            <div className="w-full max-w-xl mx-auto lg:mx-0">
              {/* Title Box */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-sky-500/20 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 mb-6 hover:bg-sky-500/30 transition-colors"
              >
                <h2 className="text-lg sm:text-xl text-sky-400 font-medium">SHAYKH</h2>
                <h1 className="text-2xl sm:text-3xl text-white font-bold">ASSIM ALHAKEEM</h1>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider hover:text-sky-100 transition-colors"
              >
                UNITED
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl sm:text-3xl text-sky-400 font-medium mb-8 hover:text-sky-300 transition-colors"
              >
                FOR ORPHANS
              </motion.h2>

              {/* Cities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 sm:gap-6 mb-8"
              >
                {cities.map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="text-lg sm:text-xl text-white font-medium hover:text-sky-400 transition-colors cursor-default"
                  >
                    {city.toUpperCase()}
                  </motion.div>
                ))}
              </motion.div>

              {/* Announcement Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-sky-500/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-sky-500/20"
              >
                <div className="flex items-start gap-3">
                  <svg 
                    className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-white text-sm sm:text-base font-medium">
                      Dates and locations will be announced in the coming days — stay tuned!
                    </p>
                    <p className="text-sky-400/80 text-xs sm:text-sm mt-1">
                      Register now to receive updates directly in your inbox
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Registration Form */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 hover:bg-white/15 transition-colors"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Register Now</h2>
                {state.succeeded ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white text-center py-8"
                  >
                    <p className="text-xl font-medium mb-2">Thank you for registering!</p>
                    <p className="text-sm opacity-80">We'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="Enter your full name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-red-400 text-sm" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="Enter your email"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-red-400 text-sm" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="Enter your phone number"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1 text-red-400 text-sm" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Select Cities to Attend
                      </label>
                      <div className="space-y-3">
                        {cities.map((city) => (
                          <label key={city} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              name="cities[]"
                              value={city}
                              checked={selectedCities.includes(city)}
                              onChange={() => handleCityToggle(city)}
                              className="w-5 h-5 rounded border-white/30 bg-white/20 text-sky-500 focus:ring-2 focus:ring-sky-500 cursor-pointer"
                            />
                            <span className="text-white select-none">{city}</span>
                          </label>
                        ))}
                      </div>
                      <ValidationError prefix="Cities" field="cities" errors={state.errors} className="mt-1 text-red-400 text-sm" />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-sky-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-sky-600 transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? 'Submitting...' : 'Register Now'}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[800px] rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0 w-full max-w-2xl"
            >
              <Image
                src="/teaser.png"
                alt="Sheikh Assim AlHakeem"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website URL Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-sky-500/20 backdrop-blur-sm py-4 text-center hover:bg-sky-500/30 transition-colors"
      >
        <p className="text-white text-base sm:text-lg">www.alhakeemtour.ca</p>
      </motion.div>
    </main>
  );
} 