// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // WhatsApp configuration
  const whatsappNumber = '9779845052953'
  const whatsappMessage = 'Hello YodhaSolution! I would like to discuss a project with you.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const services = [
    { name: 'Web Development', path: '/services#web' },
    { name: 'Mobile Development', path: '/services#mobile-development' },
    { name: 'Digital Marketing', path: '/services#digital-marketing' },
    { name: 'SEO Optimization', path: '/services#seo-optimization' },
    { name: 'UI/UX Design', path: '/services#ui-ux-design' }
  ]

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: services
    },
    { name: 'Projects', path: '/projects' },
    // { name: 'Testimonials', path: '/testimonials' },
    // { name: 'Contact', path: '/contact' },
  ]

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`main-nav ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'white',
          borderBottom: scrolled ? '1px solid rgba(14, 165, 233, 0.1)' : '1px solid #e5e7eb',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="container">
          <div className="flex justify-between items-center py-0">
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="shrink-0"
              >
                <Link
                  to="/"
                  className="flex items-center"
                  onClick={() => {
                    setIsOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  <img
                    src="/logo22.png"
                    alt="YodhaSolution"
                    style={{
                      height: '65px',
                      width: 'auto',
                      filter: scrolled ? 'none' : 'brightness(0.9)'
                    }}
                  />
                  {/* <div className="ml-3">
                    <div style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      YodhaSolution
                    </div>
                    <div style={{
                      fontSize: '10px',
                      color: '#6b7280',
                      fontWeight: '500',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Digital Excellence
                    </div>
                  </div> */}
                </Link>
              </motion.div>

              {/* Desktop Menu - Moved to Left */}
              <div className="hidden lg:flex items-center space-x-1 ml-10">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.path}
                      className={`nav-link-desktop ${isActivePath(item.path) ? 'active' : ''}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 20px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        color: isActivePath(item.path) ? '#0284c7' : '#374151',
                        background: isActivePath(item.path) ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                        position: 'relative'
                      }}
                    >
                      {item.name}
                      {item.dropdown && (
                        <HiChevronDown
                          size={16}
                          style={{
                            marginLeft: '4px',
                            transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            style={{
                              position: 'absolute',
                              top: '100%',
                              left: '0',
                              minWidth: '220px',
                              background: 'white',
                              borderRadius: '12px',
                              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                              border: '1px solid rgba(14, 165, 233, 0.1)',
                              padding: '8px',
                              marginTop: '8px'
                            }}
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="dropdown-item"
                                style={{
                                  display: 'block',
                                  padding: '12px 16px',
                                  borderRadius: '6px',
                                  color: '#374151',
                                  fontWeight: '500',
                                  fontSize: '14px',
                                  transition: 'all 0.2s ease',
                                  textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.background = 'rgba(14, 165, 233, 0.1)'
                                  e.target.style.color = '#0284c7'
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.background = 'transparent'
                                  e.target.style.color = '#374151'
                                }}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: WhatsApp Button + Mobile Menu Toggle */}
            <div className="flex items-center">
              {/* WhatsApp Icon Button - Desktop Only */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block"
              >
                <button
                  onClick={handleWhatsAppClick}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "8px 16px",
                    background: "#E8FDEB",        // Light green background like screenshot
                    borderRadius: "50px",         // Pill shape
                    border: "1.5px solid #A6F4A1",// Light green outline
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                >
                  {/* Left Green Circle with Icon */}
                  <div
                    style={{
                      background: "#25D366",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaWhatsapp size={20} color="white" />
                  </div>

                  {/* Text */}
                  <div style={{ textAlign: "left", lineHeight: "1.1" }}>
                    <div style={{ fontWeight: "600", fontSize: "15px", color: "#25D366" }}>
                      WhatsApp Us
                    </div>
                    <div style={{ fontSize: "14px", color: "#333" }}>
                      +977-9845052953
                    </div>
                  </div>
                </button>
              </motion.div>


              {/* Mobile menu button */}
              <div className="lg:hidden">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="mobile-menu-button"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)'
                  }}
                >
                  {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Separate from fixed navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '80px', // Fixed top position
              left: 0,
              right: 0,
              background: 'white',
              borderRadius: '0',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              borderTop: '1px solid #e5e7eb',
              overflowY: 'auto',
              zIndex: 999,
              padding: '16px',
              maxHeight: 'calc(100vh - 80px)'
            }}
          >
            <div style={{ padding: '0' }}>
              <div className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => {
                        if (!item.dropdown) {
                          setIsOpen(false)
                          setActiveDropdown(null)
                        } else {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        }
                      }}
                      className="nav-link-mobile"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'between',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        color: isActivePath(item.path) ? '#0284c7' : '#374151',
                        background: isActivePath(item.path) ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        marginBottom: '4px'
                      }}
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <HiChevronDown
                          size={16}
                          style={{
                            marginLeft: 'auto',
                            transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                      )}
                    </Link>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{
                            paddingLeft: '16px',
                            marginBottom: '4px',
                            overflow: 'hidden'
                          }}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              onClick={() => {
                                setIsOpen(false)
                                setActiveDropdown(null)
                              }}
                              className="dropdown-item-mobile"
                              style={{
                                display: 'block',
                                padding: '10px 16px',
                                borderRadius: '6px',
                                color: '#6b7280',
                                fontWeight: '500',
                                fontSize: '14px',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                borderLeft: '2px solid #e5e7eb',
                                marginBottom: '4px'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(14, 165, 233, 0.05)'
                                e.target.style.color = '#0284c7'
                                e.target.style.borderLeftColor = '#0ea5e9'
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.background = 'transparent'
                                e.target.style.color = '#6b7280'
                                e.target.style.borderLeftColor = '#e5e7eb'
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile WhatsApp Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{ marginTop: '18px' }}
                >
                  <button
                    onClick={handleWhatsAppClick}
                    className="whatsapp-button-mobile"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '14px 20px',
                      background: 'green',
                      color: 'white',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '16px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      width: '100%',
                      gap: '8px'
                    }}
                  >
                    <FaWhatsapp size={18} />
                    <span>Chat on WhatsApp</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add some padding to account for fixed navbar */}
      <div style={{ height: '80px' }} />
    </>
  )
}

export default Navbar