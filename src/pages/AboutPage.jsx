// pages/AboutPage.jsx
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaRocket, FaCode, FaShieldAlt, FaStar, FaCalendar, FaHandshake, FaLightbulb, FaUsers, FaGlobe, FaHeart } from 'react-icons/fa'
import { FiAward, FiUsers, FiClock, FiTrendingUp } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'

export default function AboutPage() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Startup Founder",
      company: "TechInnovate",
      content: "Nest Craft delivered our MVP 3 weeks ahead of schedule. The technical expertise and project management were exceptional throughout the project.",
      project: "SaaS Platform",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Global Solutions Inc",
      content: "Working with Nest Craft transformed our e-commerce platform. Their team's technical expertise resulted in a 40% improvement in user experience metrics.",
      project: "E-commerce Redesign",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      role: "CTO",
      company: "HealthTech Startup",
      content: "The Nest Craft team delivered exceptional work on our AI health platform. Clean code, clear communication, and scalable architecture.",
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
      title: "Partnership First",
      description: "We work as an extension of your team, not just another vendor."
    },
    {
      icon: FaCode,
      title: "Quality Code",
      description: "Clean, documented, and scalable code that grows with your business."
    },
    {
      icon: FaRocket,
      title: "Speed to Market",
      description: "MVPs in 6-10 weeks with agile development methodologies."
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise Ready",
      description: "Security, scalability, and best practices built into every project."
    }
  ]

  const teamGrowth = [
    {
      phase: "Now",
      title: "Core Team",
      description: "Senior developers and technical leadership driving your project success",
      team: ["Lead Developers", "Technical Architects", "Project Management"]
    },
    {
      phase: "Phase 1",
      title: "Expanding Capacity",
      description: "Growing our team to handle multiple concurrent projects",
      team: ["Frontend Specialists", "Backend Engineers", "UI/UX Designers"]
    },
    {
      phase: "Phase 2",
      title: "Full Service",
      description: "Complete end-to-end development capabilities",
      team: ["DevOps Engineers", "QA Specialists", "Product Managers"]
    }
  ]

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>About Us – Nest Craft | Your Technology Growth Partner</title>
        <meta name="description" content="Nest Craft is a growing technology company building scalable web and mobile applications for startups and enterprises. Partner with us for your digital transformation." />
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
            GROWING TECHNOLOGY COMPANY
          </motion.span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building Your Vision,
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Nest Craft is a technology partner that grows with you. We combine senior technical leadership 
            with scalable team structures to deliver exceptional web and mobile applications.
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

      {/* Company Story Section */}
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
                From Passion to Partnership
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by Waqar Irshad, Nest Craft began with a simple mission: deliver exceptional 
                software development without the agency overhead. Today, we're building a company that 
                combines senior technical expertise with scalable team structures.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're actively growing our team of passionate developers, designers, and engineers 
                to serve more clients while maintaining our commitment to quality and personal service.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-4">
              {[
                {
                  icon: FaUsers,
                  color: "text-orange-500",
                  title: "Scalable Teams",
                  description: "Right-sized teams that grow with your project needs"
                },
                {
                  icon: FaCode,
                  color: "text-blue-500",
                  title: "Senior Leadership",
                  description: "Experienced technical leadership on every project"
                },
                {
                  icon: FaShieldAlt,
                  color: "text-green-500",
                  title: "Enterprise Quality",
                  description: "Production-ready code with security and scalability"
                },
                {
                  icon: FaHandshake,
                  color: "text-purple-500",
                  title: "True Partnership",
                  description: "We become an extension of your team, invested in your success"
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
          </motion.div>

          {/* Team Growth Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Growth Journey</h3>
            
            {teamGrowth.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {phase.phase}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{phase.title}</h4>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{phase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {phase.team.map((role, roleIndex) => (
                    <span key={roleIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
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
            Our Company Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide how we work with clients and grow our team
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
            How We Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collaborative process designed for success at every stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              icon: FaCalendar,
              title: "Discovery & Planning",
              description: "We deeply understand your goals and create a detailed project roadmap",
              color: "from-orange-500 to-orange-600"
            },
            {
              step: "02",
              icon: FaHandshake,
              title: "Team Assembly",
              description: "We match your project with the right mix of skills and expertise",
              color: "from-blue-500 to-blue-600"
            },
            {
              step: "03",
              icon: FaRocket,
              title: "Build & Scale",
              description: "Agile development with regular updates and seamless collaboration",
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
            Don't just take our word for it — hear from companies we've helped grow
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
              Ready to Grow Together?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and build something amazing with a team that's invested in your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <FaCalendar className="w-5 h-5" />
                <span>Start a Project</span>
              </motion.a>
              <motion.a
                href="/work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaUsers className="w-5 h-5" />
                <span>Meet Our Team</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}