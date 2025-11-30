// src/pages/Testimonials.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Mison khatiwoda',
      company: 'TechCorp Inc.',
      role: 'CEO',
      image: '/mockup-images/client1.jpg',
      content: 'YodhaSolution transformed our digital presence. Their team delivered exceptional results beyond our expectations.',
      rating: 5
    },
    {
      name: 'Bipin lamsal',
      company: 'StartUp Ventures',
      role: 'Founder',
      image: '/mockup-images/client2.jpg',
      content: 'The mobile app they developed for us has been a game-changer. Professional, timely, and high-quality work.',
      rating: 5
    },
    // {
    //   name: 'Emily Rodriguez',
    //   company: 'Global Retail',
    //   role: 'Marketing Director',
    //   image: '/mockup-images/client3.jpg',
    //   content: 'Outstanding service from start to finish. Their attention to detail and commitment to quality is impressive.',
    //   rating: 5
    // },
    // {
    //   name: 'David Thompson',
    //   company: 'FinancePro',
    //   role: 'CTO',
    //   image: '/mockup-images/client4.jpg',
    //   content: 'The cloud solutions implemented by YodhaSolution have significantly improved our operational efficiency.',
    //   rating: 5
    // }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

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
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about their experience working with YodhaSolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-50 rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <FaQuoteLeft className="text-blue-600 text-4xl mb-6" />
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-blue-600">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-colors"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition-colors"
            >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">98%</div>
              <div className="text-blue-100 text-lg">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">5+</div>
              <div className="text-blue-100 text-lg">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">4.9/5</div>
              <div className="text-blue-100 text-lg">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials