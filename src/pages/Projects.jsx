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
      <section className="gradient-blue py-20 text-white bg-[#0A64BC]">
        <div className="container bg-blend-hue">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our current and upcoming projects. We're constantly working on new innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-white py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group transition-all duration-300 hover:shadow-xl"
              >
                {/* Project Image Container */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
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
                        size={48} 
                        className="text-blue-400 opacity-70" 
                      />
                    </div>
                  )}
                  
                  {/* Overlay with buttons on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLiveDemo(project.liveUrl)}
                      disabled={!project.liveUrl || project.liveUrl === '#'}
                      className={`bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                        (!project.liveUrl || project.liveUrl === '#') 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-blue-50'
                      }`}
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleGithub(project.githubUrl)}
                      disabled={!project.githubUrl || project.githubUrl === '#'}
                      className={`bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                        (!project.githubUrl || project.githubUrl === '#') 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <FaGithub size={14} />
                      Code
                    </motion.button>
                  </motion.div>

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium border ${
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
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <project.icon className="text-blue-500 mr-2" size={18} />
                    <span className="text-blue-600 text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleLiveDemo(project.liveUrl)}
                      disabled={!project.liveUrl || project.liveUrl === '#'}
                      className={`flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                        (!project.liveUrl || project.liveUrl === '#') 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-blue-700'
                      }`}
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleGithub(project.githubUrl)}
                      disabled={!project.githubUrl || project.githubUrl === '#'}
                      className={`bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                        (!project.githubUrl || project.githubUrl === '#') 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-gray-200'
                      }`}
                    >
                      <FaGithub size={14} />
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
      </section>
    </div>
  )
}

export default Projects