export const projectsData = [
  {
    id: 5,
    projectName: "Zimmo - Real Estate Data Quality Platform",
    projectDesc:
      "Developed a robust data pipeline to maintain the quality of Belgium’s second-largest real estate listings portal. Designed for scale, precision, and automation.",
    overview:
      "Zimmo aggregates real estate data from multiple sources. The platform required a robust solution to detect, validate, and cleanse property data to ensure accurate listings.",
    problem:
      "Data inconsistencies, duplicates and outdated listings from third-party sources were reducing user trust and search relevance.",
    solution:
      "Implemented intelligent validation pipelines using PHP DOM Parser and Symfony, with deduplication, normalization, and automated cleansing backed by MySQL.",
    features: [
      "Automated scraping with retry and backoff strategies",
      "Deduplication & normalization routines",
      "Rule-based and statistical data validation",
      "Monitoring dashboard for data quality issues"
    ],
    impact:
      "Improved listing accuracy by ~87% and reduced manual QA time by ~60%.",
    techStack: {
      frontend: "Symfony (Twig)",
      backend: "PHP, Symfony",
      database: "MySQL",
      others: "DOM Parser, CRON, Supervisord"
    },
    tags: [
      "PHP",
      "DOM Parser",
      "Symfony",
      "MySQL",
      "Web Scraping",
      "Data Validation",
      "Real Estate Tech"
    ],
    demo: "https://zimmo.be",
    image:
      "https://img.static-rmg.be/a/view/q75/w1780/h875/5262255/capture-decran-2023-05-10-151553-jpg.jpg",
    slug: "zimmo-real-estate-data-quality",
    category: "Web Scraping & Data Engineering",
    date: "2020",
  },

  {
    id: 1,
    projectName: "NewsHub - AI-Powered News Aggregation Platform",
    projectDesc:
      "AI-based personalized news assistant leveraging OpenAI GPT API and NLP for summarization, relevance detection, and sentiment analysis.",
    overview:
      "NewsHub gathers and organizes news from thousands of sources, automatically summarizing and categorizing them using AI to deliver personalized news feeds.",
    problem:
      "Users were overwhelmed by redundant and irrelevant articles and lacked concise summaries for quick reading.",
    solution:
      "Built a full-stack AI pipeline that ingests feeds, runs NLP/embedding-based deduplication and topic clustering, uses GPT for summaries, and serves personalized feeds.",
    features: [
      "AI summarization & sentiment scoring",
      "Topic clustering and de-duplication",
      "User preference driven personalization",
      "Responsive Next.js frontend with offline caching"
    ],
    impact:
      "Increased average session duration by 2.5x and CTR on recommendations significantly improved.",
    techStack: {
      frontend: "Next.js (React)",
      backend: "Node.js, Express",
      database: "MongoDB",
      ai: "OpenAI API, Python NLP scripts"
    },
    tags: [
      "Next.js",
      "Node.js",
      "Python",
      "OpenAI API",
      "MongoDB",
      "NLP",
      "Machine Learning"
    ],
    demo: "https://newshub.waqarlabs.online",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/3xcottleevsiw73hzp4z7/newshub.png?rlkey=0hxqltp226k7gr7ggca3fy77i&st=3qictupl&dl=0",
    slug: "newshub-ai-news-platform",
    category: "AI & Machine Learning"
  },

  {
    id: 7,
    projectName: "Finora - Freelance Marketplace Platform",
    projectDesc:
      "A feature-rich freelance marketplace with secure payments, live messaging, and advanced bidding system.",
    overview:
      "Finora connects clients and freelancers with a secure escrow system, bidding, and real-time collaboration features designed to improve trust and delivery.",
    problem:
      "Freelancers and clients needed transparent escrow management and simpler dispute workflows.",
    solution:
      "Built a multi-tenant platform with Stripe escrow, real-time chat, milestones, and a rating system for accountability.",
    features: [
      "Stripe escrow & payout flows",
      "Real-time chat + notifications",
      "Milestones, bids, and dispute resolution",
      "Search and filtering for freelancers"
    ],
    impact:
      "Onboarded 120+ freelancers and facilitated $25K+ in transactions in the first quarter after launch.",
    techStack: {
      frontend: "Next.js",
      backend: "Nest.js (Node.js)",
      database: "MongoDB",
      payments: "Stripe API, Webhooks"
    },
    tags: [
      "Next.js",
      "Nest.js",
      "MongoDB",
      "Stripe",
      "Real-time Chat",
      "Escrow System"
    ],
    demo: "https://finora.waqarlabs.online",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/remrnivyx4npm0xrpsgj1/finora.png?rlkey=e0fb9xyi7h9vsm64j8ppuuik0&st=gpue03pr&dl=0",
    slug: "finora-freelance-marketplace",
    category: "E-commerce & Marketplaces"
  },

  {
    id: 9,
    projectName: "Point of Sale (POS) - Retail Management System",
    projectDesc:
      "POS platform for retail businesses featuring inventory, billing, and reporting dashboards.",
    overview:
      "A lightweight POS system for SMB retailers that supports offline usage, fast billing, and simple inventory controls.",
    problem:
      "Retail shops needed a fast, offline-capable billing system without heavy infrastructure requirements.",
    solution:
      "Built a React Vite frontend with local-first data sync and Node.js backend using SQLite for quick deployment.",
    features: [
      "Fast billing & barcode scanning",
      "Inventory tracking and reorder alerts",
      "Printable invoices & sales reports",
      "Offline-first sync with conflict resolution"
    ],
    impact:
      "Reduced average checkout time by ~40% and improved stock accuracy for clients.",
    techStack: {
      frontend: "React (Vite)",
      backend: "Node.js",
      database: "SQLite (local-first)"
    },
    tags: [
      "React Vite",
      "Node.js",
      "SQLite",
      "Inventory Management",
      "Billing System"
    ],
    demo: "https://pos.waqarlabs.online",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/l65l7ee3y4qx8ntppasua/pos.png?rlkey=5bdevfxyuw7xthilgf13abqlh&st=lwdmdb0x&dl=0",
    slug: "point-of-sale-retail-system",
    category: "Business Applications"
  },

  {
    id: 2,
    projectName: "Dupatta Store Pakistan - E-commerce Website",
    projectDesc:
      "Custom-built eCommerce platform for a traditional Pakistani clothing store. Full WordPress development with custom PHP themes, responsive Bootstrap design, and WooCommerce integration.",
    overview:
      "An eCommerce storefront designed for a small business selling traditional garments with local payment and shipping options.",
    problem:
      "The client needed a reliable store with mobile-first design and easy product management.",
    solution:
      "Custom WordPress theme with WooCommerce, performance optimizations, and responsive UI tuned for mobile shoppers.",
    features: [
      "Custom product pages & variants",
      "Mobile-first responsive design",
      "WooCommerce integration",
      "SEO & performance tuning"
    ],
    impact:
      "Increased monthly online orders and improved mobile conversion rates.",
    techStack: {
      frontend: "WordPress (PHP, Bootstrap)",
      backend: "PHP, MySQL",
      ecom: "WooCommerce"
    },
    tags: [
      "WordPress",
      "PHP",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "E-commerce",
      "WooCommerce"
    ],
    demo: "https://dupattastore.pk/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDGS05QN2TDQ_yoJBHzeivrRkRId2vzxYVA&s",
    slug: "dupatta-store-ecommerce",
    category: "E-commerce & Marketplaces"
  },

  {
    id: 3,
    projectName: "Digiebot - Automated Crypto Trading Platform",
    projectDesc:
      "Built an automated cryptocurrency trading platform with Binance API integration for smart trading, portfolio management, and market analytics.",
    overview:
      "Digiebot executes trading strategies, monitors positions and provides analytics for retail traders using exchange APIs.",
    problem:
      "Manual trading required constant monitoring and was prone to missed opportunities and slow executions.",
    solution:
      "Implemented algorithmic trading modules, real-time data pipelines and order management integrated with Binance APIs.",
    features: [
      "Autotrader strategies & backtesting",
      "Real-time market data feed",
      "Portfolio and risk dashboard",
      "Order management & alerts"
    ],
    impact:
      "Enabled automated strategy execution with reduced latency and centralized portfolio tracking.",
    techStack: {
      frontend: "Angular",
      backend: "Node.js, PHP",
      database: "MySQL / MongoDB",
      integrations: "Binance API"
    },
    tags: [
      "Angular",
      "PHP",
      "MySQL",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Binance API"
    ],
    demo: "https://digiebot.com/",
    image:
      "https://miro.medium.com/v2/resize:fit:834/1*GnGqRTTWBhWqdwaVFUfCmg.jpeg",
    slug: "digiebot-crypto-trading",
    category: "Financial Technology"
  },

  {
    id: 10,
    projectName: "Sales Deals - AI-Powered Sales Aggregator",
    projectDesc:
      "Aggregates and classifies live eCommerce sales using scraping and ML-based categorization.",
    overview:
      "Sales Deals monitors merchants and surfaces the best promotions with ML-based classification and ranking.",
    problem:
      "Shoppers struggle to find relevant deals across many stores and channels in real time.",
    solution:
      "Built scraping pipelines, ML classifiers for deal relevance and caching layers for performance (Redis).",
    features: [
      "High-throughput scraping & deduplication",
      "ML-based category mapping",
      "Personalized deal recommendations",
      "Realtime feed with caching"
    ],
    impact:
      "Published 10K+ deals daily with high category accuracy and improved engagement for users.",
    techStack: {
      frontend: "Next.js",
      backend: "Python (scrapers), Flask",
      database: "Redis, MongoDB"
    },
    tags: [
      "Next.js",
      "Python",
      "Artificial Intelligence",
      "Web Scraping",
      "Redis",
      "Data Analysis"
    ],
    demo: "https://salesdeals.waqarlabs.online",
    image:
      "https://dl.dropboxusercontent.com/scl/fi/3y8y0h2hvs0ixebfgd4h3/salesdeals.png?rlkey=kr5a0thdxstnu4yj6p3ahwi9t&st=1hguffmo&dl=0",
    slug: "sales-deals-ai-aggregator",
    category: "AI & Machine Learning"
  },

  {
    id: 6,
    projectName: "Weather App - Real-time Weather Dashboard",
    projectDesc:
      "React-based weather application providing live weather data, forecasts, and interactive maps using open weather APIs.",
    overview:
      "Lightweight weather dashboard that provides current conditions and 7-day forecasts with a clean UI.",
    problem:
      "Users needed quick, glanceable weather info with minimal friction.",
    solution:
      "Built a responsive React app that consumes public weather APIs, with caching and graceful error handling.",
    features: [
      "Current conditions & 7-day forecast",
      "Location detection and saved locations",
      "Responsive UI & minimal animations",
      "Error handling & offline fallback"
    ],
    impact:
      "Delivered a small, fast UX for frequent weather checks and improved load times with caching.",
    techStack: {
      frontend: "React",
      backend: "Client-only (public APIs)",
      others: "OpenWeather / Weather APIs"
    },
    tags: [
      "React",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Weather API",
      "REST API",
      "Responsive Design"
    ],
    code: "https://github.com/khanwaqar/weather-react",
    demo: "https://weather-react-wine.vercel.app/",
    image:
      "https://shots.codepen.io/Call_in/pen/pMYGbZ-1280.jpg?version=1565727814",
    slug: "weather-app-react",
    category: "Web Applications"
  },

  {
    id: 8,
    projectName: "Forex Converter - Real-time Currency Exchange",
    projectDesc:
      "Powerful currency conversion tool with real-time forex rates using live financial APIs.",
    overview:
      "A simple and accurate currency converter for quick conversions and historical rate lookups.",
    problem:
      "Users needed reliable, up-to-date conversions and historical rate context for decisions.",
    solution:
      "Built a React UI that fetches live exchange rates, caches responses, and provides a small history chart.",
    features: [
      "Real-time currency conversion",
      "Historical rate lookup",
      "Simple, accessible UI",
      "Rate caching to reduce API calls"
    ],
    impact:
      "Provided fast, dependable conversions with low latency and reduced API usage via caching.",
    techStack: {
      frontend: "React",
      backend: "Public Forex APIs",
      others: "Caching & lightweight charting"
    },
    tags: [
      "React",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Forex API",
      "Financial Data"
    ],
    code: "https://github.com/khanwaqar/react-forex-project-simple",
    demo: "https://react-forex-project-simple.vercel.app/",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1610986305769/EL1msBdfz.png?w=1200&h=630&fit=crop&crop=entropy&auto=compress,format&format=webp&fm=png",
    slug: "forex-converter-react",
    category: "Financial Technology"
  },

  {
    id: 4,
    projectName: "My Better Deals - Location-Based Mobile App",
    projectDesc:
      "Cross-platform mobile application helping users discover local deals and discounts with map-based browsing, location services, and personalized recommendations.",
    overview:
      "A mobile-first deals discovery app that surfaces nearby promotions based on user location and preferences.",
    problem:
      "Shoppers missed local deals and had difficulty discovering nearby promotions.",
    solution:
      "Built a location-aware app with server-side APIs (CodeIgniter) to aggregate local offers and push personalized recommendations.",
    features: [
      "Map-based discovery of nearby deals",
      "Personalized recommendations and filters",
      "Push notifications for deals",
      "Merchant dashboard for submitting offers"
    ],
    impact:
      "Increased local merchant engagement and improved user discovery of nearby discounts.",
    techStack: {
      frontend: "Native mobile (Android/iOS) or hybrid",
      backend: "PHP (CodeIgniter)",
      database: "MySQL",
      others: "Location services, Push notifications"
    },
    tags: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Android Development",
      "iOS Development",
      "Mobile App",
      "Location Services"
    ],
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-3402ee04f534f4fb30516c885004bfb6-lq",
    slug: "my-better-deals-mobile-app",
    category: "Mobile Applications"
  }
];