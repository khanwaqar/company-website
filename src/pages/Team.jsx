// components/Team.jsx
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa'

export default function Team() {
  const teamMembers = [
    {
      name: 'Muhammad Waqar Irshad',
      role: 'Founder & Full-Stack Developer',
      bio: 'With 8+ years of experience in full-stack development, I founded Nest Craft to help businesses build scalable digital products. Passionate about clean code, mentorship, and creating solutions that make a real impact.',
      image: '/assets/profile/profile.jpeg', // Add your photo
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
      social: {
        linkedin: 'https://linkedin.com/in/waqarirshadkhan',
        github: 'https://github.com/khanwaqar',
        twitter: 'https://twitter.com/khanwaqar278',
        website: 'https://nestcraftsol.com'
      }
    },
    // Add more team members as you grow
    // {
    //   name: 'Coming Soon',
    //   role: 'Senior Developer',
    //   bio: 'We are growing our team and looking for passionate developers to join us in building amazing products.',
    //   image: '/images/team/placeholder.jpg',
    //   skills: ['React', 'Python', 'Cloud', 'DevOps'],
    //   social: {
    //     linkedin: '#',
    //     github: '#'
    //   },
    //   isHiring: true
    // }
  ]

  const values = [
    {
      title: 'Technical Excellence',
      description: 'We maintain high standards for code quality, architecture, and best practices.'
    },
    {
      title: 'Continuous Growth',
      description: 'We invest in learning and encourage experimentation with new technologies.'
    },
    {
      title: 'Work-Life Harmony',
      description: 'We believe sustainable pace leads to better work and happier developers.'
    },
    {
      title: 'Open Communication',
      description: 'We value transparency, feedback, and collaborative problem-solving.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate group of developers dedicated to building exceptional software 
            and creating a positive impact through technology.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
            >
              {/* Photo */}
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  member.name.split(' ').map(n => n[0]).join('')
                )}
              </div>

              {/* Hiring Badge */}
              {member.isHiring && (
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  🚀 Hiring
                </div>
              )}

              {/* Name & Role */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-orange-600 font-medium mb-4">{member.role}</p>

              {/* Bio */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && member.social.linkedin !== '#' && (
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && member.social.github !== '#' && (
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && member.social.twitter !== '#' && (
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                )}
                {member.social.website && member.social.website !== '#' && (
                  <a href={member.social.website} className="text-gray-400 hover:text-orange-600 transition-colors">
                    <FaGlobe className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              We're always looking for talented developers who share our passion for building 
              great software and helping businesses succeed.
            </p>
            <motion.a
              href="/careers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200"
            >
              View Open Positions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}