'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: '',
    message: ''
  });

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xgvkekao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          enquiryType: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Banner */}
      <div className="w-full bg-slate-900">
        <div className="relative w-full h-[90vh] max-h-[910px] max-w-[1920px] mx-auto">
          <Image
            src="/teaser.jpg"
            alt="Sheikh Assim Al Hakeem Canada Tour"
            fill
            className="object-contain"
            priority
            quality={100}
          />
        </div>
      </div>

      {/* Hero Text */}
      <div className="bg-gradient-to-b from-slate-900/95 to-slate-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Sheikh Assim Al Hakeem Canada Wide Tour
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl text-sky-400"
            >
              United For Orphans Tour – May 2025
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto text-white space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">In support of Orphans</h2>
            <p className="text-lg leading-relaxed">
              After inspiring audiences around the world, we are honoured to welcome back Sheikh Assim Al Hakeem to Canada this Dhul Hijjah — a time of immense spiritual reward and reflection.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              There'll be uplifting reminders about the virtues of Dhul Hijjah & Orphans, open Q&A sessions where you can ask what's on your mind, and a chance to meet Sheikh Assim in person, take a photo, and have a real conversation. It's more than just an event—it's a chance to gather as a community, reflect, and grow together in faith.
            </p>
          </div>

          {/* Event Links */}
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/ottawa.jpg"
                  alt="Ottawa Event"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Ottawa</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sky-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-medium">May 25th</p>
                  </div>
                  <div className="flex items-center text-sky-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-medium">5:00 PM - 9:00 PM</p>
                  </div>
                  <div className="flex items-center text-sky-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="font-medium">Blu Legacy Convention Centre</p>
                  </div>
                  <p className="text-sm text-gray-400">North Bowesville Road, Ottawa, ON, Canada</p>
                </div>
                <motion.a
                  href="https://simpli.events/e/ottawa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/toronto.jpg"
                  alt="Toronto Event"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Toronto</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sky-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-medium">May 30th</p>
                  </div>
                  <div className="flex items-center text-sky-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-medium">5:00 PM - 9:00 PM</p>
                  </div>
                  <div className="flex items-center text-sky-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="font-medium">Queen's Manor Event Centre</p>
                  </div>
                  <p className="text-sm text-gray-400">Auction Lane, Brampton, ON, Canada</p>
                </div>
                <motion.a
                  href="https://simpli.events/e/torontomay30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/vancouver.jpg"
                  alt="Vancouver Event"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Vancouver</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sky-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-medium">June 1st</p>
                  </div>
                  <div className="flex items-center text-sky-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-medium">5:00 PM - 9:00 PM</p>
                  </div>
                  <div className="flex items-center text-sky-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="font-medium">Taj Park Convention Centre</p>
                  </div>
                  <p className="text-sm text-gray-400">132 Street, Surrey, BC, Canada</p>
                </div>
                <motion.a
                  href="https://simpli.events/e/Vancouverjune1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Collaborations */}
          <div className="text-center py-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12">In Collaborations With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.a
                href="https://www.unitedmuslimfund.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-b from-slate-700/30 to-slate-800/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all p-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-32 md:h-40 bg-white/[0.15] rounded-xl p-4">
                  <Image
                    src="/logo.png"
                    alt="United Muslim Fund Logo"
                    fill
                    className="object-contain p-2"
                    quality={100}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-sky-400">United Muslim Fund</h3>
                  <p className="text-sm text-gray-300 mt-2">Supporting communities through sustainable development and immediate relief</p>
                  <div className="flex items-center justify-center mt-4 text-sky-400">
                    <span className="text-sm font-medium">Visit Website</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://schooltimecharity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-b from-slate-700/30 to-slate-800/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all p-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-32 md:h-40 bg-white/[0.15] rounded-xl p-4">
                  <Image
                    src="/schooltime.png"
                    alt="School Time Charity Organization Logo"
                    fill
                    className="object-contain p-2"
                    quality={100}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-sky-400">School Time Charity Organization</h3>
                  <p className="text-sm text-gray-300 mt-2">Empowering lives through education and sustainable development</p>
                  <div className="flex items-center justify-center mt-4 text-sky-400">
                    <span className="text-sm font-medium">Visit Website</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* About Section */}
          <div className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-sky-500/5 blur-3xl" />
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                  About Sheikh Assim Al Hakeem
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 rounded-2xl p-8 backdrop-blur-sm border border-sky-500/10 hover:border-sky-500/20 transition-all">
                      <h3 className="text-2xl font-bold text-sky-400 mb-4">In support of Orphans</h3>
                      <p className="text-lg text-white/90 leading-relaxed mb-6">
                        This blessed Dhul Hijjah tour is held in support of a powerful cause—providing orphans with access to education, nutritious meals, clothing, and the care they deserve.
                      </p>
                      <p className="text-lg text-white/90 leading-relaxed mb-6">
                        Representatives from the initiative will be present at all events. Take the opportunity to meet the team, learn more about the meaningful work being done, and find out how you can help make a lasting impact during these sacred days.
                      </p>
                      <div className="bg-gradient-to-r from-sky-500/20 to-sky-400/20 rounded-xl p-6">
                        <p className="text-lg font-semibold text-sky-400">
                          All donations collected during the events will go directly toward supporting orphans, with a 100% donation policy in place—every dollar you give goes to those who need it most.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                      <Image
                        src="/assimhome.jpg"
                        alt="Sheikh Assim Al Hakeem"
                        fill
                        className="object-cover"
                        quality={100}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />
                    </div>
                    <div className="absolute inset-0 rounded-2xl border border-sky-500/20 bg-gradient-to-t from-sky-500/10 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Event Policy */}
          <div className="py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-sky-500/20 to-sky-500/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-sky-400/20 p-8 md:p-10"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                Event Policy
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-4 bg-slate-900/50 p-6 rounded-xl hover:bg-slate-900/60 transition-colors"
                >
                  <svg className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                  <p className="text-lg sm:text-xl text-white/90">
                    Please note, a single ticket permits entry for one person.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start space-x-4 bg-slate-900/50 p-6 rounded-xl hover:bg-slate-900/60 transition-colors"
                >
                  <svg className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-sky-400">Media Consent</h3>
                    <p className="text-lg sm:text-xl text-white/90">
                      Please be aware that filming and photography will be taking place during each event. By attending, you consent to the possibility of being captured in the footage. This content could be used for promotional purposes, both online and offline.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start space-x-4 bg-slate-900/50 p-6 rounded-xl hover:bg-slate-900/60 transition-colors"
                >
                  <svg className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-sky-400">Segregation</h3>
                    <p className="text-lg sm:text-xl text-white/90">
                      This tour's events will be segregated, with separate male and female sections.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-sky-400/5 to-sky-500/10 blur-3xl" />
              
              <div className="relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 rounded-2xl overflow-hidden backdrop-blur-sm border border-sky-500/20 p-8 md:p-10 max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400">
                      Interested in Sponsorships or
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-white">
                      Collaborations?
                    </h3>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 mt-4"
                  >
                    Join us in making a difference. Fill out the form below and we'll get back to you soon.
                  </motion.p>
                </div>

                {!formSubmitted ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                      </div>

                      <div className="relative group">
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                      </div>
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </div>

                    <div className="relative group">
                      <select
                        name="enquiryType"
                        required
                        value={formData.enquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all appearance-none"
                      >
                        <option value="" disabled selected className="bg-slate-800">Please Select</option>
                        <option value="volunteering" className="bg-slate-800">Volunteering</option>
                        <option value="sponsoring" className="bg-slate-800">Sponsoring</option>
                        <option value="collaborating" className="bg-slate-800">Collaborating</option>
                        <option value="other" className="bg-slate-800">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </div>

                    <div className="relative group">
                      <textarea
                        name="message"
                        required
                        placeholder="Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center">
                        Send Message
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="bg-gradient-to-r from-sky-500/20 to-sky-400/20 rounded-xl p-8">
                      <svg
                        className="w-16 h-16 mx-auto text-sky-400 mb-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                      <p className="text-lg text-gray-300">
                        We've received your message and will get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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