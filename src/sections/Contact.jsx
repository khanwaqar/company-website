// components/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaPaperPlane, FaCheck, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { applyBackground } from '../components/Backgrounds'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  // 🔧 Your EmailJS credentials
  const SERVICE_ID = 'service_iuewnbw'        // <-- replace with your service ID
  const TEMPLATE_ID = 'template_dwlh0og'      // <-- replace with your template ID
  const PUBLIC_KEY = 'FlOMs0JeqSENbu96V'        // <-- replace with your public key

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          company: formState.company,
          budget: formState.budget,
          timeline: formState.timeline,
          message: formState.message,
          to_email: 'waqar@nestcraftsol.com',
        },
        PUBLIC_KEY
      )

      setIsSent(true)
    } catch (error) {
      console.error('EmailJS error:', error)
      alert('❌ Something went wrong while sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const consultationTimes = [
    '15-min Quick Call',
    '30-min Strategy Session',
    '45-min Technical Deep Dive'
  ]

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={applyBackground('contact')}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${20 + i * 4}%`,
              top: `${30 + Math.sin(i) * 40}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Ready to start your project? Book a free consultation or send us your requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Get In Touch</h3>
              <p className="text-neutral-600 mb-8">
                Have an idea? Let's discuss how we can turn it into a successful digital product.
                We typically respond within 2-4 hours during business days.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-neutral-200/50">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FaEnvelope className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Email</h4>
                  <a
                    href="mailto:waqar@nestcraftsol.com"
                    className="text-neutral-600 hover:text-orange-600 transition-colors"
                  >
                    waqar@nestcraftsol.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-neutral-200/50">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaCalendarAlt className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Free Consultation</h4>
                  <p className="text-neutral-600">15-30 minute discovery call</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-neutral-200/50">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FaMapMarkerAlt className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Location</h4>
                  <p className="text-neutral-600">Remote - Worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {!isSent ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 shadow-sm"
              >
                {/* form fields */}
                {/* same form inputs as before */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Your Name *</label>
                    <input type="text" name="name" required value={formState.name} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-orange-500 bg-white/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                    <input type="email" name="email" required value={formState.email} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-orange-500 bg-white/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Message *</label>
                  <textarea name="message" required rows="5" value={formState.message} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-orange-500 bg-white/50 resize-none" placeholder="Tell us about your project..." />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-neutral-600">
                  Thanks for reaching out, {formState.name}! We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
