// components/SEO.jsx
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  url,
  image,
  author = "Nest Craft Solutions",
  keywords = "web development, mobile app development, SaaS, React, Node.js, full-stack development, software agency, nest craft solutions",
  twitterHandle = "@nestcraftsol",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="rating" content="general" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nest Craft Solutions" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Favicon */}
      <link rel="icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

      {/* Structured Data (Organization + Website) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://nestcraftsol.com/#organization",
              name: "Nest Craft Solutions",
              url: "https://nestcraftsol.com",
              logo: {
                "@type": "ImageObject",
                url: "https://nestcraftsol.com/assets/logo/logo1.png",
              },
              description,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Remote",
                addressCountry: "Worldwide",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-346-590-9523",
                contactType: "customer service",
                email: "info@nestcraftsol.com",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.linkedin.com/company/109730088",
                "https://github.com/nestcraftsol",
                "https://x.com/NestCraftSol",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://nestcraftsol.com/#website",
              url: "https://nestcraftsol.com",
              name: "Nest Craft Solutions",
              description,
              publisher: { "@id": "https://nestcraftsol.com/#organization" },
            },
          ],
        })}
      </script>
    </Helmet>
  );
}
