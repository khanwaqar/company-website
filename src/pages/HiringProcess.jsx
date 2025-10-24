// components/HiringProcess.jsx
import { motion } from 'framer-motion'
import { FaFileAlt, FaPhone, FaCode, FaUsers, FaHandshake } from 'react-icons/fa'

export default function HiringProcess() {
  const steps = [
    {
      icon: FaFileAlt,
      title: 'Application Review',
      duration: '1-3 days',
      description: 'We carefully review your application, portfolio, and experience to ensure a good fit.',
      details: [
        'Resume and cover letter review',
        'Portfolio/GitHub assessment',
        'Initial fit evaluation'
      ]
    },
    {
      icon: FaPhone,
      title: 'Screening Call',
      duration: '30 minutes',
      description: 'A casual conversation to learn about your background, goals, and interest in Nest Craft.',
      details: [
        'Culture and values discussion',
        'Career goals alignment',
        'Role expectations',
        'Your questions about us'
      ]
    },
    {
      icon: FaCode,
      title: 'Technical Assessment',
      duration: '2-4 hours',
      description: 'A practical coding exercise that reflects real-world challenges you might face on the job.',
      details: [
        'Take-home project (flexible timing)',
        'Real-world problem solving',
        'Code quality over speed',
        'No leetcode-style questions'
      ]
    },
    {
      icon: FaUsers,
      title: 'Team Interview',
      duration: '60-90 minutes',
      description: 'Meet the team and work through a collaborative coding session or system design discussion.',
      details: [
        'Pair programming session',
        'System design discussion',
        'Team culture fit',
        'Collaboration assessment'
      ]
    },
    {
      icon: FaHandshake,
      title: 'Offer & Onboarding',
      duration: '1-2 days',
      description: 'We make an offer and prepare for your smooth transition into the Nest Craft team.',
      details: [
        'Competitive offer package',
        'Onboarding plan discussion',
        'Equipment setup',
        'Welcome package'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Hiring <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Process</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in a transparent, respectful, and efficient hiring process that 
            helps both you and us determine if we're the right fit.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 mb-12 last:mb-0"
            >
              {/* Step Number and Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-center space-x-3 mb-3 md:mb-0">
                    <step.icon className="w-6 h-6 text-orange-500" />
                    <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    {step.duration}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{step.description}</p>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">What to expect:</h4>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tips for a Great Application
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">✅ Do:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tailor your application to our tech stack</li>
                  <li>• Include specific project achievements</li>
                  <li>• Show your passion for learning</li>
                  <li>• Ask thoughtful questions about our work</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">❌ Don't:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Send generic copy-paste applications</li>
                  <li>• Exaggerate your experience level</li>
                  <li>• Forget to include your portfolio/GitHub</li>
                  <li>• Rush through the technical assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}