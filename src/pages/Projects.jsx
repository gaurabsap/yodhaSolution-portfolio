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
    <div>
      {/* Hero Section */}
      <section className="gradient-blue py-16 sm:py-20 md:py-24 text-white bg-[#0A64BC]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Our Projects
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
                Explore our current and upcoming projects. We're constantly working on new innovations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Projects Grid - 1 column mobile, 2 columns desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="bg-white rounded-lg sm:rounded-lg md:rounded-xl shadow-md sm:shadow-lg border border-gray-100 overflow-hidden group transition-all duration-300 hover:shadow-xl flex flex-col"
                >
                  {/* Project Image Container */}
                  <div className="relative w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <project.icon 
                          size={36} 
                          className="text-blue-400 opacity-70"
                        />
                      </div>
                    )}
                    
                    {/* Overlay with buttons on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-50 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleLiveDemo(project.liveUrl)}
                        disabled={!project.liveUrl || project.liveUrl === '#'}
                        className={`bg-white text-blue-600 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-xs sm:text-sm md:text-base whitespace-nowrap ${
                          (!project.liveUrl || project.liveUrl === '#') 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-blue-50'
                        }`}
                      >
                        <FaExternalLinkAlt size={12} />
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Live</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleGithub(project.githubUrl)}
                        disabled={!project.githubUrl || project.githubUrl === '#'}
                        className={`bg-white text-gray-700 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-xs sm:text-sm md:text-base whitespace-nowrap ${
                          (!project.githubUrl || project.githubUrl === '#') 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <FaGithub size={12} />
                        <span className="hidden sm:inline">Code</span>
                      </motion.button>
                    </motion.div>

                    {/* Status Badge */}
                    <div className={`absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-xs md:text-sm font-medium border ${
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
                  <div className="w-full p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <project.icon className="text-blue-500 flex-shrink-0" size={14} />
                      <span className="text-blue-600 text-xs sm:text-xs md:text-sm font-semibold truncate">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-3.5 md:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies - Truncated for mobile */}
                    <div className="mb-3 sm:mb-3.5 md:mb-4 w-full">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-700 text-xs md:text-xs rounded-full font-medium border border-blue-100 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-700 text-xs md:text-xs rounded-full font-medium border border-blue-100 whitespace-nowrap">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="w-full flex gap-2 sm:gap-2.5 md:gap-3 mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleLiveDemo(project.liveUrl)}
                        disabled={!project.liveUrl || project.liveUrl === '#'}
                        className={`flex-1 bg-blue-600 text-white py-1.5 sm:py-2 md:py-2.5 px-2 sm:px-3 md:px-4 rounded-lg font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all text-xs sm:text-sm md:text-base min-h-10 sm:min-h-10 md:min-h-11 ${
                          (!project.liveUrl || project.liveUrl === '#') 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-blue-700'
                        }`}
                      >
                        <FaExternalLinkAlt size={12} />
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Live</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleGithub(project.githubUrl)}
                        disabled={!project.githubUrl || project.githubUrl === '#'}
                        className={`bg-gray-100 text-gray-700 py-1.5 sm:py-2 md:py-2.5 px-2 sm:px-3 md:px-4 rounded-lg font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all text-xs sm:text-sm md:text-base min-h-10 sm:min-h-10 md:min-h-11 ${
                          (!project.githubUrl || project.githubUrl === '#') 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-gray-200'
                        }`}
                      >
                        <FaGithub size={12} />
                        <span className="hidden sm:inline">Code</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="bg-blue-50 rounded-2xl p-8 max-w-md mx-auto">
                  <FaCode className="text-blue-400 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Projects Coming Soon
                  </h3>
                  <p className="text-gray-600">
                    We're currently working on some amazing projects. Check back soon to see our work!
                  </p>
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