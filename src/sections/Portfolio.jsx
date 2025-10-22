// components/Portfolio.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCode, FaDatabase, FaServer, FaRocket, FaMobile, FaShoppingCart, FaChartLine, FaCloud, FaRobot } from 'react-icons/fa'
import { applyBackground } from '../components/Backgrounds'
import { projectsData } from './data/projectData'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'AI & Machine Learning', label: 'AI/ML' },
    { key: 'E-commerce & Marketplaces', label: 'E-commerce' },
    { key: 'Financial Technology', label: 'FinTech' },
    { key: 'Web Applications', label: 'Web Apps' },
    { key: 'Mobile Applications', label: 'Mobile' },
    { key: 'Web Scraping & Data Engineering', label: 'Data Engineering' },
    { key: 'Business Applications', label: 'Business' }
  ]

  const getCategoryIcon = (category) => {
    const icons = {
      'AI & Machine Learning': FaRobot,
      'E-commerce & Marketplaces': FaShoppingCart,
      'Financial Technology': FaChartLine,
      'Web Applications': FaCode,
      'Mobile Applications': FaMobile,
      'Web Scraping & Data Engineering': FaCloud,
      'Business Applications': FaServer
    }
    return icons[category] || FaRocket
  }

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter)

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

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section 
      id="portfolio" 
      className="py-20 relative overflow-hidden"
      style={applyBackground('portfolio')}
    >
      {/* Brand Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0 0h10v10H0z" fill="none"/>
              <path d="M5 0v10M0 5h10" stroke="#fb923c" strokeWidth="0.5"/>
              <circle cx="5" cy="5" r="1" fill="#0ea5e9" opacity="0.5"/>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured 
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"> Work</span>
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
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-sm ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-orange-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category)
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                onClick={() => handleProjectClick(project)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.projectName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1">
                      <CategoryIcon className="w-3 h-3" />
                      <span>{project.category.split(' ')[0]}</span>
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white leading-tight">{project.projectName}</h3>
                    <p className="text-gray-200 text-sm mt-1 line-clamp-2">{project.projectDesc}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Impact */}
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-xs line-clamp-1">{project.impact}</span>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Show message when no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-white text-lg">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Something Similar?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with the same level of quality and attention to detail.
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.projectName}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl"></div>
                
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <FaTimes className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProject.projectName}
                  </h2>
                  <p className="text-gray-200 text-lg">{selectedProject.projectDesc}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Overview & Problem/Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                      <FaCode className="text-orange-500" />
                      <span>Overview</span>
                    </h3>
                    <p className="text-gray-600">{selectedProject.overview}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                      <FaRocket className="text-blue-500" />
                      <span>Impact</span>
                    </h3>
                    <p className="text-gray-600">{selectedProject.impact}</p>
                  </div>
                </div>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-600">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h3>
                    <p className="text-gray-600">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(selectedProject.techStack).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-3">
                        <h4 className="font-semibold text-gray-900 capitalize text-sm">{key}</h4>
                        <p className="text-gray-600 text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-orange-100 to-blue-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-orange-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  {selectedProject.demo && (
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex-1 text-center"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  {selectedProject.code && (
                    <motion.a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex-1 text-center"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>View Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}