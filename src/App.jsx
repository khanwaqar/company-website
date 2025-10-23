// App.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async' // You'll need to install this
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

// SEO Configuration
const siteConfig = {
  title: "Nest Craft Solutions - Web & Mobile App Development Agency",
  description: "Nest Craft Solutions builds scalable web applications, mobile apps, and SaaS platforms. Full-stack development with React, Node.js, and cloud technologies.",
  url: "https://nestcraftsol.com",
  image: "https://nestcraft.com/assets/logo/logo1.png",
  author: "Nest Craft Solutions",
  keywords: "web development, mobile app development, SaaS, React, Node.js, full-stack development, software agency, nest craft solutions",
  twitterHandle: "@nestcraft",
  locale: "en_US",
  type: "website"
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Helmet>
        {/* Character Set & Viewport */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Basic Meta Tags */}
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords} />
        <meta name="author" content={siteConfig.author} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="en" />
        <meta name="rating" content="general" />
        
        {/* Open Graph */}
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.image} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:type" content={siteConfig.type} />
        <meta property="og:site_name" content="Nest Craft Solutions" />
        <meta property="og:locale" content={siteConfig.locale} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
        <meta name="twitter:creator" content={siteConfig.twitterHandle} />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={siteConfig.image} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteConfig.url} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://nestcraftsol.com/#organization",
                "name": "Nest Craft Solutions",
                "url": "https://nestcraftsol.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://nestcraftsol.com/assets/logo/logo1.png"
                },
                "description": siteConfig.description,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Remote",
                  "addressCountry": "Worldwide"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-555-123-4567",
                  "contactType": "customer service",
                  "email": "waqar@nestcraftsol.com",
                  "availableLanguage": "en"
                },
                "sameAs": [
                  "https://linkedin.com/company/nestcraft-solution",
                  "https://github.com/nestcraft",
                  "https://twitter.com/nestcraft"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://nestcraftsol.com",
                "url": "https://nestcraftsol.com",
                "name": "Nest Craft Solutions",
                "description": siteConfig.description,
                "publisher": {
                  "@id": "https://nestcraftsol.com/#organization"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://nestcraftsol.com/#webpage",
                "url": "https://nestcraftsol.com",
                "name": siteConfig.title,
                "description": siteConfig.description,
                "isPartOf": {
                  "@id": "https://nestcraftsol.com/#website"
                },
                "about": {
                  "@id": "https://nestcraftsol.com/#organization"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Home />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}