// components/WhatsAppChat.jsx
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function WhatsAppChat() {
  const whatsappNumber = "+923465909523"
  const whatsappMessage = "Hi! I want to discuss a project with NestCraft Solutions."
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 shadow-lg p-4 rounded-full flex items-center justify-center cursor-pointer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 text-white" />
    </motion.a>
  )
}
