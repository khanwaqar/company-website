// pages/WorkPage.jsx
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaLock, FaRocket, FaChartLine, FaUsers, FaShieldAlt } from 'react-icons/fa'
import { FiArrowRight, FiCalendar, FiCode, FiLayers } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

const featuredProjects = [
  {
    id: 'healthsync',
    title: "HealthSync AI",
    category: "HealthTech / AI SaaS",
    shortDesc: "AI-powered platform that analyzes medical reports, explains results, and recommends next steps in simple language.",
    impact: "Helps users act faster on critical health findings",
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
    impact: "Increased user session duration by 2.5x",
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
    impact: "$25K+ in secure transactions processed in Q1",
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
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Our Work – AI & SaaS Projects | Nest Craft Solutions</title>
        <meta name="description" content="See real projects: HealthSync AI health assistant, NewsHub AI news aggregator, Finora freelance marketplace, and more." />
        <link rel="canonical" href="https://nestcraftsol.com/work" />
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
            PRODUCTION-READY APPLICATIONS
          </motion.span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Projects That
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Deliver Results
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            I build production-ready software that solves real problems. From AI-powered SaaS to business applications — 
            every project ships on time, with clean code and full ownership.
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

      {/* Projects Grid with Filters */}
      <section className="container mx-auto px-6 mb-20">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-orange-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
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
              whileHover={{ y: -5 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x300/4F46E5/FFFFFF?text=Project+Preview"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Private Badge */}
                {project.isPrivate && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                      <FaLock className="w-3 h-3 mr-1" />
                      Private
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-orange-50 to-blue-50 text-orange-700 text-xs font-medium px-3 py-1 rounded-full border border-orange-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center text-green-700 font-semibold mb-2">
                    <FaChartLine className="w-4 h-4 mr-2" />
                    Key Result:
                  </div>
                  <p className="text-green-800 text-sm">{project.impact}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.results.map((result, i) => (
                      <span key={i} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FiCode className="w-4 h-4 mr-2" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {project.isPrivate ? (
                    <a
                      href={project.demo}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                    >
                      <FaLock className="w-4 h-4 mr-2" />
                      Request Private Demo
                      <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                      View Live Demo
                      <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-12 max-w-6xl mx-auto border border-orange-200 mb-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              What Every Project Includes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: FiCode, title: "Clean Code", desc: "Well-documented, maintainable codebase" },
                { icon: FiLayers, title: "Full Ownership", desc: "You own 100% of the code and IP" },
                { icon: FaUsers, title: "Weekly Updates", desc: "Transparent progress with live demos" },
                { icon: FaShieldAlt, title: "Ongoing Support", desc: "Post-launch support and maintenance" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <item.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Vision?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              I'm currently accepting 1-2 new projects. Let's discuss your idea and create a detailed project plan together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <FiCalendar className="w-5 h-5" />
                <span>Get Free Project Plan</span>
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FiLayers className="w-5 h-5" />
                <span>View Services</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}