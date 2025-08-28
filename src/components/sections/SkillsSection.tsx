import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, 
  FaJs, FaAngular, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiMysql, SiMongodb, SiNextdotjs, SiExpress,
  SiTailwindcss, SiBootstrap, SiTypescript
} from 'react-icons/si';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming & Backend',
      skills: [
        { name: 'C', icon: '🔤', color: 'from-blue-500 to-blue-600' },
        { name: 'Java', icon: FaJava, color: 'from-red-500 to-orange-500' },
        { name: 'Python', icon: FaPython, color: 'from-blue-400 to-yellow-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'from-green-500 to-green-600' },
        { name: 'Express', icon: SiExpress, color: 'from-gray-600 to-gray-700' },
        { name: 'Spring Boot', icon: SiSpringboot, color: 'from-green-500 to-emerald-500' },
        { name: 'MySQL', icon: SiMysql, color: 'from-blue-600 to-blue-700' },
        { name: 'MongoDB', icon: SiMongodb, color: 'from-green-500 to-green-600' },
      ]
    },
    {
      title: 'Frontend & Tools',
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', icon: FaJs, color: 'from-yellow-400 to-yellow-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-600 to-blue-700' },
        { name: 'React', icon: FaReact, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'from-gray-800 to-black' },
        { name: 'Angular', icon: FaAngular, color: 'from-red-500 to-red-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-teal-400 to-blue-500' },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'from-purple-500 to-purple-600' },
        { name: 'Git', icon: FaGitAlt, color: 'from-orange-500 to-red-500' },
        { name: 'GitHub', icon: FaGithub, color: 'from-gray-600 to-gray-800' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center px-4">
                {category.title}
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 px-4"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group relative"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 shadow-lg hover:shadow-xl">
                      <div className="flex flex-col items-center space-y-4">
                        {/* Skill Icon */}
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                          {typeof skill.icon === 'string' ? (
                            <span className="text-xl sm:text-2xl">{skill.icon}</span>
                          ) : (
                            <skill.icon className="text-xl sm:text-2xl text-white" />
                          )}
                        </div>
                        
                        {/* Skill Name */}
                        <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 px-4"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-base sm:text-lg">
            Continuously learning and exploring new technologies to stay at the forefront of development
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;