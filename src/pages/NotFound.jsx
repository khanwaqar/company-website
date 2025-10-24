// pages/NotFound.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHome, FaSearch, FaEnvelope, FaRocket } from 'react-icons/fa'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-white flex items-center justify-center px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Animated 404 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have taken a coffee break. 
              Don't worry, let's get you back on track!
            </p>
          </motion.div>

          {/* Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-6xl"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 shadow-md"
              >
                <FaHome className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/careers"
                className="inline-flex items-center space-x-3 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all duration-200"
              >
                <FaRocket className="w-5 h-5" />
                <span>View Careers</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Popular Pages You Might Like
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Home', path: '/', icon: FaHome },
                { name: 'Services', path: '#services', icon: FaSearch },
                { name: 'Portfolio', path: '#portfolio', icon: FaRocket },
                { name: 'Careers', path: '/careers', icon: FaEnvelope }
              ].map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                >
                  <Link
                    to={page.path}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 group"
                  >
                    <page.icon className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
                    <span className="text-gray-700 group-hover:text-orange-600 font-medium transition-colors duration-200">
                      {page.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 mb-4">
              Still lost? We're here to help!
            </p>
            <a
              href="mailto:hello@nestcraftsol.com"
              className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
            >
              waqar@nestcraftsol.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}