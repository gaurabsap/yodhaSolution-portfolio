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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive digital solutions tailored to your business needs. 
              From concept to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Service List */}
            <div className="space-y-4 sm:space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    id={service.id}
                    key={service.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 sm:p-6 rounded-lg cursor-pointer transition-all ${
                      activeService === index
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                    }`}
                    onClick={() => handleServiceClick(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start sm:items-center">
                      <Icon
                        className={`text-xl sm:text-2xl mr-3 sm:mr-4 mt-1 sm:mt-0 ${
                          activeService === index ? 'text-white' : 'text-blue-600'
                        }`} 
                      />
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{service.title}</h3>
                        <p className={`text-sm sm:text-base ${activeService === index ? 'text-blue-100' : 'text-gray-600'}`}>
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
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-blue-100"
            >
              <div className="mb-6">
                <ActiveIcon className="text-3xl sm:text-4xl text-blue-600 mb-4" />
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                  {services[activeService].title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                  {services[activeService].description}
                </p>
              </div>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-700 text-sm sm:text-base"
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
                  className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  Get This Service
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">Our Process</h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              How we deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your needs and goals' },
              { step: '02', title: 'Planning', description: 'Create detailed project roadmap' },
              { step: '03', title: 'Development', description: 'Build with agile methodology' },
              { step: '04', title: 'Delivery', description: 'Deploy and provide support' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl shadow-sm sm:shadow-md px-4 py-5 sm:px-5 sm:py-6 lg:px-6 lg:py-7"
              >
                <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-base sm:text-lg lg:text-xl font-bold mx-auto mb-3 sm:mb-4">
                  {process.step}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-1 sm:mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base px-1 sm:px-2">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services