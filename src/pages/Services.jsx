// pages/ServicesPage.jsx
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaMobile, FaCheck, FaClock, FaShieldAlt, FaUsers, FaCloud, FaServer } from 'react-icons/fa'
import { FiArrowRight, FiCalendar, FiMessageSquare, FiLayers } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'

export default function ServicesPage() {
  const coreServices = [
    {
      icon: FaCode,
      title: "Custom Web Applications",
      description:
        "We design and build fast, scalable web applications tailored to your business goals, ensuring a seamless user experience and maintainable code.",
      outcomes: [
        "Launch-ready in 6–10 weeks",
        "Clean, maintainable code",
        "Full ownership & documentation",
        "Ongoing support and optimization"
      ],
      idealFor: "Startups, SMBs, and growing businesses",
      color: "from-orange-500 to-orange-600",
      features: ["React / Next.js", "Node.js Backend", "API Integration", "Real-time Features"]
    },
    {
      icon: FaRocket,
      title: "SaaS MVP Development",
      description:
        "We help founders go from idea to paying users with a production-ready SaaS product built for scale, reliability, and flexibility.",
      outcomes: [
        "User authentication & dashboard",
        "Payment integration (Stripe, Braintree)",
        "Multi-tenant architecture ready",
        "Analytics & monitoring setup"
      ],
      idealFor: "Product-led startups and non-technical founders",
      color: "from-blue-500 to-blue-600",
      features: ["Subscription System", "Admin Dashboard", "Payment Processing", "User Management"]
    },
    {
      icon: FaMobile,
      title: "Cross-Platform Mobile Apps",
      description:
        "We deliver iOS and Android applications from a single codebase, saving development time while maintaining high performance and native-like quality.",
      outcomes: [
        "App Store & Play Store ready",
        "Offline support & push notifications",
        "Real-time data sync with backend",
        "Faster delivery than traditional native teams"
      ],
      idealFor: "Businesses seeking mobile presence without managing multiple dev teams",
      color: "from-orange-500 to-blue-500",
      features: ["React Native", "iOS & Android", "Push Notifications", "Offline-First"]
    },
    {
      icon: FaUsers,
      title: "Dedicated Development Teams",
      description:
        "We sponsor and manage remote IT teams for companies, giving you access to skilled developers without the overhead of hiring in-house.",
      outcomes: [
        "Scalable offshore development",
        "Dedicated team managed by us",
        "Optimized workflow & communication",
        "Cost-efficient technical operations"
      ],
      idealFor: "Enterprises and startups needing flexible tech resources",
      color: "from-blue-500 to-purple-500",
      features: ["Team Setup & Management", "Project Oversight", "Quality Assurance", "Flexible Scaling"]
    },
    {
      icon: FaCloud,
      title: "Cloud & DevOps Solutions",
      description:
        "We build scalable cloud infrastructure and implement DevOps practices to ensure your applications are reliable, secure, and performant.",
      outcomes: [
        "Automated deployment pipelines",
        "Scalable cloud architecture",
        "24/7 monitoring & alerting",
        "Cost-optimized infrastructure"
      ],
      idealFor: "Businesses needing robust infrastructure and deployment automation",
      color: "from-orange-400 to-blue-400",
      features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      icon: FaServer,
      title: "IT Consulting & Strategy",
      description:
        "We provide expert guidance on technology stack selection, architecture design, and digital transformation roadmaps.",
      outcomes: [
        "Technology roadmap creation",
        "Architecture design & review",
        "Performance optimization",
        "Digital transformation strategy"
      ],
      idealFor: "Companies planning digital transformation or tech stack modernization",
      color: "from-blue-600 to-orange-600",
      features: ["Tech Audits", "Architecture Design", "Digital Strategy", "Performance Review"]
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your goals, vision, and requirements to craft a clear roadmap.",
      icon: FaRocket
    },
    {
      step: "02",
      title: "Scope & Proposal",
      description: "We provide a fixed-scope plan with timelines, deliverables, and transparent pricing.",
      icon: FaCheck
    },
    {
      step: "03",
      title: "Agile Development",
      description: "Weekly updates, demos, and collaboration ensure smooth progress and transparency.",
      icon: FaClock
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deployment to production and optional ongoing support for maintenance and enhancements.",
      icon: FaShieldAlt
    }
  ]

  const technologies = [
    { name: "React & Next.js", category: "Frontend" },
    { name: "Node.js & Python", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "TypeScript", category: "Language" },
    { name: "AWS & Azure", category: "Cloud" },
    { name: "MongoDB & PostgreSQL", category: "Database" },
    { name: "Docker & Kubernetes", category: "DevOps" },
    { name: "Stripe & Payment APIs", category: "Payments" }
  ]

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <title>IT Services – Web, Mobile & Cloud Solutions | NestCraft Solutions</title>
        <meta
          name="description"
          content="NestCraft Solutions provides comprehensive IT services including web apps, SaaS MVPs, mobile applications, cloud solutions, and dedicated development teams."
        />
        <link rel="canonical" href="https://www.nestcraftsol.com/services" />
      </Helmet>

      {/* Hero */}
{/* Enhanced Hero Section */}
<section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900/30 py-24 lg:py-32 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
  <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
  
  <div className="container mx-auto px-6 relative">
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
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
            ENTERPRISE IT SOLUTIONS
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-blue-300">FIXED SCOPE PRICING</span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Transform Your</span>
          <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
            Business with Technology
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
        >
          Comprehensive IT services that drive growth, efficiency, and innovation. 
          From custom software to cloud solutions, we build what your business needs to succeed.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12"
        >
          {[
            { number: "150+", label: "Projects Delivered", icon: "🚀" },
            { number: "98%", label: "Client Satisfaction", icon: "⭐" },
            { number: "6-10", label: "Weeks to Launch", icon: "⚡" },
            { number: "24/7", label: "Support", icon: "🛡️" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-3"
          >
            <span>Start Your Project</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
          
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group border border-gray-600 text-gray-300 hover:text-white hover:border-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
          >
            <span>Explore Services</span>
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center text-gray-500"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-orange-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>  

      {/* Core Services */}
      <section className="container mx-auto px-6 py-16 mb-20 -mt-10 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end technology solutions designed for scalability, performance, and business growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 group-hover:border-transparent shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <FiLayers className="text-orange-500 mr-2" />
                    Technologies & Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span key={i} className="bg-gradient-to-r from-orange-50 to-blue-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-orange-100">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.outcomes.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-700">Ideal for:</strong> {service.idealFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We work with modern technologies to build scalable and future-proof solutions</p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 border border-orange-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-orange-300 transition-colors"
                >
                  <div className="text-sm font-semibold text-gray-500 mb-1">{tech.category}</div>
                  <div className="text-lg font-bold text-gray-900">{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A transparent, collaborative process designed for success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Differentiator */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-orange-500 to-blue-500 rounded-3xl p-12 max-w-6xl mx-auto text-white mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose NestCraft Solutions?</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                {[
                  "Direct communication with technical team",
                  "No unnecessary overhead or middlemen",
                  "Enterprise-grade code quality",
                  "Faster iterations and decision making"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FiArrowRight className="text-orange-200 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Predictable, fixed-scope pricing",
                  "Weekly progress demos & updates",
                  "Full code and IP ownership",
                  "Long-term partnership approach"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FiArrowRight className="text-blue-200 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 opacity-90">Let's discuss your requirements and build something amazing together</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FiCalendar className="w-5 h-5" />
                <span>Schedule Free Consultation</span>
              </motion.a>
              <motion.a
                href="/work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FiMessageSquare className="w-5 h-5" />
                <span>View Case Studies</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}