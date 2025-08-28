import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const HomeSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contactLinks = [
    { icon: FaEnvelope, href: 'mailto:ssraochelluru@gmail.com', label: 'Email' },
    { icon: FaPhone, href: 'tel:9014073717', label: 'Phone' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/syamasundara-rao-chelluru-707b3a2a5/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Syamchelluru', label: 'GitHub' },
    { icon: FaGlobe, href: 'https://ssrao.netlify.app/', label: 'Portfolio' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image Placeholder */}
        <motion.div
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <img 
            src="/assets/ssr.JPG" 
            alt="Chelluru Syamasundara Rao"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent px-4"
          variants={itemVariants}
        >
          Chelluru Syamasundara Rao
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-light px-4"
          variants={itemVariants}
        >
          Full-Stack Developer
        </motion.h2>

        {/* Profile Summary */}
        <motion.p
          className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed px-4"
          variants={itemVariants}
        >
          Passionate Full-Stack Developer with expertise in modern web technologies. 
          Experienced in building scalable applications using React, Node.js, Python, and Java. 
          Dedicated to creating efficient, user-friendly solutions with clean, maintainable code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4"
          variants={itemVariants}
        >
          <motion.a
            href="SYAM_RESUME.pdf"
            download
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.a>

          <motion.button
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-400 text-gray-300 font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          className="flex justify-center space-x-4 sm:space-x-6 px-4"
          variants={itemVariants}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title={link.label}
            >
              <link.icon className="text-lg sm:text-xl" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;