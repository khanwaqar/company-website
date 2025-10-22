// components/Hero.jsx
import { motion } from 'framer-motion'
import { FaArrowRight, FaPlay, FaCode, FaServer, FaCloud } from 'react-icons/fa'
import { applyBackground } from '../components/Backgrounds'

export default function Hero() {
  const features = [
    { icon: FaCode, text: 'Clean Code' },
    { icon: FaServer, text: 'Scalable Architecture' },
    { icon: FaCloud, text: 'Cloud Native' }
  ]

  return (
    <section 
      id="home" 
      className="pt-32 pb-20 relative overflow-hidden min-h-screen flex items-center"
      style={applyBackground('hero')}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Tech Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="animatedGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M10 0H0v10" fill="none" stroke="#3b82f6" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#animatedGrid)">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Build Digital 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Products</span> 
              That Scale
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              We help startups and businesses build modern, scalable web applications 
              with cutting-edge technology and expert engineering.
            </motion.p>

            {/* Feature List */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <feature.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-200 flex items-center space-x-2 group shadow-lg"
              >
                <span>Start Project</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center space-x-2"
              >
                <FaPlay className="w-4 h-4" />
                <span>View Work</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start space-x-8 mt-12"
            >
              {[
                { number: '50+', label: 'Projects Done' },
                { number: '8+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Tech Illustration */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Main Tech Illustration */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Server Dashboard */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-6 border border-white/10">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex space-x-1 mb-2 justify-center">
                        {[1, 2, 3].map(j => (
                          <motion.div
                            key={j}
                            className="w-1.5 h-1.5 bg-green-400 rounded-full"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: j * 0.3 }}
                          />
                        ))}
                      </div>
                      <div className="h-1 bg-white/30 rounded mb-1"></div>
                      <div className="h-1 bg-white/30 rounded w-3/4 mx-auto"></div>
                    </div>
                  ))}
                </div>
                
                {/* Code Terminal */}
                <div className="bg-black/40 rounded-lg p-4 font-mono text-sm border border-white/10">
                  <div className="flex space-x-2 mb-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-green-400 flex">
                      <span className="text-gray-400 mr-2">$</span> npm run dev
                    </div>
                    <div className="text-blue-400">→ Ready on http://localhost:3000</div>
                    <div className="text-gray-400">✓ Compiled successfully</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}