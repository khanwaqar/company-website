// components/Careers.jsx
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaUsers, FaGraduationCap, FaHeart, FaBalanceScale } from 'react-icons/fa'

export default function Careers() {
  const benefits = [
    {
      icon: FaCode,
      title: 'Cutting-Edge Technology',
      description: 'Work with modern stacks: React, Node.js, TypeScript, AWS, and more'
    },
    {
      icon: FaRocket,
      title: 'Impactful Projects',
      description: 'Build products that solve real problems for startups and businesses'
    },
    {
      icon: FaUsers,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and async communication'
    },
    {
      icon: FaGraduationCap,
      title: 'Learning Budget',
      description: '$2,000 annual budget for courses, conferences, and books'
    },
    {
      icon: FaHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness stipend'
    },
    {
      icon: FaBalanceScale,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO and mandatory time off to recharge'
    }
  ]

  const openPositions = [
  {
    title: 'Business Development Intern',
    type: 'Full-time',
    location: 'Remote',
    department: 'Sales & Business Development',
    description: 'Generate qualified leads, manage business profiles, and help grow our client base through strategic outreach and relationship building.',
    requirements: [
      'Bachelor\'s degree in Business, Marketing, or related field',
      'Experience in freelancing or client-facing roles',
      'Availability for 8 hours per day',
      'Excellent communication and interpersonal skills',
      'Proactive and results-driven mindset'
    ]
  },
  {
    title: 'Virtual Assistant',
    type: 'Full-time',
    location: 'Remote',
    department: 'Administrative',
    description: 'Manage daily administrative tasks, coordinate meetings and schedules, and provide comprehensive support to ensure smooth business operations.',
    requirements: [
      '1+ years of administrative or virtual assistant experience',
      'Proficient in written and spoken English',
      'Excellent communication and organizational skills',
      'Strong time management and multitasking abilities',
      'Familiarity with productivity tools (Google Workspace, Slack, etc.)'
    ]
  },
  {
    title: 'Social Media Marketing Intern',
    type: 'Full-time',
    location: 'Remote',
    department: 'Marketing',
    description: 'Create engaging social media content, design compelling graphics, schedule posts strategically, and help generate leads through digital marketing efforts.',
    requirements: [
      'Experience with Canva, Adobe Creative Suite, or other graphic design tools',
      'Familiarity with freelancing platforms (Upwork, Fiverr, Freelancer)',
      'Strong written communication skills',
      'Understanding of social media platforms and best practices',
      'Creative mindset with attention to detail'
    ]
  },
  {
    title: 'Frontend Developer Intern',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Build responsive user interfaces, implement modern web designs, and collaborate with the development team to create exceptional user experiences.',
    requirements: [
      'Basic knowledge of HTML, CSS, and JavaScript',
      'Familiarity with React.js or similar frontend frameworks',
      'Understanding of responsive design principles',
      'Willingness to learn and adapt to new technologies',
      'Attention to detail and problem-solving skills'
    ]
  },
  {
    title: 'Content Writer',
    type: 'Part-time',
    location: 'Remote',
    department: 'Marketing',
    description: 'Create engaging blog posts, website content, and marketing materials that effectively communicate our services and value proposition to potential clients.',
    requirements: [
      'Excellent writing and editing skills in English',
      'Experience in technical writing or content creation',
      'Ability to research and write about technology topics',
      'Understanding of SEO principles',
      'Portfolio of writing samples'
    ]
  }
]

  const values = [
    {
      title: 'Craftsmanship',
      description: 'We take pride in writing clean, maintainable code and building products that last.'
    },
    {
      title: 'Continuous Learning',
      description: 'We embrace new technologies and constantly improve our skills and processes.'
    },
    {
      title: 'Client Success',
      description: 'We measure our success by the success of our clients\' products.'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse perspectives and open communication.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build the Future with <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Nest Craft</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join a team of passionate developers building cutting-edge software solutions 
            for startups and businesses worldwide.
          </p>
          <motion.a
            href="#open-positions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200"
          >
            View Open Positions
          </motion.a>
        </motion.div>

        {/* Why Join Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Join Nest Craft?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          id="open-positions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {position.location}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <motion.a
                    href={`mailto:careers@nestcraftsol.com?subject=Application: ${position.title}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 lg:mt-0 bg-gradient-to-r from-orange-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200 inline-block"
                  >
                    Apply Now
                  </motion.a>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No Match Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See the Perfect Role?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented developers who share our passion for building 
              great software. Even if you don't see an exact match, we'd love to hear from you.
            </p>
            <motion.a
              href="mailto:careers@nestcraftsol.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200"
            >
              Send Open Application
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}