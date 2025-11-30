// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane
} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const location = useLocation()

  // Reset animations when route changes
  useEffect(() => {
    setAnimationKey(prev => prev + 1)
  }, [location.pathname])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+977 (984) 5097315',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'info@yodhasolution.com',
      description: 'Online support'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Office',
      details: 'Bharatpur, Nepal',
      description: 'Visit us at our office'
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM'
    }
  ]

  const services = [
    'Web Development',
    'Mobile Development',
    'Cloud Solutions',
    'Cyber Security',
    'SEO Optimization',
    'UI/UX Design'
  ]

  return (
    <div className="pt-16" key={animationKey}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Let's Talk
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <info.icon className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-700 font-medium">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 bg-blue-100 rounded-lg h-48 flex items-center justify-center"
              >
                <p className="text-blue-600 font-medium">Interactive Map Here</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-blue-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-blue-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-blue-900 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact