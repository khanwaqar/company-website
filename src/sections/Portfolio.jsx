// components/Portfolio.jsx
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaCode, FaMobile, FaDatabase, FaRocket } from 'react-icons/fa'
import { TechBackgrounds, applyBackground } from '../components/Backgrounds'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'saas', label: 'SaaS Products' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'automation', label: 'Automation' }
  ]

  const projects = [
    {
      id: 1,
      title: 'TaskFlow SaaS',
      description: 'A project management SaaS with real-time collaboration, time tracking, and automated reporting. Built for remote teams to streamline workflow.',
      image: '/api/placeholder/600/400',
      category: 'saas',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      results: [
        'Reduced project delivery time by 40%',
        '500+ active users in first 3 months',
        '98% client satisfaction rate'
      ]
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Custom e-commerce solution with inventory management, payment processing, and analytics dashboard. Handles 10,000+ monthly transactions.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      results: [
        '30% faster load times than competitors',
        '99.9% uptime reliability',
        'Seamless payment processing'
      ]
    },
    {
      id: 3,
      title: 'HealthTech Mobile App',
      description: 'Healthcare application for patient monitoring and appointment scheduling. Includes telemedicine features and prescription management.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Twilio'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      results: [
        '50,000+ app downloads',
        '4.8-star app store rating',
        'HIPAA compliant architecture'
      ]
    },
    {
      id: 4,
      title: 'CRM Automation Suite',
      description: 'Custom CRM with automated lead scoring, email sequences, and analytics. Integrates with 10+ third-party services.',
      image: '/api/placeholder/600/400',
      category: 'automation',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      results: [
        'Automated 80% of manual tasks',
        '3x increase in lead conversion',
        'Real-time analytics dashboard'
      ]
    },
    {
      id: 5,
      title: 'FinTech Dashboard',
      description: 'Real-time financial dashboard for investment tracking and portfolio management. Features advanced charting and reporting.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['React', 'D3.js', 'Express.js', 'Plaid API', 'Jest'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      results: [
        'Real-time data processing',
        'Secure financial data handling',
        'Interactive data visualizations'
      ]
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Scalable LMS with video streaming, progress tracking, and certification. Supports 50,000+ concurrent users.',
      image: '/api/placeholder/600/400',
      category: 'saas',
      technologies: ['Next.js', 'NestJS', 'MySQL', 'AWS S3', 'FFmpeg'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      results: [
        'Handles 50k+ concurrent users',
        '95% video streaming success rate',
        'Automated certificate generation'
      ]
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
   <section 
      id="portfolio" 
      className="py-20 relative overflow-hidden"
      style={applyBackground('portfolio')}
    >
      {/* Circuit Board Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0 0h10v10H0z" fill="none"/>
              <path d="M5 0v10M0 5h10" stroke="#3b82f6" strokeWidth="0.5"/>
              <circle cx="5" cy="5" r="1" fill="#3b82f6" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Featured <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our portfolio of successful projects delivering real business results through 
            innovative technology solutions and expert execution.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group ${
                project.featured ? 'ring-2 ring-blue-500 ring-opacity-20' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm border border-gray-200">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {project.results.slice(0, 2).map((result, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg flex-1 text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex-1 text-sm font-semibold hover:bg-gray-50 transition-colors duration-200"
                  >
                    <FaGithub className="w-3 h-3" />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show message when no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No projects found in this category. Try selecting a different filter.
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Something Similar?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with the same level of quality and attention to detail.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200 shadow-md"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}