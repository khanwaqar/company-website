// components/Navbar.jsx (simplified for clients)
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-neutral-100 shadow-sm"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={handleLinkClick}>
            <Logo variant='full' size="xl" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.href}
                  className="text-neutral-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
                  onClick={handleLinkClick}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 shadow-md"
              onClick={handleLinkClick}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-orange-600 transition-colors duration-200 p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-neutral-700 hover:text-orange-600 font-medium transition-colors duration-200 text-center"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/contact"
              className="block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-4 py-3 rounded-lg font-semibold text-center mx-4 hover:shadow-lg transition-all duration-200"
              onClick={handleLinkClick}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}