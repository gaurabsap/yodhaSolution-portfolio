// src/pages/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaRocket, 
  FaUsers, 
  FaLightbulb, 
  FaHeart,
  FaCode,
  FaMobile,
  FaCloud,
  FaShieldAlt
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  const stats = [
    { number: '5+', label: 'Projects Completed' },
    { number: '3+', label: 'Happy Clients' },
    { number: '5+', label: 'Team Members' },
    { number: '98%', label: 'Client Satisfaction' }
  ]

  const values = [
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and modern approaches',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Working as partners with our clients to achieve shared success',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaLightbulb,
      title: 'Excellence',
      description: 'Delivering quality that exceeds expectations in every project',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Loving what we do and putting our heart into every solution',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications'
    },
    {
      icon: FaMobile,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions'
    },
    {
      icon: FaCloud,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies'
    },
    {
      icon: FaShieldAlt,
      title: 'Seo Optimization',
      description: 'Improve your search engine rankings and online visibility'
    }
  ]

  const team = [
    {
      name: 'Gaurab sapkota',
      role: 'Full Stack Developer',
      image: '/mockup-images/team1.jpg',
      expertise: ['React', 'Node.js', 'AWS'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Mison  Khatiwada',
      role: 'Full Stack Developer',
      image: '/mockup-images/team2.jpg',
      expertise: ['node', 'express','mongodb','React'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Anjil pandit',
      role: 'DevOps Engineer',
      image: '/mockup-images/team3.jpg',
      expertise: ['Docker', 'Kubernetes', 'CI/CD'],
      gradient: 'from-green-500 to-teal-500'
    },
        {
      name: 'Amish Lamsal',
      role: 'DevOps Learner',
      image: '/mockup-images/team5.jpg',
      expertise: ['Docker','CI/CD','GO'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      name: 'Kritan nuire',
      role: 'Project Manager',
      image: '/mockup-images/team4.jpg',
      expertise: ['Agile', 'Scrum', 'Client Relations'],
      gradient: 'from-orange-500 to-red-500'
    },
        {
      name: 'Awash Baral',
      role: 'UI/UX',
      image: '/mockup-images/team6.jpg',
      expertise: ['Agile', 'Scrum', 'Client Relations'],
      gradient: 'from-orange-500 to-red-500'
    },
    
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              About YodhaSolution
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
              We are a dynamic team of innovators, creators, and problem-solvers 
              dedicated to building digital solutions that drive your business forward.
            </p>
          </motion.div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce delay-75"></div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
            {/* Mission copy + stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-5 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                At YodhaSolution, we believe in the transformative power of technology. 
                Our mission is to empower businesses with innovative digital solutions 
                that solve real-world problems and create lasting impact.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                We combine technical expertise with creative thinking to deliver 
                solutions that are not just functional, but exceptional. Every project 
                is an opportunity to push boundaries and set new standards.
              </p>
              
              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 sm:pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center lg:text-left bg-blue-50 lg:bg-transparent rounded-xl lg:rounded-none py-3 sm:py-4 lg:py-0 px-2 lg:px-0"
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-[11px] sm:text-xs lg:text-sm text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key capabilities cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-5 lg:p-6 rounded-xl border border-blue-100 text-left sm:text-center lg:text-left flex sm:block lg:flex items-start sm:items-center lg:items-start gap-3 sm:gap-0 lg:gap-4"
                >
                  <div className="flex-shrink-0 sm:mb-3">
                    <service.icon className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 mx-auto" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div
                  className={`bg-gradient-to-br ${value.color} p-[1px] rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                >
                  <div className="bg-white rounded-2xl px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6 h-full flex items-start sm:block lg:flex gap-3 sm:gap-0 lg:gap-4 text-left sm:text-center lg:text-left">
                    <div className="flex-shrink-0 sm:mb-3">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r ${value.color}`}
                      >
                        <value.icon className="text-lg sm:text-xl lg:text-2xl text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                        {value.title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Passionate professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group"
              >
                <div
                  className={`bg-gradient-to-br ${member.gradient} p-[1px] rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl h-full`}
                >
                  <div className="bg-white rounded-2xl px-4 py-5 sm:px-5 sm:py-6 h-full flex flex-col items-center text-center">
                    <div className="mb-3 sm:mb-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3">
                      {member.role}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Let's work together to bring your ideas to life with innovative digital solutions.
            </p>
            <motion.button
            
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              <Link to="/contact">
                Get In Touch
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About