// pages/Home.jsx
import { motion } from 'framer-motion'
import Hero from '../sections/HeroSection'
import Logo from '../components/Logo'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="overflow-hidden">
      <Helmet>
        <title>Nest Craft Solutions – Web & Mobile App Development</title>
        <meta name="description" content="I help startups build scalable web and mobile apps. Solo founder. Fixed-scope projects. 100% code ownership." />
        <link rel="canonical" href="https://nestcraftsol.com" />
      </Helmet>

      <Hero />

      {/* Enhanced Value Proposition Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 text-transparent bg-clip-text text-sm font-semibold px-4 py-2 rounded-full border border-orange-500/30">
                SOLO FOUNDER • ZERO OVERHEAD
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Built for
              <span className="block bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Startups That Ship
              </span>
            </motion.h2>
          </motion.div>

          {/* Value Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: "🚀",
                title: "Fixed-Scope Projects",
                description: "Clear deliverables, fixed timelines, no surprise costs",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: "👨‍💻",
                title: "Solo Developer",
                description: "Direct communication with the founder & developer",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "⚡",
                title: "100% Code Ownership",
                description: "You own everything we build together",
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                  <div className={`text-3xl mb-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
              <p className="text-gray-300 text-lg mb-6">
                "I'm Waqar — the solo developer behind NestCraft. I build production-ready web and mobile apps for startups who need a reliable, transparent tech partner."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  W
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Waqar</p>
                  <p className="text-gray-400 text-sm">Founder & Developer</p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="/work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore My Projects</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
              
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer CTA */}
      <section className="relative py-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something{' '}
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Amazing?
              </span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and turn your vision into a scalable, production-ready application.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href="/contact"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  💬
                </motion.span>
              </motion.a>
              
              <motion.a
                href="/work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                View Case Studies
              </motion.a>
            </motion.div>
            
            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-800"
            >
              <p className="text-gray-500 text-sm mb-4">TRUSTED BY STARTUPS WORLDWIDE</p>
              <div className="flex justify-center items-center space-x-8 opacity-50">
                {['🚀', '💡', '⚡', '🌟'].map((emoji, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}