// components/Insights.jsx
import { motion } from 'framer-motion'
import { FaArrowRight, FaCalendar, FaClock } from 'react-icons/fa'

export default function Insights() {
  const articles = [
    {
      title: "Building Scalable React Applications in 2024",
      excerpt: "Learn the best practices and patterns for creating maintainable and scalable React applications that stand the test of time.",
      readTime: "8 min read",
      category: "Frontend Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "The Complete Guide to SaaS Architecture",
      excerpt: "Everything you need to know about designing and building multi-tenant SaaS applications from the ground up.",
      readTime: "12 min read",
      category: "Backend Development",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Why TypeScript is Essential for Modern Web Development",
      excerpt: "Discover how TypeScript can improve your development workflow, reduce bugs, and enhance team collaboration.",
      readTime: "6 min read",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  return (
    <section id="insights" className="py-20 bg-gradient-to-r from-orange-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Latest <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Thoughts, tips, and best practices from the world of modern web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200"
            >
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FaClock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ x: 3 }}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <FaArrowRight className="w-3 h-3" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#blog"
            className="inline-flex items-center space-x-2 bg-white text-neutral-700 px-6 py-3 rounded-lg font-semibold border border-neutral-300 hover:border-orange-500 hover:text-orange-600 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span>View All Articles</span>
            <FaArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}