// src/pages/About.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaCode,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp,
  FaUsers as FaTeam,
  FaBullseye,
  FaHandshake
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  const [activeSection, setActiveSection] = useState('mission')

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
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Working as partners with our clients to achieve shared success',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: FaLightbulb,
      title: 'Excellence',
      description: 'Delivering quality that exceeds expectations in every project',
      color: 'from-blue-700 to-blue-500'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Loving what we do and putting our heart into every solution',
      color: 'from-blue-800 to-blue-600'
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
      description: 'Comprehensive digital marketing strategies to grow your business'
    },
    {
      icon: FaShieldAlt,
      title: 'Seo Optimization',
      description: 'Improve your search engine rankings and online visibility'
    }
  ]

  const team = [
    {
      name: 'Kritan Nuire',
      role: 'Project Manager',
      image: './kritan.jpg',
      expertise: ['Agile', 'Scrum', 'Client Relations'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Gaurab Sapkota',
      role: 'Full Stack Developer',
      image: './mee.jpeg',
      expertise: ['React', 'Node.js', 'AWS'],
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Awash baral',
      role: 'Ui/UX`s Designer',
      image: './awash.png',
      expertise: ['figma','adobe xd','photoshop','illustrator'],
      gradient: 'from-blue-700 to-blue-500'
    },
    {
      name: 'Mison Khatiwada',
      role: 'Full Stack Developer',
      image: './meson.jpg',
      expertise: ['Node', 'Express', 'MongoDB', 'React'],
      gradient: 'from-blue-800 to-blue-600'
    },
    {
      name: 'Anjil Pandit',
      role: 'DevOps Engineer',
      image: '/mockup-images/team3.jpg',
      expertise: ['Docker', 'Kubernetes', 'CI/CD'],
      gradient: 'from-blue-900 to-blue-700'
    },
  ]

  const sections = [
    { id: 'mission', label: 'Our Mission', icon: FaBullseye },
    { id: 'values', label: 'Our Values', icon: FaHeart },
    { id: 'team', label: 'Our Team', icon: FaTeam },
  ]

  return (
    <div className="pt-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-[#0A64BC] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-white">
              About YodhaSolution
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed px-4">
              We are a dynamic team of innovators, creators, and problem-solvers
              dedicated to building digital solutions that drive your business forward.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-10 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce delay-75"></div>
      </section>

      {/* Mobile Navigation Tabs */}
      <div className="md:hidden sticky top-0 z-50 bg-white shadow-md">
        <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex-shrink-0 px-4 py-3 flex items-center gap-2 transition-colors ${
                activeSection === section.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              <section.icon className="text-sm" />
              <span className="text-sm font-medium whitespace-nowrap">{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Content Sections */}
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          {/* Mission Section - Mobile */}
          {activeSection === 'mission' && (
            <motion.section
              key="mission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-8 bg-white"
            >
              <div className="px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our <span className="text-blue-600">Mission</span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    At YodhaSolution, we believe in the transformative power of technology.
                    Our mission is to empower businesses with innovative digital solutions
                    that solve real-world problems and create lasting impact.
                  </p>
                  <p>
                    We combine technical expertise with creative thinking to deliver
                    solutions that are not just functional, but exceptional.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center bg-blue-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
                  <div className="space-y-3">
                    {services.map((service) => (
                      <div key={service.title} className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-3">
                          <service.icon className="text-blue-600 text-xl" />
                          <h4 className="font-semibold text-gray-900">{service.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Values Section - Mobile */}
          {activeSection === 'values' && (
            <motion.section
              key="values"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-8 bg-gradient-to-b from-gray-50 to-blue-50"
            >
              <div className="px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our <span className="text-blue-600">Values</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  The principles that guide everything we do
                </p>
                
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={value.title} className="bg-white rounded-xl shadow-sm border border-blue-100 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                          <value.icon className="text-white text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Team Section - Mobile */}
          {activeSection === 'team' && (
            <motion.section
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-8 bg-white"
            >
              <div className="px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Meet Our <span className="text-blue-600">Team</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Passionate professionals dedicated to your success
                </p>

                <div className="space-y-4">
                  {team.map((member) => (
                    <div key={member.name} className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
                      <div className="flex items-center gap-4 p-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${member.gradient} p-0.5`}>
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full rounded-full object-cover border-2 border-white"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900">{member.name}</h3>
                          <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                        </div>
                      </div>
                      
                      <div className="px-4 pb-4">
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Services Section - Mobile */}
          {activeSection === 'services' && (
            <motion.section
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-8 bg-gradient-to-b from-gray-50 to-blue-50"
            >
              <div className="px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
                <p className="text-gray-600 mb-6">
                  Comprehensive digital solutions for your business needs
                </p>

                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.title} className="bg-white rounded-xl shadow-sm border border-blue-100 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <service.icon className="text-blue-600 text-xl" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Mission Section - Desktop */}
        <section className="py-12 md:py-20 bg-white w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-4 md:space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">
                  Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed px-2">
                  At YodhaSolution, we believe in the transformative power of technology.
                  Our mission is to empower businesses with innovative digital solutions
                  that solve real-world problems and create lasting impact.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed px-2">
                  We combine technical expertise with creative thinking to deliver
                  solutions that are not just functional, but exceptional. Every project
                  is an opportunity to push boundaries and set new standards.
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6 px-2">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 px-2"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 md:p-6 rounded-xl border border-blue-100 text-center"
                  >
                    <service.icon className="text-2xl md:text-3xl text-blue-600 mx-auto mb-2 md:mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{service.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section - Desktop */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-8 md:mb-16 px-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-0">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group w-full"
                >
                  <div className="bg-white border border-blue-500 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl h-full">
                    <div className="p-6 md:p-8 text-center h-full flex flex-col items-center">
                      <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${value.color} mb-4 md:mb-6`}>
                        <value.icon className="text-2xl md:text-2xl text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Desktop (REVERTED TO OLD LAYOUT) */}
        <section className="py-12 md:py-20 bg-white w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-8 md:mb-16 px-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Meet Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Passionate professionals dedicated to your success
              </p>
            </motion.div>

            {/* Custom layout for pyramid structure - OLD LAYOUT */}
            <div className="flex flex-col items-center space-y-8 md:space-y-12">
              {/* Row 1: Top Center (Position 1) - Kritan Nuire */}
              <div className="w-full flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  className="group w-full max-w-sm md:max-w-md"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-500 transition-all duration-300 group-hover:shadow-xl">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    <div className="p-6 md:p-8 text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
                        <img
                          src="/kritan.jpg"
                          alt="Kritan Nuire"
                          className="w-full h-full rounded-full object-cover border-4 border-white"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        Kritan Nuire
                      </h3>
                      <p className="text-blue-600 font-medium text-base md:text-lg mb-3 md:mb-4">Project Manager</p>

                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {['Agile', 'Scrum', 'Client Relations'].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 md:px-3 md:py-1 bg-blue-50 text-blue-700 text-xs md:text-sm rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Row 2: Two members side by side (Positions 2 & 3) */}
              <div className="w-full max-w-2xl md:max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {team.slice(1, 3).map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-500 transition-all duration-300 group-hover:shadow-xl">
                        <div className={`h-2 bg-gradient-to-r ${member.gradient}`}></div>
                        <div className="p-4 md:p-6 text-center">
                          <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-r ${member.gradient} p-1`}>
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover border-2 border-white"
                            />
                          </div>
                          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                            {member.name}
                          </h3>
                          <p className="text-blue-600 font-medium text-sm md:text-base mb-3 md:mb-4">{member.role}</p>

                          <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-4">
                            {member.expertise.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
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

              {/* Row 3: Three members side by side (Positions 4, 5 & 6) */}
              <div className="w-full max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {team.slice(3, 6).map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-500 transition-all duration-300 group-hover:shadow-xl">
                        <div className={`h-2 bg-gradient-to-r ${member.gradient}`}></div>
                        <div className="p-4 md:p-6 text-center">
                          <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-r ${member.gradient} p-1`}>
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover border-2 border-white"
                            />
                          </div>

                          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                            {member.name}
                          </h3>

                          <p className="text-blue-600 font-medium text-sm md:text-base mb-3 md:mb-4">
                            {member.role}
                          </p>

                          <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-4">
                            {member.expertise.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
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

            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-2">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
              Let's work together to bring your ideas to life with innovative digital solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              <Link to="https://api.whatsapp.com/send/?phone=9779845052953&text=Hello+YodhaSolution%21+I+would+like+to+discuss+a+project+with+you.&type=phone_number&app_absent=0" target='_blank'>
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