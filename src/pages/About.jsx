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
      description: 'Comprehensive digital marketing strategies to grow your business'
    },
    {
      icon: FaShieldAlt,
      title: 'Seo Optimization',
      description: 'Improve your search engine rankings and online visibility'
    }
  ]

  const team = [
    // Position 1: Top Center
    {
      name: 'Kritan Nuire',
      role: 'Project Manager',
      image: './kritan.jpg',
      expertise: ['Agile', 'Scrum', 'Client Relations'],
      gradient: 'from-orange-500 to-red-500'
    },
    // Position 2: Left (Row 2, Col 1)
    {
      name: 'Gaurab Sapkota',
      role: 'Full Stack Developer',
      image: './mee.jpeg',
      expertise: ['React', 'Node.js', 'AWS'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    // Position 3: Right (Row 2, Col 2)
    {
      name: 'Awash baral',
      role: 'Ui/UX`s Designer',
      image: './awash.png',
      expertise: ['figma','adobe xd','photoshop','illustrator'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Mison Khatiwada',
      role: 'Full Stack Developer',
      image: './meson.jpg',
      expertise: ['Node', 'Express', 'MongoDB', 'React'],
      gradient: 'from-purple-500 to-pink-500'
    },
    // Position 4: Left (Row 3, Col 1)
    {
      name: 'Anjil Pandit',
      role: 'DevOps Engineer',
      image: '/mockup-images/team3.jpg',
      expertise: ['Docker', 'Kubernetes', 'CI/CD'],
      gradient: 'from-green-500 to-teal-500'
    },
    // Position 5: Right (Row 3, Col 2)
    {
      name: 'Amish Lamsal',
      role: 'DevOps Learner',
      image: '/mockup-images/team5.jpg',
      expertise: ['Docker', 'CI/CD', 'GO'],
      gradient: 'from-green-500 to-teal-500'
    },
    // Position 6: We'll exclude Awash Baral to match the 5-person layout
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#0A64BC] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6  bg-clip-text text-white">
              About YodhaSolution
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                At YodhaSolution, we believe in the transformative power of technology. 
                Our mission is to empower businesses with innovative digital solutions 
                that solve real-world problems and create lasting impact.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We combine technical expertise with creative thinking to deliver 
                solutions that are not just functional, but exceptional. Every project 
                is an opportunity to push boundaries and set new standards.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 items-center justify-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center px-2"
                  >
                    <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 sm:p-6 rounded-xl border border-blue-100 text-center sm:text-left w-full flex flex-col items-center sm:items-start justify-start"
                >
                  <service.icon className="text-xl sm:text-2xl text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${value.color} p-0.5 sm:p-1 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl h-full`}>
                  <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 text-center h-full flex flex-col">
                    <div className={`inline-flex items-center justify-center w-9 sm:w-12 md:w-16 h-9 sm:h-12 md:h-16 rounded-full bg-gradient-to-r ${value.color} mb-2 sm:mb-3 md:mb-4 mx-auto flex-shrink-0`}>
                      <value.icon className="text-sm sm:text-lg md:text-2xl text-white" />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-lg font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3 leading-tight">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-xs md:text-sm text-gray-600 leading-snug flex-grow">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </motion.div>

          {/* Custom layout for pyramid structure */}
          <div className="flex flex-col items-center space-y-12">
            {/* Row 1: Top Center (Position 1) - Kritan Nuire */}
            <div className="w-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                className="group w-full max-w-md"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 group-hover:shadow-xl">
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
                  <div className="p-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-1">
                      <img
                        src="/kritan.jpg"
                        alt="Kritan Nuire"
                        className="w-full h-full rounded-full object-cover border-4 border-white"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Kritan Nuire
                    </h3>
                    <p className="text-blue-600 font-medium text-lg mb-4">Project Manager</p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {['Agile', 'Scrum', 'Client Relations'].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full font-medium"
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
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {team.slice(1, 3).map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 group-hover:shadow-xl">
                      <div className={`h-2 bg-gradient-to-r ${member.gradient}`}></div>
                      <div className="p-6 text-center">
                        <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${member.gradient} p-1`}>
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full rounded-full object-cover border-2 border-white"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                        
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
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

            {/* Row 3: Two members side by side (Positions 4 & 5) */}
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {team.slice(3, 5).map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 group-hover:shadow-xl">
                      <div className={`h-2 bg-gradient-to-r ${member.gradient}`}></div>
                      <div className="p-6 text-center">
                        <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${member.gradient} p-1`}>
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full rounded-full object-cover border-2 border-white"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                        
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life with innovative digital solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
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