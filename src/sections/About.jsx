// components/About.jsx
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import { TechBackgrounds , applyBackground} from '../components/Backgrounds'

export default function About() {
  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" }
  ]

  const values = [
    {
      icon: FaRocket,
      title: "Fast Delivery",
      description: "Rapid prototyping and iterative development to get your product to market faster."
    },
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Maintainable, scalable solutions that grow with your business needs."
    },
    {
      icon: FaShieldAlt,
      title: "Reliable & Secure",
      description: "Enterprise-grade security and reliability built into every project."
    }
  ]

  const technologies = [
    "React/Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", 
    "AWS", "Docker", "GraphQL", "Tailwind CSS", "MongoDB"
  ]

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={applyBackground('about')}
    >
      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/10 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-100, 1000],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built on <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With <span className="font-semibold text-gray-900">8+ years</span> of full-stack expertise, 
            I help businesses transform ideas into scalable digital products that deliver real results.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Work With Me</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Tech Stack & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* My Story */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Approach</h3>
              <p className="text-gray-600 mb-4">
                I believe in <span className="font-semibold text-gray-900">partnership over procurement</span>. 
                As a solo founder, you get direct access to senior-level expertise without the overhead of a large agency.
              </p>
              <p className="text-gray-600">
                Every project is treated as a collaboration where your vision and my technical expertise combine to create something exceptional.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies I Use</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200 border border-blue-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and how we can bring your vision to life with clean, efficient code and strategic thinking.
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