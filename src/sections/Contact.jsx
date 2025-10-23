// components/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheck, FaCalendarAlt, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { TechBackgrounds, applyBackground } from '../components/Backgrounds'

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

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Send email via EmailJS
    await emailjs.send(
      "service_iuewnbw", // replace with your EmailJS service ID
      "template_vdke3x9", // replace with your EmailJS template ID
      {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_email: "waqar@nestcraftsol.com"
      },
      "FlOMs0JeqSENbu96V" // replace with your EmailJS public key
    );

    console.log("Form submitted:", formState);
    setIsSent(true);
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


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
      {/* Network Nodes Animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${20 + (i * 4)}%`,
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
            Let's Build Something <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Ready to start your project? Book a free consultation or send us your requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
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

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-neutral-200/50">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FaEnvelope className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Email</h4>
                  <a href="mailto:hello@nestcraft.com" className="text-neutral-600 hover:text-orange-600 transition-colors">
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

            {/* Consultation Types */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50">
              <h4 className="font-semibold text-neutral-900 mb-4">Quick Connect Options</h4>
              <div className="space-y-3">
                {consultationTimes.map((time, index) => (
                  <div key={index} className="flex items-center space-x-3 text-neutral-600">
                    <FaCheck className="w-4 h-4 text-green-500" />
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white/50"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white/50"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white/50"
                    >
                      <option value="">Select budget range</option>
                      <option value="$5k - $10k">$5k - $10k</option>
                      <option value="$10k - $25k">$10k - $25k</option>
                      <option value="$25k - $50k">$25k - $50k</option>
                      <option value="$50k+">$50k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formState.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white/50"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white/50 resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-md"
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-neutral-600 mb-6">
                  Thanks for reaching out, {formState.name}! We've received your message and will get back to you within 24 hours.
                </p>
                <div className="space-y-2 text-sm text-neutral-500">
                  <p>📧 You'll receive a confirmation email shortly</p>
                  <p>⏰ Typical response time: 2-4 hours</p>
                </div>
                <button
                  onClick={() => {
                    setIsSent(false)
                    setFormState({
                      name: '',
                      email: '',
                      company: '',
                      budget: '',
                      timeline: '',
                      message: ''
                    })
                  }}
                  className="mt-6 text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}