// src/pages/Projects.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaCode, FaMobile, FaPalette } from 'react-icons/fa'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with responsive design and secure payment integration.",
      image: "/ss.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
      category: "Web Development",
      icon: FaCode,
      status: "Live",
      liveUrl: "https://dropdoko.com",
      githubUrl: "#"
    },
    {
      title: "Bharatpur town residential project",
      description: "A comprehensive hotel website featuring booking systems, Contact us page, and more.",
      image: "https://www.btr.com.np/assets/og-image.jpeg",
      technologies: ["React JS", "Node.js"],
      category: "Web Development",
      icon: FaCode,
      status: "Live",
      liveUrl: "https://btr.com.np",
      githubUrl: "#"
    },
    // {
    //   title: "Mobile Fitness App",
    //   description: "Cross-platform fitness tracking application with workout plans and progress analytics.",
    //   image: "/mockup-images/project2.jpg",
    //   technologies: ["React Native", "Firebase", "Redux"],
    //   category: "Mobile Development",
    //   icon: FaMobile,
    //   status: "Planning Phase",
    //   liveUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   title: "Corporate Website",
    //   description: "Professional corporate website with CMS integration and SEO optimization.",
    //   image: "/mockup-images/project3.jpg",
    //   technologies: ["Next.js", "Contentful", "Tailwind CSS"],
    //   category: "Web Design",
    //   icon: FaPalette,
    //   status: "Coming Soon",
    //   liveUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   title: "Task Management Tool",
    //   description: "Collaborative task management application with real-time updates and team features.",
    //   image: "/mockup-images/project4.jpg",
    //   technologies: ["Vue.js", "Socket.io", "PostgreSQL"],
    //   category: "Web Development",
    //   icon: FaCode,
    //   status: "Design Phase",
    //   liveUrl: "#",
    //   githubUrl: "#"
    // }
  ]

  const handleLiveDemo = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleGithub = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="gradient-blue py-16 sm:py-20 md:py-24 text-white bg-[#0A64BC] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center w-full"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Our Projects
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                Explore our current and upcoming projects. We're constantly working on new innovations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout - Flex for full width */}
            <div className="block sm:hidden">
              <div className="flex flex-col space-y-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group transition-all duration-300 flex flex-col"
                  >
                    {/* Project Image Container */}
                    <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <project.icon 
                            size={40} 
                            className="text-blue-400 opacity-70"
                          />
                        </div>
                      )}

                      {/* Status Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium border ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : project.status === 'Coming Soon'
                          ? 'bg-blue-100 text-blue-800 border-blue-200'
                          : project.status === 'Planning Phase'
                          ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                          : 'bg-purple-100 text-purple-800 border-purple-200'
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-col flex-grow p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <project.icon className="text-blue-500 flex-shrink-0" size={16} />
                        <span className="text-blue-600 text-sm font-semibold">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-5">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium border border-blue-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="w-full flex gap-3 mt-auto">
                        <button
                          onClick={() => handleLiveDemo(project.liveUrl)}
                          disabled={!project.liveUrl || project.liveUrl === '#'}
                          className={`flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                            (!project.liveUrl || project.liveUrl === '#') 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'hover:bg-blue-700'
                          }`}
                        >
                          <FaExternalLinkAlt size={14} />
                          Demo
                        </button>
                        
                        <button
                          onClick={() => handleGithub(project.githubUrl)}
                          disabled={!project.githubUrl || project.githubUrl === '#'}
                          className={`flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                            (!project.githubUrl || project.githubUrl === '#') 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          <FaGithub size={14} />
                          Code
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tablet & Desktop Layout - Grid */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    onHoverStart={() => setHoveredProject(index)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group transition-all duration-300 hover:shadow-2xl flex flex-col h-full"
                  >
                    {/* Project Image Container */}
                    <div className="relative w-full h-52 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                      {project.image ? (
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <project.icon 
                            size={40} 
                            className="text-blue-400 opacity-70"
                          />
                        </div>
                      )}
                      
                      {/* Overlay with buttons on hover - Desktop only */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 p-4 hidden md:flex"
                      >
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleLiveDemo(project.liveUrl)}
                          disabled={!project.liveUrl || project.liveUrl === '#'}
                          className={`bg-white text-blue-600 px-5 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                            (!project.liveUrl || project.liveUrl === '#') 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'hover:bg-blue-50'
                          }`}
                        >
                          <FaExternalLinkAlt size={14} />
                          Live Demo
                        </motion.button>
                      </motion.div>

                      {/* Status Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium border ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : project.status === 'Coming Soon'
                          ? 'bg-blue-100 text-blue-800 border-blue-200'
                          : project.status === 'Planning Phase'
                          ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                          : 'bg-purple-100 text-purple-800 border-purple-200'
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-col flex-grow p-5 md:p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <project.icon className="text-blue-500 flex-shrink-0" size={16} />
                        <span className="text-blue-600 text-sm font-semibold">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 mb-4 md:mb-5 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-5 md:mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium border border-blue-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons - Mobile & Tablet */}
                      <div className="w-full flex gap-3 mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleLiveDemo(project.liveUrl)}
                          disabled={!project.liveUrl || project.liveUrl === '#'}
                          className={`flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                            (!project.liveUrl || project.liveUrl === '#') 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'hover:bg-blue-700'
                          }`}
                        >
                          <FaExternalLinkAlt size={14} />
                          <span className="hidden md:inline">Live Demo</span>
                          <span className="md:hidden">Demo</span>
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleGithub(project.githubUrl)}
                          disabled={!project.githubUrl || project.githubUrl === '#'}
                          className={`flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                            (!project.githubUrl || project.githubUrl === '#') 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          <FaGithub size={14} />
                          <span className="hidden md:inline">View Code</span>
                          <span className="md:hidden">Code</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 md:py-20"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-blue-200">
                    <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <FaCode className="text-blue-500 text-3xl" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Exciting Projects Coming Soon!
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg mx-auto">
                      We're currently brewing some amazing digital solutions. 
                      Check back soon to see our innovative work in action!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                      >
                        View Our Services
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        Get In Touch
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects