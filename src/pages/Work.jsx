// pages/WorkPage.jsx
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaLock, FaRocket, FaChartLine, FaUsers, FaShieldAlt, FaCode, FaLayerGroup } from 'react-icons/fa'
import { FiArrowRight, FiCalendar, FiCode, FiLayers, FiStar, FiAward } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

const featuredProjects = [
  {
    id: 'healthsync',
    title: "HealthSync AI",
    category: "HealthTech / AI SaaS",
    shortDesc: "AI-powered platform that analyzes medical reports, explains results, and recommends next steps in simple language.",
    impact: "Empowers users to act quickly on critical health findings",
    image: "https://dl.dropboxusercontent.com/scl/fi/3lygrb0bpqod5fovy3uje/healthsync.jpg?rlkey=1kgxf2qg22z775js99xlf61tx&st=bdhvnvgd&dl=0",
    demo: "/contact",
    tech: ["Next.js", "NestJS", "OpenAI", "MongoDB", "MinIO"],
    isPrivate: true,
    highlights: ["AI Analysis", "Medical Reports", "Actionable Insights", "Privacy First"],
    results: ["90% accuracy", "3min analysis", "Multi-format support"]
  },
  {
    id: 'newshub',
    title: "NewsHub AI",
    category: "AI / Media SaaS",
    shortDesc: "Personalized news aggregator with AI summaries, sentiment analysis, and intelligent multi-source ranking.",
    impact: "Increased user engagement and session duration by 2.5x",
    image: "https://dl.dropboxusercontent.com/scl/fi/3xcottleevsiw73hzp4z7/newshub.png?rlkey=0hxqltp226k7gr7ggca3fy77i&st=3qictupl&dl=0",
    demo: "https://newshub.waqarlabs.online",
    tech: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "Redis"],
    isPrivate: false,
    highlights: ["AI Summaries", "Sentiment Analysis", "Personalized Feed", "Real-time"],
    results: ["2.5x engagement", "1000+ sources", "5s load time"]
  },
  {
    id: 'finora',
    title: "Finora",
    category: "SaaS / Marketplace",
    shortDesc: "Secure escrow-based platform connecting freelancers and clients with built-in project management.",
    impact: "Processed $25K+ in secure transactions in Q1 with zero disputes",
    image: "https://dl.dropboxusercontent.com/scl/fi/remrnivyx4npm0xrpsgj1/finora.png?rlkey=e0fb9xyi7h9vsm64j8ppuuik0&st=gpue03pr&dl=0",
    demo: "https://finora.waqarlabs.online",
    tech: ["Next.js", "NestJS", "Stripe", "MongoDB", "WebSockets"],
    isPrivate: false,
    highlights: ["Escrow Payments", "Project Management", "Secure Chat", "Milestones"],
    results: ["$25K+ volume", "0 disputes", "98% satisfaction"]
  },
  {
    id: 'pos',
    title: "Retail Pro",
    category: "Business Web App",
    shortDesc: "Offline-first billing & inventory management system designed for small retailers and shops.",
    impact: "Reduced checkout time by 40% and eliminated manual errors",
    image: "https://dl.dropboxusercontent.com/scl/fi/l65l7ee3y4qx8ntppasua/pos.png?rlkey=5bdevfxyuw7xthilgf13abqlh&st=lwdmdb0x&dl=0",
    demo: "https://pos.waqarlabs.online",
    tech: ["React Vite", "Node.js", "SQLite", "PWA", "IndexedDB"],
    isPrivate: false,
    highlights: ["Offline First", "Inventory Management", "Billing", "Analytics"],
    results: ["40% faster", "0 downtime", "Auto sync"]
  }
]

const stats = [
  { number: "15+", label: "Projects Delivered", icon: FaRocket },
  { number: "100%", label: "Client Satisfaction", icon: FaChartLine },
  { number: "0", label: "Projects Failed", icon: FaShieldAlt },
  { number: "6-10", label: "Weeks Avg. Timeline", icon: FiCalendar }
]

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const categories = ['all', 'AI SaaS', 'HealthTech', 'Marketplace', 'Business App']

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <title>Our Work – AI & SaaS Projects | NestCraft Solutions</title>
        <meta name="description" content="Explore NestCraft Solutions' projects: HealthSync AI, NewsHub AI, Finora, Retail Pro, and more." />
        <link rel="canonical" href="https://nestcraftsol.com/work" />
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
                  PRODUCTION-READY APPLICATIONS
                </div>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">Projects That</span>
                <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
                  Deliver Impact
                </span>
              </h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              >
                Real-world solutions built with cutting-edge technology. From AI-powered SaaS to business applications, 
                each project is engineered for performance, scalability, and user satisfaction.
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

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Explore Our Work</span>
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid with Filters */}
      <section id="projects" className="container mx-auto px-6 mb-20 -mt-10 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each project represents our commitment to quality, innovation, and delivering measurable business value.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-orange-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-md'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x300?text=Project+Preview" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Private Badge */}
                {project.isPrivate && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center shadow-sm">
                      <FaLock className="w-3 h-3 mr-1" />
                      Private
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                    <FiArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.shortDesc}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="bg-gradient-to-r from-orange-50 to-blue-50 text-orange-700 text-xs font-medium px-3 py-1.5 rounded-full border border-orange-200">
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center text-green-700 font-semibold mb-2">
                    <FaChartLine className="w-4 h-4 mr-2"/> 
                    Business Impact
                  </div>
                  <p className="text-green-800 text-sm mb-2">{project.impact}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result, i) => (
                      <span key={i} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FaCode className="w-4 h-4 mr-2 text-orange-500"/> 
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg font-medium border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {project.isPrivate ? (
                    <a 
                      href={project.demo} 
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group shadow-sm"
                    >
                      <FaLock className="w-4 h-4 mr-2"/> 
                      Request Private Demo 
                      <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </a>
                  ) : (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group shadow-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 mr-2"/> 
                      View Live Demo 
                      <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div 
          className="bg-gradient-to-br from-orange-500 to-blue-500 rounded-3xl p-12 max-w-6xl mx-auto text-white mb-16 shadow-2xl" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">What Every Project Includes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: FaCode, title: "Clean Code", desc: "Well-documented, maintainable codebase" },
                { icon: FaLayerGroup, title: "Full Ownership", desc: "You own 100% of the code and IP" },
                { icon: FaUsers, title: "Weekly Updates", desc: "Transparent progress with live demos" },
                { icon: FaShieldAlt, title: "Ongoing Support", desc: "Post-launch support and maintenance" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg backdrop-blur-sm">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Vision?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              NestCraft Solutions is accepting 1-2 new projects. Let's discuss your idea and craft a detailed project plan together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="/contact" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <FiCalendar className="w-5 h-5"/> 
                <span>Get Free Project Plan</span>
              </motion.a>
              <motion.a 
                href="/services" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FiLayers className="w-5 h-5"/> 
                <span>View Services</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}