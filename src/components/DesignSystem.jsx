// components/DesignSystem.jsx
export const ColorPalette = {
  // Primary Brand Colors - Warm & Trustworthy
  primary: {
    50: '#fef7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',  // Main brand orange - warmth, creativity
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },

  // Secondary Colors - Trust & Professionalism
  secondary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Trust blue - reliability
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },

  // Neutral Colors - Professional Foundation
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  },

  // Success/Accent Colors
  accent: {
    green: '#10b981',  // Growth, success
    purple: '#8b5cf6', // Creativity
    teal: '#14b8a6',   // Innovation
  }
}

export const Gradients = {
  // Primary brand gradient
  primary: 'bg-gradient-to-r from-orange-500 to-blue-500',
  
  // Text gradients
  text: {
    primary: 'bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent',
    secondary: 'bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent',
  },
  
  // Background gradients
  background: {
    hero: 'bg-gradient-to-br from-orange-50 via-blue-50 to-white',
    section: 'bg-gradient-to-r from-orange-50 to-blue-50',
    dark: 'bg-gradient-to-r from-orange-900 to-blue-900',
  }
}