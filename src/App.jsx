// App.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import Contact from './pages/ContactUs'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'

// 🔥 CLEANED: No trailing spaces anywhere
const siteConfig = {
  title: "Nest Craft Solutions - Web & Mobile App Development Agency",
  description: "Nest Craft Solutions builds scalable web applications, mobile apps, and SaaS platforms. Full-stack development with React, Node.js, and cloud technologies.",
  url: "https://nestcraftsol.com",
  image: "https://nestcraftsol.com/assets/logo/logo1.png",
  author: "Nest Craft Solutions",
  keywords: "web development, mobile app development, SaaS, React, Node.js, full-stack development, software agency, nest craft solutions",
  twitterHandle: "@nestcraft",
  locale: "en_US",
  type: "website"
}

// Page transition wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Main layout component
function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white">
      {/* Global SEO Meta Tags (fallback) */}
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content={siteConfig.author} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="en" />
        <meta name="rating" content="general" />
        
        {/* Open Graph */}
        <meta property="og:type" content={siteConfig.type} />
        <meta property="og:site_name" content="Nest Craft Solutions" />
        <meta property="og:locale" content={siteConfig.locale} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
        <meta name="twitter:creator" content={siteConfig.twitterHandle} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Structured Data (Organization) */}
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
                  "telephone": "+92-307-581-7379",
                  "contactType": "customer service",
                  "email": "waqar@nestcraftsol.com",
                  "availableLanguage": "en"
                },
                "sameAs": [
                  "https://linkedin.com/in/waqarirshadkhan",
                  "https://github.com/khanwaqar",
                  "https://twitter.com/khanwaqar278"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://nestcraftsol.com/#website",
                "url": "https://nestcraftsol.com",
                "name": "Nest Craft Solutions",
                "description": siteConfig.description,
                "publisher": { "@id": "https://nestcraftsol.com/#organization" }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageWrapper><Home /></PageWrapper>
          } />
          <Route path="/about" element={
            <PageWrapper><AboutPage /></PageWrapper>
          } />
          <Route path="/services" element={
            <PageWrapper><Services /></PageWrapper>
          } />
          <Route path="/work" element={
            <PageWrapper><Work /></PageWrapper>
          } />
          <Route path="/contact" element={
            <PageWrapper><Contact /></PageWrapper>
          } />
          <Route path="*" element={
            <PageWrapper><NotFound /></PageWrapper>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}