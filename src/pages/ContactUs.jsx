// pages/ContactPage.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheck, FaCalendarAlt, FaEnvelope, FaRocket, FaUsers, FaLightbulb, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { FiMessageSquare, FiUser, FiMail, FiDollarSign, FiClock, FiArrowRight } from 'react-icons/fi'
import emailjs from 'emailjs-com'
import { Helmet } from 'react-helmet-async'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    budget: '',
    timeline: '',
    message: '',
    interestedInOffshoreTeam: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await emailjs.send(
        "service_iuewnbw",
        "template_vdke3x9",
        {
          from_name: formState.name,
          from_email: formState.email,
          budget: formState.budget,
          timeline: formState.timeline,
          message: formState.message,
          offshore_team_interest: formState.interestedInOffshoreTeam ? "Yes" : "No",
          to_email: "waqar@nestcraftsol.com"
        },
        "FlOMs0JeqSENbu96V"
      )
      setIsSent(true)
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'lead',
          event_label: 'contact_form',
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      alert("Failed to send. Please try again or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email Directly",
      description: "waqar@nestcraftsol.com",
      action: "mailto:waqar@nestcraftsol.com",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: FaCalendarAlt,
      title: "Book a Call",
      description: "15-min free consultation",
      action: "https://calendly.com/waqar-nestcraftsol/30min",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaPhone,
      title: "Quick Response",
      description: "Reply within 24 hours",
      action: null,
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <title>Contact – NestCraft Solutions | Web & App Development</title>
        <meta name="description" content="Contact NestCraft Solutions for full-stack web/app development, IT consultancy, and offshore team management. Get a free project plan and timeline." />
        <link rel="canonical" href="https://nestcraftsol.com/contact" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900/30 py-20 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 border border-orange-500/30 text-orange-300 text-sm font-semibold px-6 py-3 rounded-full mb-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  FREE PROJECT PLAN • 24H RESPONSE
                </div>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Let's Build Your
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
                  Digital Solution
                </span>
              </h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              >
                Share your vision and I'll provide a detailed plan, timeline, and budget for web or app development, 
                IT consultancy, or offshore team management. Let's create something amazing together.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
              >
                {[
                  { number: "24h", label: "Response Time" },
                  { number: "100%", label: "Free Consultation" },
                  { number: "15+", label: "Projects Delivered" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I respond to all inquiries within 24 hours. Let's discuss your project or offshore IT team setup.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  {method.action ? (
                    <a
                      href={method.action}
                      className="block bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-orange-300 transition-all duration-300 group-hover:scale-105"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </a>
                  ) : (
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                      <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-6 border border-orange-200"
            >
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 text-orange-500 mr-2" />
                NestCraft Solutions
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>📍 Serving clients worldwide</p>
                <p>📧 waqar@nestcraftsol.com</p>
                <p>🕒 Mon - Fri: 9AM - 6PM</p>
              </div>
            </motion.div>

            {/* Offshore Team CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-6 text-white"
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaUsers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Offshore IT Teams</h3>
                  <p className="text-sm text-gray-300">
                    Interested in a remote IT department? Check the box in the form to discuss offshore team management with NestCraft Solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {!isSent ? (
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <FiUser className="w-4 h-4 mr-2 text-gray-500" />
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Alex Morgan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <FiMail className="w-4 h-4 mr-2 text-gray-500" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="alex@startup.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <FiDollarSign className="w-4 h-4 mr-2 text-gray-500" />
                      Project Budget *
                    </label>
                    <select
                      name="budget"
                      required
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $5k">Under $5k</option>
                      <option value="$5k - $10k">$5k - $10k</option>
                      <option value="$10k - $25k">$10k - $25k</option>
                      <option value="$25k - $50k">$25k - $50k</option>
                      <option value="$50k+">$50k+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <FiClock className="w-4 h-4 mr-2 text-gray-500" />
                      Timeline *
                    </label>
                    <select
                      name="timeline"
                      required
                      value={formState.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">When do you need this?</option>
                      <option value="ASAP">ASAP (1-2 weeks)</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FiMessageSquare className="w-4 h-4 mr-2 text-gray-500" />
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project... web/app development, IT consultancy, or offshore team setup."
                  />
                </div>

                <div className="flex items-start mb-8 p-4 bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl border border-orange-200">
                  <input
                    type="checkbox"
                    name="interestedInOffshoreTeam"
                    checked={formState.interestedInOffshoreTeam}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500 border-gray-300"
                  />
                  <label className="ml-3 text-sm text-gray-700">
                    <span className="font-semibold">Interested in NestCraft Offshore IT Team</span>
                    <br />
                    <span className="text-gray-500">Managed remote IT department for web/app projects and tech operations</span>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      <span>Get Your Free Project Plan</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  No spam, just a real conversation about your project. We respect your privacy.
                </p>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-12 text-center shadow-lg"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FaCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Hi <strong>{formState.name}</strong>, I've received your message and will review it carefully. 
                  You'll hear back within 24 hours with your detailed project plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => setIsSent(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Send Another Message
                  </motion.button>
                  <motion.a
                    href="/work"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    View Our Work
                  </motion.a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}