// pages/ServicesPage.jsx
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaMobile, FaCheck, FaClock, FaShieldAlt, FaRocketchat } from 'react-icons/fa'
import { FiArrowRight, FiCalendar, FiMessageSquare } from 'react-icons/fi'
import CTASection from '../components/CTASection'
import { Helmet } from 'react-helmet-async'

export default function ServicesPage() {
  const coreServices = [
    {
      icon: FaCode,
      title: "Custom Web Applications",
      description: "I build fast, scalable web apps for startups who need a reliable tech partner — not a faceless agency.",
      outcomes: [
        "Launch in 6–10 weeks",
        "Clean, maintainable code",
        "Full ownership + documentation",
        "Ongoing support available"
      ],
      idealFor: "Startups, SMBs, founders with a clear product vision",
      color: "from-orange-500 to-orange-600",
      features: ["React/Next.js", "Node.js Backend", "Real-time Features", "API Integration"]
    },
    {
      icon: FaRocket,
      title: "SaaS MVP Development",
      description: "Go from idea to paying users with a production-ready SaaS product — built with scalability in mind.",
      outcomes: [
        "User auth + dashboard",
        "Stripe/Braintree integration",
        "Multi-tenant ready",
        "Analytics & monitoring"
      ],
      idealFor: "Non-technical founders, product-led startups",
      color: "from-blue-500 to-blue-600",
      features: ["Subscription System", "Admin Dashboard", "Payment Processing", "User Management"]
    },
    {
      icon: FaMobile,
      title: "Cross-Platform Mobile Apps",
      description: "iOS and Android apps from a single codebase — saving you time and cost without sacrificing quality.",
      outcomes: [
        "App Store & Play Store ready",
        "Offline support & push notifications",
        "Real-time sync with backend",
        "60–80% faster than native teams"
      ],
      idealFor: "Businesses needing mobile presence without 2 dev teams",
      color: "from-purple-500 to-purple-600",
      features: ["React Native", "iOS & Android", "Push Notifications", "Offline First"]
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We discuss your project goals, timeline, and requirements",
      icon: FaRocketchat
    },
    {
      step: "02",
      title: "Project Scope",
      description: "I provide a fixed-scope proposal with clear deliverables",
      icon: FaCheck
    },
    {
      step: "03",
      title: "Weekly Development",
      description: "Transparent development with weekly demos and updates",
      icon: FaClock
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deployment and ongoing support options available",
      icon: FaShieldAlt
    }
  ]

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Services – Custom Web & SaaS Development | NestCraft Solutions</title>
        <meta
          name="description"
          content="NestCraft Solutions builds Web Apps, SaaS MVPs, and AI-powered platforms using React, Node.js, and modern tech. Fixed pricing. Weekly updates. Full ownership."
        />
        <link rel="canonical" href="https://www.nestcraftsol.com/services" />
        
        {/* Optional but very helpful for LinkedIn preview */}
        <meta property="og:title" content="Custom Web & SaaS Development | NestCraft Solutions" />
        <meta
          property="og:description"
          content="Smart, scalable, and modern digital solutions built with React, Node.js, and AI. Build. Scale. Succeed."
        />
        <meta property="og:url" content="https://www.nestcraftsol.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nestcraftsol.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>


      {/* Enhanced Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-lg"
          >
            FIXED SCOPE • WEEKLY UPDATES • FULL OWNERSHIP
          </motion.span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Development Services
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              That Actually Ship
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            I help founders turn ideas into shipped products — with transparent pricing, 
            weekly updates, and zero fluff. No agencies, no junior devs, just quality code.
          </p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
          >
            {[
              { number: "6-10", label: "Weeks to Launch" },
              { number: "100%", label: "Code Ownership" },
              { number: "0", label: "Surprise Costs" },
              { number: "1", label: "Point of Contact" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Core Services */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What I Build
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized development services for startups and founders who need to move fast
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 group-hover:border-transparent shadow-sm group-hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Tech Stack & Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">You'll Get:</h4>
                  <ul className="space-y-2">
                    {service.outcomes.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-700">Ideal for:</strong> {service.idealFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We'll Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A transparent process designed for stress-free development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-orange-600 mb-2">STEP {step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Differentiator Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-12 max-w-6xl mx-auto border border-orange-200 mb-20"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose a Solo Founder Developer?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                {[
                  "Direct communication with the developer",
                  "No project manager overhead costs",
                  "Consistent code quality throughout",
                  "Faster decision making and iterations"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FiArrowRight className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Fixed scope = predictable pricing",
                  "Weekly progress demos",
                  "Full code ownership",
                  "Ongoing support relationship"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FiArrowRight className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your idea and build something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <FiCalendar className="w-5 h-5" />
                <span>Schedule Free Call</span>
              </motion.a>
              <motion.a
                href="/work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FiMessageSquare className="w-5 h-5" />
                <span>See My Work</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}