// components/Footer.jsx
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaRegBuilding, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa'
import Logo from './Logo'
import { FaWhatsapp } from 'react-icons/fa'


export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/109730088", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/nestcraftsol", label: "GitHub" },
    { icon: FaTwitter, href: "https://x.com/NestCraftSol", label: "Twitter" },
    { icon: FaFacebook, href: "https://facebook.com/nestcraftsol", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/nestcraftsol/", label: "Instagram" },
    { icon: FaEnvelope, href: "mailto:info@nestcraftsol.com", label: "Email" }
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" }
  ]

  const whatsappNumber = "+923465909523" // include country code
  const whatsappMessage = "Hi! I want to discuss a project with NestCraft Solutions." // optional pre-filled message
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`


  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <Logo variant="full_dark" size="xl" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-neutral-400 max-w-md"
            >
              NestCraft Solutions builds innovative web & app solutions, sponsors offshore IT teams, and helps businesses scale with technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-4 bg-neutral-800 rounded-lg border-l-4 border-orange-500"
            >
              <div className="flex items-center space-x-2 mb-2">
                <FaRegBuilding className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-white">Registered Company</span>
              </div>
              <div className="text-xs text-neutral-300 space-y-1">
                <p>SECP: <span className="text-white">0313853</span></p>
                <p>NTN: <span className="text-white">H979568</span></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
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
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <a href={link.href} className="text-neutral-400 hover:text-white hover:underline">
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
                <a href="mailto:info@nestcraftsol.com" className="hover:text-orange-400 transition-colors duration-200">
                  info@nestcraftsol.com
                </a>
              </p>
              <p>
                <a href="tel:+923465909523" className="hover:text-orange-400 transition-colors duration-200 flex items-center gap-1">
                  <FaPhone /> +92 (346) 590-9523
                </a>
              </p>
              <p>Available 24/7 for emergencies</p>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-green-500 p-3 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span className="text-white text-sm">Chat on WhatsApp</span>
              </motion.a>


            </motion.div>
          </div>
        </div>
        

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-neutral-400"
        >
          <span>© {currentYear} NestCraft Solutions (SMC-Private) Ltd. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <span>SECP: 0313853</span>
            <span>•</span>
            <span>NTN: H979568</span>
          </div>
          <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent font-semibold">
            Build. Ship. Scale.
          </span>
        </motion.div>
      </div>
    </footer>
  )
}
