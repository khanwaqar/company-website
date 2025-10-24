// components/Navbar.jsx
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [careersOpen, setCareersOpen] = useState(false)
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Services', href: '#services', type: 'hash' },
    { name: 'Portfolio', href: '#portfolio', type: 'hash' },
    { name: 'About', href: '#about', type: 'hash' },
    { name: 'Contact', href: '#contact', type: 'hash' }
  ]

  const careerItems = [
    { name: 'Careers', href: '/careers' },
    { name: 'Open Positions', href: '/careers#open-positions' },
    { name: 'Hiring Process', href: '/careers/process' },
    { name: 'Our Team', href: '/careers/team' },
    // { name: 'Benefits', href: '/careers/benefits' },
    { name: 'FAQ', href: '/careers/faq' }
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
    setCareersOpen(false)
    setMobileCareersOpen(false)
  }

  const renderLink = (item) => {
    if (item.type === 'hash') {
      return (
        <a
          href={item.href}
          className="text-neutral-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
          onClick={handleLinkClick}
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 transition-all duration-200 group-hover:w-full"></span>
        </a>
      )
    }
    
    return (
      <Link
        to={item.href}
        className="text-neutral-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
        onClick={handleLinkClick}
      >
        {item.name}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 transition-all duration-200 group-hover:w-full"></span>
      </Link>
    )
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
                {renderLink(item)}
              </motion.div>
            ))}
            
            {/* Careers Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCareersOpen(true)}
              onMouseLeave={() => setCareersOpen(false)}
            >
              <motion.button 
                whileHover={{ y: -2 }}
                className="flex items-center space-x-1 text-neutral-700 hover:text-orange-600 font-medium transition-colors duration-200"
              >
                <span>Careers</span>
                <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${careersOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              {careersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 z-50"
                >
                  {careerItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-neutral-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <motion.a
              href="#contact"
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
              <div key={item.name} onClick={handleLinkClick}>
                {item.type === 'hash' ? (
                  <a
                    href={item.href}
                    className="block py-3 text-neutral-700 hover:text-orange-600 font-medium transition-colors duration-200 text-center"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-3 text-neutral-700 hover:text-orange-600 font-medium transition-colors duration-200 text-center"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Careers Dropdown */}
            <div className="border-t border-neutral-200 pt-4">
              <button
                onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
                className="w-full flex items-center justify-center space-x-2 py-3 text-neutral-700 hover:text-orange-600 font-medium transition-colors duration-200"
              >
                <span>Careers</span>
                <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileCareersOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileCareersOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-neutral-50 rounded-lg mx-4 mt-2 overflow-hidden"
                >
                  {careerItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block py-2 text-neutral-600 hover:text-orange-600 transition-colors duration-200 text-center border-b border-neutral-200 last:border-b-0"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <a
              href="#contact"
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