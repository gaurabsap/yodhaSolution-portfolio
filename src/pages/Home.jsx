// src/pages/Home.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaRocket, 
  FaShieldAlt, 
  FaChartLine, 
  FaMobileAlt,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaCalendarAlt,
  FaHeadset,
  FaCogs,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaCode,
  FaSearch,
  FaPalette
} from 'react-icons/fa'
import { FaBullhorn, FaMobile } from 'react-icons/fa6'

const Home = () => {
  
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom websites and web applications that drive business growth'
    },
    {
      icon: FaMobile,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android'
    },
    {
      icon: FaCogs,
      title: 'System Integration',
      description: 'Seamless integration of existing systems and third-party services'
    },
    {
      icon: FaBullhorn,
      title: 'Digital marketing',
      description: 'Data-driven marketing strategies to boost your online visibility'
    },
    {
      icon: FaSearch,
      title: 'Seo Optimization',
      description: 'Enhance your online presence and drive organic traffic to your site'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'User-centric designs that enhance user experience and engagement'
    }
  ]

  const stats = [
    { number: '5+', label: 'Projects Completed', icon: FaStar },
    { number: '3+', label: 'Happy Clients', icon: FaUsers },
    { number: '1+', label: 'Years Experience', icon: FaCalendarAlt },
    { number: '24/7', label: 'Support', icon: FaHeadset }
  ]

  const industries = [
    'Healthcare',
    'Finance',
    'E-commerce',
    'Education',
    'Manufacturing',
    'Logistics',
    'Hospitality'
  ]
    // WhatsApp configuration
    
  const whatsappNumber = '9779845052953'
  const whatsappMessage = 'Hello YodhaSolution! I would like to discuss a project with you.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div>
      {/* Hero Section with Service-Based Theme */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }} className='pt-20'>
      
        {/* Service-Oriented Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          {/* Professional Blue Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, #0A64BC, #0369a1)'
            }}
          />
          
          {/* Animated floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              position: 'absolute',
              bottom: '30%',
              right: '15%',
              width: '30px',
              height: '30px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          />
        </div>
        
        {/* Content */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1.2,
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  marginBottom: '1rem'
                }}
              >
                Professional IT Solutions for
              </motion.h1>
              
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  display: 'block',
                  background: 'linear-gradient(135deg, #7dd3fc, #e0f2fe)',
                  WebkitBackgroundClip: 'text',
                  blockSize: 'unset',
                  // WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1.5rem',
                  color: 'transparent',
                }}
              >
                Growing Businesses
              </motion.span>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{
                  fontSize: '1.25rem',
                  color: '#e0f2fe',
                  marginBottom: '2rem',
                  maxWidth: '700px',
                  margin: '0 auto 2rem auto',
                  lineHeight: 1.6,
                  textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)'
                }}
              >
                We provide comprehensive technology services that empower businesses 
                to innovate, grow, and succeed in the digital age. From custom software 
                development to strategic IT consulting.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}
              >
                {/* Get Started Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={handleWhatsAppClick}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '1rem 2rem',
                      background: 'transparent',
                      color: 'white',
                      borderRadius: '8px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      fontSize: '16px',
                      boxShadow: '0 8px 25px rgba(14, 165, 233, 0.4)',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    Contact Us at WhatApp 
                    <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                  </button>
                </motion.div>
                
                {/* Our Services Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/services"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '1rem 2rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '8px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      fontSize: '16px',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    Explore Our Services
                  </Link>
                </motion.div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{
                  marginTop: '3rem',
                  color: '#bae6fd',
                  fontSize: '0.875rem'
                }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    display: 'inline-block'
                  }}
                >
                  Scroll to explore ↓
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#0c4a6e',
              marginBottom: '1rem'
            }}>
              Our Professional Services
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  padding: '2rem 1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  <service.icon />
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#0c4a6e',
                  marginBottom: '0.75rem'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {service.description}
                </p>
                <Link
                  to="/services"
                  style={{
                    color: '#0ea5e9',
                    fontWeight: '500',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Learn more <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#0c4a6e',
              marginBottom: '1rem'
            }}>
              Industries We Serve
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Expertise across multiple sectors to deliver tailored solutions
            </p>
          </motion.div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            {industries.map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#f0f9ff',
                  color: '#0369a1',
                  borderRadius: '25px',
                  fontWeight: '500',
                  border: '2px solid #bae6fd'
                }}
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: '#0A64BC',
        color: 'white',
        padding: '5rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Trusted by Industry Leaders
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#e0f2fe',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Delivering excellence and building lasting partnerships
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <stat.icon style={{ 
                    fontSize: '2.5rem', 
                    color: '#7dd3fc',
                    marginBottom: '1rem'
                  }} />
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#e0f2fe'
                  }}>
                    {stat.number}
                  </div>
                </div>
                <div style={{
                  color: '#bae6fd',
                  fontWeight: '500',
                  fontSize: '1.1rem'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#0c4a6e',
              marginBottom: '1rem'
            }}>
              Our Process
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              A structured approach to ensure project success
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your business needs and goals' },
              { step: '02', title: 'Planning', desc: 'Create detailed project roadmap and strategy' },
              { step: '03', title: 'Development', desc: 'Build and implement the solution' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and optimization' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: index % 2 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#0ea5e9',
                  marginBottom: '1rem'
                }}>
                  {process.step}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#0c4a6e',
                  marginBottom: '0.75rem'
                }}>
                  {process.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  )
}

export default Home