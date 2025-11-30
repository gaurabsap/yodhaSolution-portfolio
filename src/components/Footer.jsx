// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <img
                src="/logo22.png"
                alt="YodhaSolution"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold">YodhaSolution</span>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              We provide cutting-edge solutions to help businesses thrive in the digital age. 
              Our team of experts is dedicated to delivering exceptional results.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-blue-200">
                <FaMapMarkerAlt className="mr-3" />
                <span>munal chowk, Bharatpur, Nepal</span>
              </div>
              <div className="flex items-center text-blue-200">
                <FaPhone className="mr-3" />
                <span>+977 (984) 5097315</span>
              </div>
              <div className="flex items-center text-blue-200">
                <FaEnvelope className="mr-3" />
                <span>info@yodhasolution.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © {currentYear} YodhaSolution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer