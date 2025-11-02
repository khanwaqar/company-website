// pages/PrivacyPolicy.jsx
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FaShieldAlt, FaUserLock, FaDatabase, FaEnvelope, FaClock } from 'react-icons/fa'

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: FaShieldAlt,
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including:
• Contact information (name, email address, phone number)
• Project details and requirements
• Communication records
• Payment information (processed securely through third-party providers)

We also automatically collect certain technical information when you use our website, such as IP address, browser type, and usage data.`
    },
    {
      icon: FaDatabase,
      title: "How We Use Your Information",
      content: `We use the collected information for:
• Providing and improving our development services
• Communicating with you about your projects
• Processing payments and managing accounts
• Sending important updates and notifications
• Analyzing website usage to enhance user experience
• Complying with legal obligations`
    },
    {
      icon: FaUserLock,
      title: "Data Protection & Security",
      content: `We implement robust security measures to protect your data:
• Encryption of sensitive information
• Secure servers and infrastructure
• Regular security assessments
• Limited access to personal data
• Secure development practices

While we take reasonable precautions, no method of transmission over the Internet is 100% secure.`
    },
    {
      icon: FaClock,
      title: "Data Retention",
      content: `We retain your personal information only for as long as necessary:
• Project-related data: 7 years after project completion
• Communication records: 3 years
• Website analytics: 26 months
• Payment information: As required by financial regulations

You can request deletion of your data at any time, subject to legal requirements.`
    },
    {
      icon: FaEnvelope,
      title: "Your Rights & Choices",
      content: `You have the right to:
• Access and receive copies of your personal data
• Correct inaccurate or incomplete information
• Request deletion of your personal data
• Object to or restrict certain processing
• Data portability
• Withdraw consent at any time

To exercise these rights, contact us at privacy@nestcraftsol.com`
    }
  ]

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Privacy Policy – Nest Craft Solutions</title>
        <meta name="description" content="Learn how Nest Craft protects your privacy and handles your data. We're committed to transparency and security in all our development services." />
        <link rel="canonical" href="https://nestcraftsol.com/privacy" />
      </Helmet>

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Hero Section */}
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
            TRANSPARENCY & TRUST
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At Nest Craft, we're committed to protecting your privacy and being transparent about how we handle your data. This policy explains our practices in clear, simple terms.
          </p>

          {/* Last Updated */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200 inline-block">
            <p className="text-blue-800 font-semibold">
              📅 Last Updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nest Craft Solutions ("we," "our," or "us") is dedicated to safeguarding your privacy. 
            As a solo developer operation, we understand the importance of trust and transparency 
            in handling your personal information.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This Privacy Policy applies to all services offered by Nest Craft Solutions, including 
            web development, mobile app development, and consulting services. By using our services, 
            you agree to the collection and use of information in accordance with this policy.
          </p>
        </motion.div>

        {/* Main Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-orange-50 rounded-2xl p-6 border border-orange-200"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3">Third-Party Services</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use trusted third-party services like email providers, payment processors, 
              and analytics tools. These services have their own privacy policies, and we 
              ensure they meet our security standards.
            </p>
          </motion.div>

          {/* International Transfers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-6 border border-blue-200"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3">International Data</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              As a remote service provider, your data may be processed outside your country. 
              We ensure adequate protection through standard contractual clauses and other 
              appropriate safeguards.
            </p>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-white mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
          <p className="mb-6 opacity-90">
            We're here to help you understand our privacy practices.
          </p>
          <div className="space-y-2 text-sm">
            <p>📧 Email: info@nestcraftsol.com</p>
            <p>🌐 Website: nestcraftsol.com</p>
            <p>📍 Based: Remote (Serving clients worldwide)</p>
          </div>
        </motion.div>

        {/* Policy Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            We may update this policy from time to time. We'll notify you of any significant changes 
            by posting the new policy on this page and updating the "Last Updated" date.
          </p>
        </motion.div>
      </div>
    </div>
  )
}