// components/Logo.jsx
import { motion } from 'framer-motion'

export default function Logo({ variant = "default", size = "md", className = "" }) {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl'
  }

  const variants = {
    // Main logo with nest icon
    default: (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`flex items-center space-x-3 ${className}`}
      >
        <div className={`${sizes[size]} bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg`}>
          {/* Nest Icon */}
          <svg className="w-1/2 h-1/2 text-white" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7V21L12 17L20 21V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M8 12L12 9L16 12" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-gray-900 leading-none">NestCraft</span>
          <span className="text-xs text-gray-600 leading-none">Solutions</span>
        </div>
      </motion.div>
    ),

    // Text only version
    text: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex flex-col"
      >
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          NestCraft
        </span>
        <span className="text-sm text-gray-600 font-medium">Solutions</span>
      </motion.div>
    ),

    // Icon only
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`${sizes[size]} bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg ${className}`}
      >
        <svg className="w-1/2 h-1/2 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7V21L12 17L20 21V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M8 12L12 9L16 12" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </motion.div>
    ),

    // Full name
    full: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex items-center space-x-3"
      >
        <div className={`${sizes[size]} bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg`}>
          <svg className="w-1/2 h-1/2 text-white" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7V21L12 17L20 21V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M8 12L12 9L16 12" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900">Nest Craft</span>
          <span className="text-sm text-gray-600">Solutions</span>
        </div>
      </motion.div>
    ),

    full_dark: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex items-center space-x-3"
      >
        <div className={`${sizes[size]} bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg`}>
          <svg className="w-1/2 h-1/2 text-white" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7V21L12 17L20 21V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M8 12L12 9L16 12" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-200">Nest Craft</span>
          <span className="text-sm text-gray-100">Solutions</span>
        </div>
      </motion.div>
    )
  }

  return variants[variant]
}