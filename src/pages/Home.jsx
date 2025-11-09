// pages/Home.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import WhatsAppChat from "../components/WhatsappChat";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";


export default function Home() {
  useEffect(() => {
    document.title = "NestCraft Solutions – Enterprise Web & Mobile App Development | IT Consultancy";
  }, []);

  const services = [
    {
      icon: "🚀",
      title: "Custom Software Development",
      description: "End-to-end custom software solutions built with cutting-edge technologies. We deliver scalable, secure, and high-performance applications tailored to your business needs.",
      technologies: ["React", "Node.js", "Python", "AWS", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. We create intuitive, feature-rich apps that drive engagement and business growth.",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.1.0&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions & DevOps",
      description: "Comprehensive cloud migration, infrastructure setup, and CI/CD pipeline implementation. We ensure your applications are scalable, secure, and highly available.",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: "🛠️",
      title: "IT Consulting & Strategy",
      description: "Strategic technology consulting to optimize your IT infrastructure, digital transformation roadmap, and technology stack selection for maximum ROI.",
      technologies: ["Digital Transformation", "Tech Audit", "Architecture", "Strategy"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.1.0&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: "🌐",
      title: "Dedicated Development Teams",
      description: "Extend your team with our expert developers, designers, and QA engineers. Flexible engagement models to scale your technical capabilities.",
      technologies: ["Full-time", "Part-time", "Project-based", "Hybrid"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: "🔒",
      title: "Cybersecurity & Maintenance",
      description: "Proactive security audits, compliance monitoring, and ongoing maintenance services to keep your applications secure and up-to-date.",
      technologies: ["Security Audit", "Pen Testing", "Monitoring", "Support"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.1.0&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "Python", "TypeScript", "AWS", 
    "Azure", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Firebase"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechInnovate",
      feedback: "NestCraft delivered our enterprise platform ahead of schedule. Their technical expertise and professionalism exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Product Director, GrowthLabs",
      feedback: "The dedicated team model saved us 40% on development costs while maintaining top-notch quality. Highly recommended for scaling startups.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "CEO, RetailTech Solutions",
      feedback: "Outstanding cloud migration service. Our application performance improved by 60% and costs reduced by 35%. True partners in our digital transformation.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ];

  const clients = [
    { name: "TechCorp", logo: "🏢" },
    { name: "InnovateLabs", logo: "🔬" },
    { name: "GlobalBank", logo: "🏦" },
    { name: "HealthPlus", logo: "⚕️" },
    { name: "EduTech", logo: "🎓" },
    { name: "RetailGroup", logo: "🛒" }
  ];

  const stats = [
    { value: 15, label: "Projects Delivered" },
    { value: 98, label: "Client Satisfaction Rate" },
    { value: 12, label: "Years Experience" },
    { value: 50, label: "Expert Team Members" },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes for your approval before development."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and regular progress updates."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment followed by ongoing maintenance and support services."
    }
  ];

  return (
    <main className="overflow-hidden bg-gray-950 text-white relative">
      <Helmet>
        <title>NestCraft Solutions – Enterprise IT Services & Software Development Company</title>
        <meta
          name="description"
          content="NestCraft Solutions is a premier IT services company specializing in custom software development, mobile apps, cloud solutions, and dedicated development teams. Partner with us for digital transformation."
        />
        <link rel="canonical" href="https://nestcraftsol.com" />
      </Helmet>

      <SEO
        title="NestCraft Solutions – Web & App Development & IT Consultancy"
        description="NestCraft Solutions builds modern, scalable web and mobile applications for startups and businesses. We also provide IT consulting and manage offshore tech teams."
        url="https://nestcraftsol.com"
        image="https://nestcraftsol.com/assets/images/Hero.jpg"
      />


      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 via-orange-900/10 to-blue-900/20 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Enterprise-Grade
            <span className="block bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              IT Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto mb-10 font-light"
          >
            We deliver cutting-edge software development, cloud solutions, and digital transformation services to help businesses thrive in the digital age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-blue-500 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Tech Stack Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex overflow-hidden space-x-12 py-4 border-y border-gray-800"
          >
            <div className="flex space-x-12 animate-marquee whitespace-nowrap">
              {technologies.map((tech, index) => (
                <span key={index} className="text-gray-400 font-mono text-sm hover:text-orange-400 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-12 uppercase tracking-wider text-sm"
          >
            Trusted by industry leaders
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 hover:bg-orange-500/10 rounded-lg transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{client.logo}</div>
                <p className="text-gray-400 group-hover:text-orange-400 text-sm font-medium transition-colors">{client.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-gray-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Comprehensive technology solutions to drive your business forward in the digital landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 hover:bg-gradient-to-br hover:from-orange-500/5 hover:to-blue-500/5 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-blue-500/10 text-orange-400 rounded-full text-xs border border-orange-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg w-full h-48 object-cover border border-gray-800 group-hover:border-orange-500/30 transition-colors"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              View All Services
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-gray-400 text-xl">
              A structured approach to ensure project success and client satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-orange-900/10 to-blue-900/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-2">{item.value}+</h3>
                <p className="text-gray-300 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-gray-400 text-xl">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.feedback}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-orange-500 group-hover:border-blue-500 transition-colors"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-orange-900/20 to-blue-900/20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 text-xl mb-10 leading-relaxed"
          >
            Let's discuss how our IT solutions can drive your digital transformation and business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-blue-500 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/work"
              className="border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            <p className="mb-2">📧 info@nestcraftsol.com</p>
            <p className="mb-2">📞 +92 (346) 5909523</p>
            <p>📍 Serving clients worldwide</p>
          </motion.div>
        </div>
      </section>

      {/* FLOATING WHATSAPP CHAT */}
      <WhatsAppChat />
    </main>
  );
}