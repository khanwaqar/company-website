// lib/seo.js
export const siteConfig = {
  title: "Nest Craft Solutions - Web & Mobile App Development Agency",
  description: "Nest Craft Solutions builds scalable web applications, mobile apps, and SaaS platforms. Full-stack development with React, Node.js, and cloud technologies.",
  url: "https://nestcraft.com",
  image: "/og-image.jpg",
  author: "Nest Craft Solutions",
  keywords: "web development, mobile app development, SaaS, React, Node.js, full-stack development, software agency",
  twitterHandle: "@nestcraft",
  locale: "en_US",
  type: "website"
}

export const generateSeoMeta = (pageMeta = {}) => {
  const meta = {
    ...siteConfig,
    ...pageMeta
  }

  return {
    // Main meta tags
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    author: meta.author,
    
    // Open Graph
    "og:title": meta.title,
    "og:description": meta.description,
    "og:image": meta.image,
    "og:url": meta.url,
    "og:type": meta.type,
    "og:site_name": "Nest Craft Solutions",
    "og:locale": meta.locale,
    
    // Twitter Card
    "twitter:card": "summary_large_image",
    "twitter:site": meta.twitterHandle,
    "twitter:creator": meta.twitterHandle,
    "twitter:title": meta.title,
    "twitter:description": meta.description,
    "twitter:image": meta.image,
    
    // Additional
    "robots": "index, follow",
    "googlebot": "index, follow",
    "revisit-after": "7 days",
    "language": "en",
    "rating": "general"
  }
}