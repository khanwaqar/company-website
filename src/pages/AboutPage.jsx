// pages/AboutPage.jsx
import { motion } from 'framer-motion'
import { FaRocket, FaGlobe, FaUsers, FaShieldAlt, FaLightbulb, FaCode, FaHandshake, FaChartLine, FaAward } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'

export default function AboutPage() {
  const values = [
    {
      icon: FaRocket,
      title: "Full-Service Development",
      description: "End-to-end web and app solutions, from design to deployment with modern technologies."
    },
    {
      icon: FaGlobe,
      title: "IT Consultancy",
      description: "Strategic guidance to improve your technology operations and product roadmap."
    },
    {
      icon: FaUsers,
      title: "Offshore Team Management",
      description: "We build and manage remote IT departments, providing skilled talent efficiently."
    },
    {
      icon: FaShieldAlt,
      title: "Scalable & Secure Solutions",
      description: "Products and teams designed for growth, security, and long-term success."
    }
  ]

  const processSteps = [
    {
      step: "01",
      icon: FaLightbulb,
      title: "Consult & Plan",
      description: "Understand your business goals and craft a strategic digital roadmap.",
      color: "from-orange-500 to-orange-600"
    },
    {
      step: "02",
      icon: FaCode,
      title: "Develop & Deliver",
      description: "Build modern, scalable, and user-centric web and mobile applications.",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "03",
      icon: FaUsers,
      title: "Team Setup & Scale",
      description: "Provide and manage remote teams, optimizing your tech operations efficiently.",
      color: "from-orange-500 to-blue-500"
    }
  ]

  const stats = [
    { number: "15+", label: "Projects Completed", icon: FaRocket },
    { number: "12", label: "Years Experience", icon: FaAward },
    { number: "100%", label: "Client Satisfaction", icon: FaChartLine },
    { number: "50+", label: "Team Members", icon: FaUsers }
  ]

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <title>About Us – NestCraft Solutions | Full-Service Development & IT Consultancy</title>
        <meta name="description" content="NestCraft Solutions is a full-service web and app development company providing innovative digital solutions, IT consultancy, and offshore team management." />
        <link rel="canonical" href="https://nestcraftsol.com/about" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900/30 py-20 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 border border-orange-500/30 text-orange-300 text-sm font-semibold px-6 py-3 rounded-full mb-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  FULL-SERVICE DEVELOPMENT & IT CONSULTANCY
                </div>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Building Digital
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
                  Solutions That Scale
                </span>
              </h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              >
                We combine cutting-edge development, strategic IT consultancy, and dedicated team management 
                to help businesses thrive in the digital landscape. Your success is our craft.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-20 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                NestCraft Solutions is a full-service web and app development company delivering modern, 
                scalable, and user-centric products. We help businesses grow by turning ideas into reliable digital solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond development, we sponsor and manage offshore IT departments for companies, providing access 
                to skilled talent while ensuring operational efficiency, flexibility, and cost-effectiveness.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaHandshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Partnership Approach</h4>
                  <p className="text-gray-600 text-sm">We work as an extension of your team</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 border border-orange-200">
                <div className="space-y-4">
                  {[
                    "Custom Web & Mobile Applications",
                    "AI-Powered SaaS Solutions", 
                    "Cloud Infrastructure & DevOps",
                    "Dedicated Development Teams",
                    "IT Strategy & Digital Transformation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive services that combine technology, strategy, and skilled teams to drive your business growth.
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {value.title}
              </h3>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collaborative approach that combines strategy, development, and team management for optimal results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative text-center group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
              </div>
              
              {/* Content Card */}
              <div className="bg-white pt-12 pb-8 px-6 rounded-2xl shadow-lg border border-gray-200 h-full group-hover:shadow-xl transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 max-w-6xl mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500 to-blue-500 rounded-3xl p-8 text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <FaLightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              To empower businesses with innovative digital solutions that drive growth, efficiency, 
              and competitive advantage through cutting-edge technology and strategic partnerships.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <FaGlobe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To be the leading partner for businesses seeking to transform their digital presence, 
              leveraging technology to create lasting impact and sustainable growth in an evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Digital Future?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project or set up your remote IT team. NestCraft Solutions combines 
              development, consultancy, and team management to accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <FaLightbulb className="w-5 h-5" />
                <span>Start Your Project</span>
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaUsers className="w-5 h-5" />
                <span>Explore Services</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}