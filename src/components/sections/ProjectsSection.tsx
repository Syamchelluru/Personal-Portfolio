"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Import images
import nighaImg from "../assets/nigha.png";
import revogueImg from "../assets/revogue-finds.png";
import parkingImg from "../assets/parking.png";
import endImg from "../assets/END.png";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Nigha",
      description:
        "GPS Tracking System with role-based login, live map tracking, and device registration for real-time vehicle and asset monitoring.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      liveDemo: "https://nigha.vercel.app/",
      github: "https://github.com/Syamchelluru/INTERN",
      gradient: "from-emerald-500 to-teal-600",
      image: "src/assets/nigha.png",
    },
    {
      title: "Revogue Finds",
      description:
        "A modern thrift store web application featuring authentication, product catalog, shopping cart, and secure payment integration.",
      techStack: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
      liveDemo: "https://revouge-finds.netlify.app/",
      github: "https://github.com/Syamchelluru/REVOUGE-FINDS",
      gradient: "from-yellow-500 to-orange-600",
      image: "src/assets/revogue-finds.png",
    },
    {
      title: "Parking Space Finder",
      description:
        "Smart parking solution with real-time space availability, booking system, and location-based search functionality.",
      techStack: ["Angular", "Spring Boot", "MySQL", "TypeScript"],
      liveDemo: "https://parking-finder-app.vercel.app/",
      github: "https://github.com/KishoreBabu7/parking-finder-app",
      gradient: "from-blue-500 to-purple-600",
      image: "src/assets/parking.png",
    },
    {
      title: "Encryption & Decryption Tool",
      description:
        "Secure data encryption and decryption app with multiple algorithms and a user-friendly interface.",
      techStack: ["React", "Tailwind CSS", "Cryptography", "JavaScript"],
      liveDemo: "https://endencryption.netlify.app/",
      github: "https://github.com/Syamchelluru/EncryptAndDecrypt-React",
      gradient: "from-red-500 to-pink-600",
      image: "src/assets/END.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            A collection of projects showcasing my expertise in full-stack
            development, from concept to deployment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 h-full shadow-lg hover:shadow-2xl relative overflow-hidden">
                {/* Project Image */}
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-xs sm:text-sm rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-5 py-2.5 border border-gray-400 text-gray-300 font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </motion.a>
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16 px-4" variants={itemVariants}>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            Interested in collaborating or want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/Syamchelluru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-2" />
            View All Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
