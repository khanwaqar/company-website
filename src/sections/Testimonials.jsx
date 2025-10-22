// components/Testimonials.jsx
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { applyBackground } from '../components/Backgrounds'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Startup Founder",
      company: "TechInnovate",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      content: "Nest Craft delivered our MVP 3 weeks ahead of schedule. The code quality was exceptional and the communication throughout the project was outstanding.",
      rating: 5,
      project: "SaaS Platform"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Global Solutions Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      content: "Working with Nest Craft was a game-changer for our e-commerce platform. Their attention to detail and technical expertise transformed our user experience.",
      rating: 5,
      project: "E-commerce Redesign"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO",
      company: "HealthTech Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      content: "The mobile app Nest Craft built for us exceeded all expectations. Clean architecture, thorough documentation, and excellent post-launch support.",
      rating: 5,
      project: "Healthcare Mobile App"
    }
  ]

  return (
    <section 
      id="testimonials" 
      className="py-20 relative overflow-hidden"
      style={applyBackground('testimonial')}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Client <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what founders and businesses say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200"
            >
              {/* Quote Icon */}
              <div className="text-orange-100 mb-4">
                <FaQuoteLeft className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <span className="text-sm text-neutral-500">Project: {testimonial.project}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who have transformed their ideas into successful digital products.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200 shadow-md"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}