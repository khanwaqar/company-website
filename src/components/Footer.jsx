// components/Footer.jsx
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaRegBuilding } from 'react-icons/fa'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/company", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/nestcraftsol", label: "GitHub" },
    { icon: FaTwitter, href: "https://x.com/NestCraftSol", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:info@nestcraft.com", label: "Email" }
  ]

  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy-policy" }
  ]

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3 mb-6"
            >
              <Logo variant="full_dark" size="xl" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-neutral-400 mb-6 max-w-md"
            >
              We build digital products that help businesses grow and succeed in the modern world through innovative technology solutions.
            </motion.p>
            
            {/* Company Registration Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-6 p-4 bg-neutral-800 rounded-lg border-l-4 border-orange-500"
            >
              <div className="flex items-center space-x-2 mb-2">
                <FaRegBuilding className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-white">Registered Company</span>
              </div>
              <div className="text-xs text-neutral-300 space-y-1">
                <p>SECP Registration: <span className="text-white">0313853</span></p>
                <p>NTN: <span className="text-white">H979568</span></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-neutral-800 p-3 rounded-lg hover:bg-orange-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-semibold text-lg mb-6"
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                >
                  <a 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contact */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-semibold text-lg mb-6"
            >
              Contact
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-3 text-neutral-400"
            >
              <p>
                <a href="mailto:info@nestcraft.com" className="hover:text-orange-400 transition-colors duration-200">
                  info@nestcraftsol.com
                </a>
              </p>
              <p>+92 (307) 581-7379</p>
              <p>Available 24/7 for emergencies</p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 mt-4 shadow-md"
              >
                Start a Project
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-neutral-400 text-sm">
            © {currentYear} NESTCRAFT SOLUTIONS (SMC-PRIVATE) LIMITED. All rights reserved.
          </div>
          <div className="text-neutral-400 text-sm text-center">
            <div className="flex items-center justify-center space-x-4">
              <span>SECP: 0313853</span>
              <span>•</span>
              <span>NTN: H979568</span>
            </div>
          </div>
          <div className="text-neutral-400 text-sm">
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              Build. Ship. Scale.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}