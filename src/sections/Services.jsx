// components/Services.jsx
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaMobile, FaCloud, FaShieldAlt, FaCog } from 'react-icons/fa'
import { TechBackgrounds, applyBackground } from '../components/Backgrounds'

export default function Services() {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Next.js, and Vue.js.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX']
    },
    {
      icon: FaRocket,
      title: 'SaaS Development',
      description: 'Scalable SaaS products from concept to deployment with subscription management.',
      features: ['Multi-tenant Architecture', 'Payment Integration', 'User Management', 'Analytics']
    },
    {
      icon: FaMobile,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications using React Native and Flutter.',
      features: ['iOS & Android', 'Offline Support', 'App Store Deployment', 'Push Notifications']
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup and migration with AWS, Azure, and Google Cloud.',
      features: ['Serverless Architecture', 'CI/CD Pipelines', 'Auto Scaling', 'Monitoring']
    },
    {
      icon: FaShieldAlt,
      title: 'Security & API',
      description: 'Secure API development and implementation with best security practices.',
      features: ['REST & GraphQL', 'Authentication', 'Rate Limiting', 'Data Encryption']
    },
    {
      icon: FaCog,
      title: 'DevOps',
      description: 'Automated deployment pipelines and infrastructure as code solutions.',
      features: ['Docker & Kubernetes', 'Monitoring', 'Disaster Recovery', 'Backup Solutions']
    }
  ]

  return (
     <section 
      id="services" 
      className="py-20 relative overflow-hidden"
      style={applyBackground('services')}
    >
       {/* Animated Circuit Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 border-2 border-blue-300/20 rounded-full"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${20 + Math.cos(i) * 60}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive development services to transform your ideas into powerful digital solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-blue-500"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-purple-500"></div>
              </div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transition-transform duration-300 shadow-lg"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution tailored to your business needs.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200 shadow-md"
            >
              Get Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}