// components/CareerFAQ.jsx
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function CareerFAQ() {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqCategories = [
    {
      category: 'Application Process',
      questions: [
        {
          question: 'How long does the hiring process typically take?',
          answer: 'Our hiring process usually takes 2-3 weeks from initial application to offer. We move quickly because we know you have options and we want to respect your time.'
        },
        {
          question: 'Do you require cover letters?',
          answer: 'Cover letters are optional but recommended. A well-written cover letter that shows you understand our work and explains why you are interested in Nest Craft can significantly strengthen your application.'
        },
        {
          question: 'What should I include in my portfolio?',
          answer: 'Focus on 2-3 projects that demonstrate your best work. Include live demos if possible, GitHub repositories with clean code, and explanations of the problems you solved and your specific contributions.'
        }
      ]
    },
    {
      category: 'Technical Requirements',
      questions: [
        {
          question: 'What tech stack do you use?',
          answer: 'Our primary stack includes React, Next.js, Node.js, TypeScript, PostgreSQL, and AWS. We value developers who are adaptable and eager to learn new technologies as needed for different projects.'
        },
        {
          question: 'Do I need to know all your technologies?',
          answer: 'No! We look for strong fundamentals in JavaScript/TypeScript and web development concepts. Experience with our specific stack is a plus, but we value learning ability and problem-solving skills more than specific technology experience.'
        },
        {
          question: 'What does the technical assessment involve?',
          answer: 'Our technical assessment is a take-home project that reflects real work you would do at Nest Craft. It typically takes 2-4 hours and focuses on code quality, architecture decisions, and problem-solving rather than speed or tricky algorithms.'
        }
      ]
    },
    {
      category: 'Work & Culture',
      questions: [
        {
          question: 'What is the work schedule like?',
          answer: 'We are fully remote and async-first. While we have core collaboration hours (typically 10 AM - 2 PM EST), you have flexibility to structure your day as long as you are available for key meetings and maintain good communication with your team.'
        },
        {
          question: 'Do you offer career growth opportunities?',
          answer: 'Absolutely! We provide regular performance reviews, clear career paths, mentorship opportunities, and substantial learning budgets. We promote from within whenever possible and support your professional development goals.'
        },
        {
          question: 'How do you handle remote team building?',
          answer: 'We have weekly virtual coffee chats, monthly team events, quarterly in-person retreats (when possible), and use various tools to maintain strong connections across the team despite being remote.'
        }
      ]
    },
    {
      category: 'Compensation & Benefits',
      questions: [
        {
          question: 'Are the salaries competitive?',
          answer: 'Yes, we offer competitive salaries based on market rates, your experience level, and location. We regularly benchmark our compensation to ensure we remain competitive in the market.'
        },
        {
          question: 'How does unlimited PTO work in practice?',
          answer: 'We encourage team members to take at least 4 weeks of vacation per year. Our unlimited PTO policy is built on trust - we want you to take the time you need to recharge without tracking days. Most team members take 4-6 weeks off per year.'
        },
        {
          question: 'Do you offer equity?',
          answer: 'For senior roles and early team members, we offer equity compensation. The specific details depend on the role and seniority level, and we are transparent about this during the offer stage.'
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Career <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">FAQ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about working at Nest Craft, our hiring process, 
            and what it's like to be part of our team.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 10 + itemIndex
                  const isOpen = openItems.has(globalIndex)

                  return (
                    <motion.div
                      key={itemIndex}
                      initial={false}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <FaChevronUp className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4"
                        >
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              We're here to help! Reach out to our team and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:careers@nestcraftsol.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200"
              >
                Email Our Team
              </motion.a>
              <motion.a
                href="/careers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200"
              >
                View Open Positions
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}