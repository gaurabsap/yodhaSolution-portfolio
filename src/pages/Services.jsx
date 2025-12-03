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
  FaArrowRight
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

  // Set active service based on URL hash when component mounts
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

    // Smooth scroll to the element
    setTimeout(() => {
      const element = document.getElementById(serviceId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  const ActiveIcon = services[activeService].icon

  return (
    <div className="pt-1">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-[#0A64BC]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Our Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs.
              From concept to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Service List */}
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    id={service.id}
                    key={service.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 md:p-6 rounded-lg cursor-pointer transition-all ${activeService === index
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                      }`}
                    onClick={() => handleServiceClick(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start">
                      <Icon
                        className={`text-xl md:text-2xl mr-3 md:mr-4 mt-1 md:mt-0 ${activeService === index ? 'text-white' : 'text-blue-600'
                          }`}
                      />
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1 md:mb-2">{service.title}</h3>
                        <p className={`text-xs md:text-sm lg:text-base ${activeService === index ? 'text-blue-100' : 'text-gray-600'}`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Service Details */}
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
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center text-sm md:text-base w-full md:w-auto justify-center"
                >
                  Get This Service
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Services