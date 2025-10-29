// pages/ContactPage.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheck, FaCalendarAlt, FaEnvelope, FaRocket, FaLightbulb } from 'react-icons/fa'
import { FiMessageSquare, FiUser, FiMail, FiDollarSign, FiClock } from 'react-icons/fi'
import emailjs from 'emailjs-com'
import { Helmet } from 'react-helmet-async'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    budget: '',
    timeline: '',
    message: '',
    interestedInHealthSync: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  // Load reCAPTCHA Enterprise script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6LeR9forAAAAAEIp0iF4xS6RKeaaSv2_ueSoRWO6'
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Clean up if needed
      const existingScript = document.querySelector('script[src*="recaptcha/enterprise.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  // reCAPTCHA callback function
  const onSubmit = async (token) => {
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
          healthsync_interest: formState.interestedInHealthSync ? "Yes" : "No",
          to_email: "waqar@nestcraftsol.com",
          'g-recaptcha-response': token,
          captcha_verified: 'Yes'
        },
        "FlOMs0JeqSENbu96V"
      )
      setIsSent(true)

      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'lead',
          event_label: 'contact_form',
        })
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      alert("Failed to send message. Please try again or email me directly at waqar@nestcraftsol.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle form submission to trigger reCAPTCHA
  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    // Check if all required fields are filled
    if (!formState.name || !formState.email || !formState.budget || !formState.timeline || !formState.message) {
      alert('Please fill in all required fields')
      return
    }

    // reCAPTCHA will automatically trigger the onSubmit callback when verified
    // If there's any issue with reCAPTCHA, fall back to direct submission
    if (!window.grecaptcha || !window.grecaptcha.enterprise) {
      console.warn('reCAPTCHA not loaded, submitting directly')
      onSubmit('direct-submission-fallback')
      return
    }
  }

  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      budget: '',
      timeline: '',
      message: '',
      interestedInHealthSync: false
    })
    setIsSent(false)
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
      action: "https://calendly.com/your-calendar",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaRocket,
      title: "Quick Response",
      description: "Reply within 24 hours",
      action: null,
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Contact – Get a Free Project Plan | Nest Craft</title>
        <meta name="description" content="Ready to build your app? Get a free project plan, timeline, and budget estimate. Direct access to the developer." />
        <link rel="canonical" href="https://nestcraftsol.com/contact" />
      </Helmet>

      <div className="container mx-auto px-6">
        {/* Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-lg"
          >
            FREE PROJECT PLAN • 24H RESPONSE
          </motion.span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Build Your
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Next Big Thing
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            I'm currently accepting 1-2 new projects. Share your vision and I'll provide a detailed project plan with timeline and budget.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods & Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I respond to all inquiries within 24 hours (usually much faster). Let's discuss your vision and create something amazing together.
              </p>
            </motion.div>

            {/* Contact Methods */}
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
                      className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-orange-300 transition-all duration-300 group-hover:scale-105"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </a>
                  ) : (
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
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

            {/* HealthSync CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-6 border border-orange-200"
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaLightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">✨ Interested in HealthSync?</h3>
                  <p className="text-sm text-gray-600">
                    Request a private demo of our AI health assistant platform with medical report analysis.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Form */}
          <div className="lg:col-span-2">
            {!isSent ? (
              <motion.form
                id="demo-form"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleFormSubmit}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project... What are you building? What's your main goal? Any specific features or technologies you have in mind?"
                  />
                </div>

                {/* HealthSync Interest */}
                <div className="flex items-start mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <input
                    type="checkbox"
                    name="interestedInHealthSync"
                    checked={formState.interestedInHealthSync}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500 border-gray-300"
                  />
                  <label className="ml-3 text-sm text-gray-700">
                    <span className="font-semibold">I'm interested in a private demo of HealthSync</span>
                    <br />
                    <span className="text-gray-500">AI-powered health assistant platform for medical report analysis</span>
                  </label>
                </div>

                {/* reCAPTCHA Enterprise Button */}
                <button
                  className="g-recaptcha w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
                  data-sitekey="6LeR9forAAAAAEIp0iF4xS6RKeaaSv2_ueSoRWO6"
                  data-callback='onSubmit'
                  data-action='submit'
                  disabled={isSubmitting}
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
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Protected by reCAPTCHA Enterprise • No spam, no obligation
                </p>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-12 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FaCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Hi <strong>{formState.name}</strong>, I've received your message and will review it carefully. 
                  You'll hear back from me within 24 hours with a detailed project plan.
                </p>
                <div className="bg-white rounded-xl p-4 mb-6 border border-green-200">
                  <p className="text-sm text-gray-600">
                    💡 <strong>Pro tip:</strong> Check your spam folder if you don't see my reply soon. 
                    I'll send the project plan to <strong>{formState.email}</strong>
                  </p>
                </div>
                <motion.button
                  onClick={resetForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Founders Choose to Work With Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fixed Scope", description: "Clear deliverables, no surprise costs" },
              { title: "Direct Communication", description: "Work directly with the developer" },
              { title: "Full Ownership", description: "You own 100% of the code and IP" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add the reCAPTCHA callback function to window object */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.onSubmit = function(token) {
              // This will be called by reCAPTCHA Enterprise
              const event = new CustomEvent('recaptchaSuccess', { detail: token });
              window.dispatchEvent(event);
            }
          `
        }}
      />
    </div>
  )
}