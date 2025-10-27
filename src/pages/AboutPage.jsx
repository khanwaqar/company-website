// pages/AboutPage.jsx
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaRocket, FaCode, FaShieldAlt, FaStar, FaCalendar, FaHandshake, FaLightbulb } from 'react-icons/fa'
import { FiAward, FiUsers, FiClock, FiTrendingUp } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'

export default function AboutPage() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Startup Founder",
      company: "TechInnovate",
      content: "Nest Craft delivered our MVP 3 weeks ahead of schedule. The code quality was exceptional and communication was outstanding throughout the project.",
      project: "SaaS Platform",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Global Solutions Inc",
      content: "Working with Nest Craft transformed our e-commerce platform. The technical expertise and attention to detail resulted in a 40% improvement in user experience metrics.",
      project: "E-commerce Redesign",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      role: "CTO",
      company: "HealthTech Startup",
      content: "As a technical co-founder, I appreciate clean code and clear communication. Waqar delivered both while building our AI health platform from scratch.",
      project: "HealthSync AI",
      avatar: "👨‍🔬",
      rating: 5
    }
  ]

  const stats = [
    { icon: FiClock, number: "8+", label: "Years Experience" },
    { icon: FiUsers, number: "50+", label: "Projects Delivered" },
    { icon: FiAward, number: "100%", label: "Client Satisfaction" },
    { icon: FiTrendingUp, number: "40%", label: "Faster Delivery" }
  ]

  const values = [
    {
      icon: FaHandshake,
      title: "Transparency First",
      description: "No hidden costs, no surprise fees. Clear communication from day one."
    },
    {
      icon: FaCode,
      title: "Code Quality",
      description: "Clean, documented, and maintainable code that you actually own."
    },
    {
      icon: FaRocket,
      title: "Speed to Market",
      description: "MVPs in 6-10 weeks, not 6-10 months. Your competitors won't wait."
    },
    {
      icon: FaShieldAlt,
      title: "Reliability",
      description: "Enterprise-grade security and best practices for peace of mind."
    }
  ]

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>About – Waqar Irshad, Solo Developer | Nest Craft</title>
        <meta name="description" content="I'm Waqar — a senior full-stack developer who ships production-ready software for startups. No agencies. Just results." />
        <link rel="canonical" href="https://nestcraftsol.com/about" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-lg"
          >
            SOLO FOUNDER • FULL-STACK DEVELOPER
          </motion.span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building Your Vision,
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Line by Line
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            With 8+ years of full-stack experience, I help startups build scalable web and mobile apps — 
            delivering production-ready software on time, with zero agency overhead.
          </p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Founder Profile Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose a Solo Developer?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm not an agency with layers of project managers and junior developers. 
                You work directly with me — the senior developer who writes every line of code, 
                makes architectural decisions, and ensures your project's success.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-4">
              {[
                {
                  icon: FaRocket,
                  color: "text-orange-500",
                  title: "Fast Delivery",
                  description: "MVPs in 6–10 weeks with rapid iteration cycles"
                },
                {
                  icon: FaCode,
                  color: "text-blue-500",
                  title: "Clean Code",
                  description: "Production-ready, documented code with full ownership"
                },
                {
                  icon: FaShieldAlt,
                  color: "text-green-500",
                  title: "Enterprise Grade",
                  description: "Security, scalability, and best practices built-in"
                },
                {
                  icon: FaHandshake,
                  color: "text-purple-500",
                  title: "Direct Communication",
                  description: "No middlemen, no miscommunication, faster decisions"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r from-gray-50 to-white rounded-xl flex items-center justify-center shadow-sm`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <p className="text-sm text-gray-500 mb-4">Let's connect:</p>
              <div className="flex space-x-4">
                {[
                  { icon: FaLinkedin, href: "https://linkedin.com/in/waqarirshadkhan", label: "LinkedIn", color: "hover:bg-blue-100 text-blue-600" },
                  { icon: FaGithub, href: "https://github.com/khanwaqar", label: "GitHub", color: "hover:bg-gray-100 text-gray-700" },
                  { icon: FaTwitter, href: "https://twitter.com/khanwaqar278", label: "Twitter", color: "hover:bg-blue-50 text-blue-400" },
                  { icon: FaEnvelope, href: "mailto:waqar@nestcraftsol.com", label: "Email", color: "hover:bg-red-100 text-red-500" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-white p-3 rounded-xl shadow-sm border border-gray-200 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/assets/profile/profile.jpeg"
                  alt="Waqar Irshad, Founder of NestCraft"
                  className="w-80 h-80 rounded-3xl object-cover shadow-2xl border-8 border-white"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/320/4F46E5/FFFFFF?text=Waqar+Irshad"
                  }}
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg z-20"
              >
                ✅ Available for Projects
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-lg border border-gray-200 z-20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">8+</div>
                  <div className="text-xs text-gray-500">Years Exp</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Development Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building software that not only works but thrives in production
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple & Transparent Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No bureaucracy, no surprises — just clear steps to your launched product
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              icon: FaCalendar,
              title: "Discovery Call",
              description: "Free 30-minute consultation to understand your goals and scope your project",
              color: "from-orange-500 to-orange-600"
            },
            {
              step: "02",
              icon: FaHandshake,
              title: "Fixed Proposal",
              description: "Clear timeline, budget, and deliverables with no hidden costs or surprises",
              color: "from-blue-500 to-blue-600"
            },
            {
              step: "03",
              icon: FaRocket,
              title: "Build & Launch",
              description: "Weekly updates, clean code delivery, and full ownership transfer",
              color: "from-green-500 to-green-600"
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>
              </div>
              
              <div className="bg-white pt-12 pb-8 px-6 rounded-2xl shadow-sm border border-gray-200 h-full">
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="container mx-auto px-6 max-w-6xl mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it — hear from founders I've worked with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
              
              {/* Project */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">Project</div>
                <div className="text-sm font-medium text-gray-900">{testimonial.project}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build with a Developer Who Cares?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              I'm currently accepting 1-2 new projects. Let's discuss your vision and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <FaCalendar className="w-5 h-5" />
                <span>Get Free Consultation</span>
              </motion.a>
              <motion.a
                href="/work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaLightbulb className="w-5 h-5" />
                <span>See My Work</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}