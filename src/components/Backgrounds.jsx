// components/Backgrounds.jsx
export const TechBackgrounds = {
  // Hero Section - Dark gradient with brand colors
  hero: {
    background: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%), 
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0v50" fill="none" stroke="%23fb923c" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
    backgroundSize: 'cover, 100px 100px',
    backgroundPosition: 'center, center',
    backgroundBlendMode: 'overlay'
  },

  // Services Section - Light gradient with brand circuit pattern
  services: {
    background: `linear-gradient(135deg, #fef7ed 0%, #f0f9ff 100%),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="2" fill="%23f97316" opacity="0.05"/><path d="M40 0v80M0 40h80" stroke="%230ea5e9" stroke-width="0.3" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23circuit)"/></svg>')`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center'
  },

  // Portfolio Section - Brand gradient (orange to blue)
  portfolio: {
    background: `linear-gradient(135deg, #0ea5e9 0%, #05517cff 50%, #fb923c 100%)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  // About Section - Light brand gradient with binary code
  about: {
    background: `linear-gradient(135deg, #ffedd5 0%, #e0f2fe 100%),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="binary" width="100" height="20" patternUnits="userSpaceOnUse"><text x="0" y="15" font-family="monospace" font-size="12" fill="%23f97316" opacity="0.03">10101010 01010101 10101010 01010101</text></pattern></defs><rect width="100%" height="100%" fill="url(%23binary)"/></svg>')`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center'
  },

  // Contact Section - Light brand overlay on office background
  contact: {
    background: `linear-gradient(rgba(254, 247, 237, 0.9), rgba(224, 242, 254, 0.9)),
                url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center',
    backgroundBlendMode: 'normal, overlay'
  },

  // CTA Section - Vibrant brand gradient
  cta: {
    background: `linear-gradient(135deg, #f97316 0%, #ea580c 50%, #0ea5e9 100%)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  // Feature Section - Light brand pattern
  feature: {
    background: `linear-gradient(135deg, #fef7ed 0%, #f0f9ff 100%),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23f97316" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23dots)"/></svg>')`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center'
  },

  // Testimonial Section - Clean white with brand accent
  testimonial: {
    background: `linear-gradient(rgba(255,255,255,0.98), rgba(255,255,255,0.98)),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="nest" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M30 15C20 5, 40 5, 30 15" fill="none" stroke="%23f97316" stroke-width="0.5" opacity="0.05"/><circle cx="30" cy="25" r="3" fill="%230ea5e9" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23nest)"/></svg>')`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center'
  },

  // Team Section - Warm professional gradient
  team: {
    background: `linear-gradient(135deg, #f0f9ff 0%, #ffedd5 50%, #ffffff 100%)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
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