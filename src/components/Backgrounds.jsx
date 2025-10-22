// components/Backgrounds.jsx
export const TechBackgrounds = {
  // Hero Section - Dark gradient with subtle tech pattern
  hero: {
    background: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%), 
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0v50" fill="none" stroke="%233b82f6" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
    backgroundSize: 'cover, 100px 100px',
    backgroundPosition: 'center, center',
    backgroundBlendMode: 'overlay'
  },

  // Services Section - Light gradient with circuit pattern
  services: {
    background: `linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="2" fill="%233b82f6" opacity="0.05"/><path d="M40 0v80M0 40h80" stroke="%233b82f6" stroke-width="0.3" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23circuit)"/></svg>')`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center'
  },

  // Portfolio Section - Unsplash tech workspace image
  portfolio: {
   background: `linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #ec4899 100%)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  // About Section - Gradient with binary code animation background
  about: {
    background: `linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="binary" width="100" height="20" patternUnits="userSpaceOnUse"><text x="0" y="15" font-family="monospace" font-size="12" fill="%230ea5e9" opacity="0.03">10101010 01010101 10101010 01010101</text></pattern></defs><rect width="100%" height="100%" fill="url(%23binary)"/></svg>')`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center'
  },

  // Contact Section - Unsplash modern office background
  contact: {
    background: `linear-gradient(rgba(248, 250, 252, 0.5), rgba(241, 245, 249, 0.5)),
                url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center',
    backgroundBlendMode: 'normal, overlay'
  },

  // CTA Section - Vibrant gradient for call-to-action sections
  cta: {
    background: `linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #ec4899 100%)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  // Feature Section - Light pattern background
  feature: {
    background: `linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%239ca3af" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23dots)"/></svg>')`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center'
  },

  // Testimonial Section - Unsplash abstract tech background
  testimonial: {
    background: `linear-gradient(rgba(255,255,255,0.98), rgba(255,255,255,0.98)),
                url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center'
  }
}

// Helper function to apply backgrounds
export const applyBackground = (section) => {
  const bg = TechBackgrounds[section]
  return {
    background: bg.background,
    backgroundSize: bg.backgroundSize,
    backgroundPosition: bg.backgroundPosition,
    backgroundBlendMode: bg.backgroundBlendMode || 'normal'
  }
}