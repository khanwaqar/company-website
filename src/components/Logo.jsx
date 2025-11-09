// components/Logo.jsx
import { motion } from 'framer-motion'
import NestcraftLogo from '../assets/logo/logo.svg?react'

export default function Logo({ variant = "default", size = "md", className = "" }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  // SVG content as a React component (no wrapper box)
  const LogoSVG = ({ className = '' }) => (
    <NestcraftLogo className={`w-full h-full fill-current ${className}`} />
  )

  const variants = {
    // Compact logo with icon + text
    default: (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`flex items-center space-x-3 ${className}`}
      >
        <div className={`${sizes[size]} flex items-center justify-center`}>
          <LogoSVG className="text-gray-900 dark:text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-gray-900 dark:text-white leading-none">NestCraft</span>
          <span className="text-xs text-gray-600 dark:text-gray-300 leading-none">Solutions</span>
        </div>
      </motion.div>
    ),

    // Text only version
    text: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`flex flex-col ${className}`}
      >
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          NestCraft
        </span>
        <span className="text-sm text-gray-600 font-medium">Solutions</span>
      </motion.div>
    ),

    // Icon only (bare SVG)
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`${sizes[size]} flex items-center justify-center ${className}`}
      >
        <LogoSVG className="text-gray-900 dark:text-white" />
      </motion.div>
    ),

    // Full name with icon
    full: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`flex items-center space-x-3 ${className}`}
      >
        <div className={`${sizes[size]} flex items-center justify-center`}>
          <LogoSVG className="text-gray-900 dark:text-white" />
        </div>
        <div className="flex flex-col">
<span className="text-xl font-bold bg-gradient-to-r from-orange-700 to-blue-700 bg-clip-text text-transparent">
  Nest Craft
</span>
<span className="text-sm font-medium bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
  Solutions
</span>


        </div>
      </motion.div>
    ),

    // Full name dark variant
    full_dark: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`flex items-center space-x-3 ${className}`}
      >
        <div className={`${sizes[size]} flex items-center justify-center`}>
          <LogoSVG className="text-white" />
        </div>
        <div className="flex flex-col">
         <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
  Nest Craft
</span>
<span className="text-sm font-medium bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
  Solutions
</span>

        </div>
      </motion.div>
    )
  }

  return variants[variant]
}
