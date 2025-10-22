// components/Process.jsx
import { motion } from 'framer-motion'
import { FaSearch, FaPalette, FaCode, FaRocket, FaComments } from 'react-icons/fa'

export default function Process() {
  const steps = [
    {
      icon: FaSearch,
      title: "Discovery & Planning",
      description: "We dive deep into your requirements, define project scope, and create a detailed roadmap.",
      deliverables: ["Project Specification", "Timeline", "Milestone Plan"]
    },
    {
      icon: FaPalette,
      title: "Design & Prototyping",
      description: "Create wireframes, design mockups, and interactive prototypes for your approval.",
      deliverables: ["UI/UX Design", "Interactive Prototype", "Design System"]
    },
    {
      icon: FaCode,
      title: "Development & Testing",
      description: "Agile development with regular demos, thorough testing, and quality assurance.",
      deliverables: ["Weekly Updates", "Quality Testing", "Staging Environment"]
    },
    {
      icon: FaRocket,
      title: "Launch & Deployment",
      description: "Final deployment, performance optimization, and go-live support.",
      deliverables: ["Production Deployment", "Documentation", "Training"]
    },
    {
      icon: FaComments,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to ensure long-term success.",
      deliverables: ["30-Day Support", "Performance Monitoring", "Update Management"]
    }
  ]

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-orange-50 via-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Our Development <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Transparent, collaborative, and efficient. Here's how we bring your ideas to life.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-blue-500 hidden lg:block"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">{step.title}</h3>
                    </div>
                    <p className="text-neutral-600 mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.deliverables.map((deliverable, i) => (
                        <div key={i} className="flex items-center text-sm text-neutral-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="lg:absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Step Number */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="text-6xl font-bold text-neutral-200 opacity-50">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-neutral-600 mb-6">
              Let's discuss how our proven process can bring your vision to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              <span>Start Your Project</span>
              <FaRocket className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}