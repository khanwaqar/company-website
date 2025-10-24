// components/Benefits.jsx
import { motion } from 'framer-motion'
import { FaDollarSign, FaHeart, FaHome, FaGraduationCap, FaUmbrellaBeach, FaChild } from 'react-icons/fa'

export default function Benefits() {
  const benefitCategories = [
    {
      title: 'Compensation & Equity',
      icon: FaDollarSign,
      benefits: [
        {
          name: 'Competitive Salary',
          description: 'Industry-competitive compensation based on experience and location'
        },
        {
          name: 'Performance Bonuses',
          description: 'Quarterly performance-based bonuses and profit sharing'
        },
        // {
        //   name: 'Retirement Planning',
        //   description: '401(k) with company matching (when available in your country)'
        // }
      ]
    },
    // {
    //   title: 'Health & Wellness',
    //   icon: FaHeart,
    //   benefits: [
    //     {
    //       name: 'Health Insurance',
    //       description: 'Comprehensive medical, dental, and vision insurance coverage'
    //     },
    //     {
    //       name: 'Wellness Stipend',
    //       description: '$100 monthly wellness budget for gym, yoga, meditation apps, etc.'
    //     },
    //     {
    //       name: 'Mental Health Support',
    //       description: 'Access to counseling services and mental health resources'
    //     }
    //   ]
    // },
    {
      title: 'Work Environment',
      icon: FaHome,
      benefits: [
        {
          name: 'Remote-First',
          description: 'Work from anywhere with flexible hours and async communication'
        },
        {
          name: 'Home Office Stipend',
          description: '$2,000 initial budget to set up your home office'
        },
        {
          name: 'Co-working Space',
          description: 'Access to local co-working spaces if you prefer to work outside home'
        }
      ]
    },
    {
      title: 'Learning & Growth',
      icon: FaGraduationCap,
      benefits: [
        {
          name: 'Learning Budget',
          description: '$2,000 annual budget for courses, conferences, and books'
        },
        {
          name: 'Conference Attendance',
          description: 'Opportunity to attend 1-2 tech conferences per year'
        },
        {
          name: 'Mentorship Program',
          description: 'Regular 1:1s with senior developers for career growth'
        }
      ]
    },
    {
      title: 'Time Off',
      icon: FaUmbrellaBeach,
      benefits: [
        {
          name: 'Unlimited PTO',
          description: 'Take the time you need to recharge and maintain work-life balance'
        },
        {
          name: 'Paid Parental Leave',
          description: '16 weeks fully paid leave for new parents'
        },
        {
          name: 'Flexible Holidays',
          description: 'Celebrate holidays that are meaningful to you and your culture'
        }
      ]
    },
    {
      title: 'Family & Life',
      icon: FaChild,
      benefits: [
        {
          name: 'Family Support',
          description: 'Resources and support for team members with families'
        },
        {
          name: 'Professional Development',
          description: 'Career coaching and advancement opportunities'
        },
        {
          name: 'Community Events',
          description: 'Regular team retreats and virtual social events'
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Benefits</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in our team's well-being, growth, and success with a benefits package 
            designed to support you both professionally and personally.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefitCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {category.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.name}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Compensation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Total Compensation Value
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              When you join Nest Craft, your total compensation includes not just salary, 
              but all these benefits that support your overall well-being and career growth.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: 'Base Salary', value: 'Competitive' },
                { label: 'Annual Bonus', value: '10-20%' },
                { label: 'Learning Budget', value: '$2,000' },
                { label: 'Wellness', value: '$1,200' }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}