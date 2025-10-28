import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

function Root() {
  useEffect(() => {
    // --- GOOGLE ANALYTICS (GA4) ---
    const gaScript = document.createElement('script');
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-GFGD630W64';
    gaScript.async = true;
    document.head.appendChild(gaScript);

    gaScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-GFGD630W64');
      console.log('✅ Google Analytics loaded');
    };

    // --- LINKEDIN INSIGHT TAG ---
    window._linkedin_partner_id = '8886361';
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(window._linkedin_partner_id);

    const liScript = document.createElement('script');
    liScript.type = 'text/javascript';
    liScript.async = true;
    liScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(liScript);

    liScript.onload = () => {
      console.log('✅ LinkedIn Insight Tag loaded');
    };
  }, []);

  return (
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
