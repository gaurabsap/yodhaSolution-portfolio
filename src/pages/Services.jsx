// src/pages/Services.jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaCode,
  FaMobile,
  FaBullhorn,
  FaSearch,
  FaPalette,
  FaArrowRight,
  FaWhatsapp,
  FaCheckCircle
} from 'react-icons/fa'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimization'],
      image: '/mockup-images/web-dev.jpg',
      id: "web-development"
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Deployment'],
      image: '/mockup-images/mobile-dev.jpg',
      id: "mobile-development"
    },
    {
      icon: FaBullhorn,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business',
      features: ['Social Media Marketing', 'Content Strategy', 'PPC Advertising', 'Brand Awareness'],
      image: '/mockup-images/digital-marketing.jpg',
      id: "digital-marketing"
    },
    {
      icon: FaSearch,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and online visibility',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Analytics & Reporting'],
      image: '/mockup-images/seo-optimization.jpg',
      id: "seo-optimization"
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      image: '/mockup-images/ui-ux-design.jpg',
      id: "ui-ux-design"
    }
  ]

  const whatsappNumber = '9779845052953'
  const whatsappMessage = 'Hello YodhaSolution! I would like to discuss a project with you.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  // Set active service based on URL hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      const serviceIndex = services.findIndex(service => service.id === hash)
      if (serviceIndex !== -1) {
        setActiveService(serviceIndex)
      }
    }
  }, [services])

  const handleServiceClick = (index) => {
    setActiveService(index)
    const serviceId = services[index].id

    // Update URL with hash
    window.history.pushState(null, '', `#${serviceId}`)

    // Smooth scroll to the element on desktop
    if (window.innerWidth >= 768) {
      setTimeout(() => {
        const element = document.getElementById(serviceId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }

  const ActiveIcon = services[activeService].icon

  return (
    <div className="pt-0 w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-[#0A64BC] w-full">
        <div className="w-full px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Our Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs.
              From concept to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobile Layout - Simple Vertical List (KEEP THIS) */}
      <div className="md:hidden w-full px-4">
        <div className="max-w-md mx-auto w-full">
          {/* Service Cards */}
          <div className="py-8 space-y-6 w-full">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-blue-200 overflow-hidden w-full"
                >
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Icon className="text-2xl text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-md hover:shadow-lg"
                    >
                      <FaWhatsapp className="text-xl" />
                      Get {service.title}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile CTA */}
          <div className="py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 text-center text-white"
            >
              <h3 className="text-xl font-bold mb-4">Need Custom Solutions?</h3>
              <p className="text-blue-100 mb-6">
                We can tailor our services to meet your specific business requirements.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-white text-blue-900 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-3 text-lg"
              >
                <FaWhatsapp className="text-xl" />
                Discuss Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - REVERTED TO ORIGINAL */}
      <div className="hidden md:block">
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Service List - Left Side */}
              <div className="space-y-4 lg:space-y-6">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      id={service.id}
                      key={service.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 md:p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeService === index
                          ? 'bg-blue-600 text-white shadow-lg scale-[1.02]'
                          : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                      }`}
                      onClick={() => handleServiceClick(index)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start">
                        <Icon
                          className={`text-xl md:text-2xl mr-3 md:mr-4 mt-1 md:mt-0 ${
                            activeService === index ? 'text-white' : 'text-blue-600'
                          }`}
                        />
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1 md:mb-2">{service.title}</h3>
                          <p className={`text-xs md:text-sm lg:text-base ${
                            activeService === index ? 'text-blue-100' : 'text-gray-600'
                          }`}>
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Service Details - Right Side */}
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 border border-blue-100"
              >
                <div className="mb-4 md:mb-6">
                  <ActiveIcon className="text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-3 md:mb-4" />
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-3 md:mb-4">
                    {services[activeService].title}
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6">
                    {services[activeService].description}
                  </p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-blue-900 mb-3 md:mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-700 text-sm md:text-base"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center text-sm md:text-base w-full md:w-auto justify-center"
                  >
                    Get This Service
                    <FaArrowRight className="ml-2" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services