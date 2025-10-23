// components/Team.jsx
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaRocket, FaShieldAlt, FaAward } from 'react-icons/fa'
import { applyBackground } from '../components/Backgrounds'

export default function Team() {
  // Main founder profile
  const founder = {
    name: "M. Waqar Irshad",
    role: "Founder & Full-Stack Developer",
    bio: "With 8+ years of experience in full-stack development, I specialize in building scalable web applications and SaaS products. Passionate about clean code, modern architecture, and delivering exceptional user experiences.",
    image: "/assets/profile/profile.jpeg",
    social: {
      linkedin: "https://linkedin.com/in/alexjohnson",
      github: "https://github.com/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      email: "alex@devnest.com"
    },
    skills: ["React/Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    achievements: [
      "50+ Successful Projects",
      "8+ Years Experience",
      "Full-Stack Specialization",
      "Client Satisfaction 100%"
    ]
  }

  // Specialized areas
  const specializations = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Modern React applications with TypeScript, responsive design, and optimal performance.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: FaRocket,
      title: "Backend & APIs",
      description: "Scalable server architecture, REST & GraphQL APIs, and database design.",
      technologies: ["Node.js", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      icon: FaShieldAlt,
      title: "DevOps & Security",
      description: "Cloud infrastructure, CI/CD pipelines, and security best practices.",
      technologies: ["AWS", "Docker", "CI/CD", "Security"]
    }
  ]

  // Future team roles (for scaling)
  const futureRoles = [
    {
      role: "Senior Frontend Developer",
      status: "Coming Soon",
      description: "Expanding our React/Next.js capabilities"
    },
    {
      role: "UX/UI Designer",
      status: "Planned",
      description: "Enhancing user experience and design systems"
    },
    {
      role: "DevOps Engineer",
      status: "Future Hire",
      description: "Scaling infrastructure and deployment processes"
    }
  ]

  return (
    <section 
      id="team" 
      className="py-20 relative overflow-hidden"
      style={applyBackground('feature')}
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border-2 border-orange-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Founder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Behind every great project is dedicated expertise. Get to know the developer who will bring your vision to life.
          </p>
        </motion.div>

        {/* Founder Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Founder Image & Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Status Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                >
                  Available for Projects
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center space-x-4 mt-6"
              >
                {[
                  { icon: FaLinkedin, href: founder.social.linkedin, color: "hover:bg-blue-600" },
                  { icon: FaGithub, href: founder.social.github, color: "hover:bg-gray-800" },
                  { icon: FaTwitter, href: founder.social.twitter, color: "hover:bg-blue-400" },
                  { icon: FaEnvelope, href: `mailto:${founder.social.email}`, color: "hover:bg-red-500" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-700 p-3 rounded-xl shadow-lg hover:text-white transition-all duration-200 border border-gray-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Founder Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{founder.name}</h3>
              <p className="text-xl text-orange-600 font-semibold mb-4">{founder.role}</p>
              <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {founder.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-orange-100 to-blue-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-orange-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {founder.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-gray-200"
                >
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FaAward className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializations.map((specialization, index) => (
              <motion.div
                key={specialization.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <specialization.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                  {specialization.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{specialization.description}</p>
                <div className="flex flex-wrap gap-2">
                  {specialization.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-orange-50 to-blue-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-orange-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Team Expansion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 border border-orange-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Growing Together</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As we continue to grow and take on more complex projects, we're planning to expand our team with specialized talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureRoles.map((role, index) => (
              <motion.div
                key={role.role}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200"
              >
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    role.status === "Coming Soon" 
                      ? "bg-green-100 text-green-700" 
                      : role.status === "Planned" 
                      ? "bg-orange-100 text-orange-700" 
                      : "bg-blue-100 text-blue-700"
                  }`}>
                    {role.status}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{role.role}</h4>
                <p className="text-gray-600 text-sm">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Work Directly with the Expert?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get senior-level expertise without the agency overhead. Direct communication, faster execution, and personalized attention.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200 shadow-md"
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}