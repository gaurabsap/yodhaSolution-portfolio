// src/pages/Home.jsx
import React from 'react'
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
  FaHeadset
} from 'react-icons/fa'

const Home = () => {
  const features = [
    {
      icon: FaRocket,
      title: 'Fast Development',
      description: 'Rapid and efficient development process with agile methodology'
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Solutions',
      description: 'Enterprise-grade security protocols for all your applications'
    },
    {
      icon: FaChartLine,
      title: 'High Performance',
      description: 'Optimized solutions for exceptional speed and scalability'
    },
    {
      icon: FaMobileAlt,
      title: 'Responsive Design',
      description: 'Flawless experience across all devices and platforms'
    }
  ]

  const stats = [
    { number: '5+', label: 'Projects Completed', icon: FaStar },
    { number: '3+', label: 'Happy Clients', icon: FaUsers },
    { number: '1+', label: 'Years Experience', icon: FaCalendarAlt },
    { number: '24/7', label: 'Support', icon: FaHeadset }
  ]

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }} className='pt-20'>
      
        {/* Background Image from Unsplash - Technology/Code Theme */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          {/* Dark Overlay for better text readability */}
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
              background: 'linear-gradient(135deg, rgba(12, 74, 110, 0.8) 0%, rgba(14, 165, 233, 0.6) 100%)'
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
              backdropFilter: 'blur(10px)'
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
              backdropFilter: 'blur(10px)'
            }}
          />
          <motion.div
            animate={{
              x: [0, 15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            style={{
              position: 'absolute',
              top: '60%',
              left: '20%',
              width: '40px',
              height: '40px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)'
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
                  fontSize: 'clamp(3.5rem, 3vw, 2rem)',
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1.2,
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                Transform Your
              </motion.h1>
              
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{
                    fontSize: 'clamp(2.5rem, 3vw, 2rem)',
                    display: 'block',
                    background: 'linear-gradient(135deg, #7dd3fc, #e0f2fe)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Digital Presence
                </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{
                  fontSize: '1.25rem',
                  color: '#e0f2fe',
                  marginBottom: '2rem',
                  maxWidth: '600px',
                  margin: '0 auto 2rem auto',
                  lineHeight: 1.6,
                  textShadow: '0 1px 5px rgba(0, 0, 0, 0.3)'
                }}
              >
                We deliver innovative digital solutions that drive growth and success for your business. 
                Experience the power of cutting-edge technology with YodhaSolution.
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
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '1rem 2rem',
                      background: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
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
                    Get Started
                    <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                  </Link>
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
                    Our Services
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

      {/* Rest of the sections remain the same */}
      <section style={{ padding: '80px 0', background: 'white' }}>
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
              Why Choose YodhaSolution?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              We combine expertise with innovation to deliver exceptional results
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  <feature.icon />
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#0c4a6e',
                  marginBottom: '0.75rem'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: 1.6
                }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0c4a6e 0%, #075985 100%)',
        color: 'white',
        padding: '5rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem'
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
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <stat.icon style={{ 
                    fontSize: '2rem', 
                    color: '#7dd3fc',
                    marginRight: '0.5rem'
                  }} />
                  <div style={{
                    fontSize: '2.5rem',
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

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#e0f2fe',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}>
              Let's discuss how we can help you achieve your digital goals
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                background: 'white',
                color: '#0ea5e9',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '16px'
              }}
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home