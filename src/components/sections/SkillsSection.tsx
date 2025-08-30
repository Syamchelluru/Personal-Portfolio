import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiFlask,
  SiPostgresql,
  SiSqlite,
  SiAwsamplify,
  SiVercel,
  SiNetlify,
  SiRender,
  SiGitlab,
  SiPostman,
  SiVscodium,   // ✅ correct import for VS Code icon
  SiQiskit,
  SiCplusplus,
  SiC,
} from "react-icons/si";

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
       
        { name: "C", icon: SiC, color: "from-blue-500 to-blue-600" },
        { name: "C++", icon: SiCplusplus, color: "from-indigo-500 to-indigo-600" },
        { name: "Java", icon: FaJava, color: "from-red-500 to-orange-500" },
        { name: "Python", icon: FaPython, color: "from-blue-400 to-yellow-400" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "from-orange-500 to-red-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", icon: FaJs, color: "from-yellow-400 to-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "from-blue-600 to-blue-700" },
        { name: "Bootstrap", icon: SiBootstrap, color: "from-purple-500 to-purple-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-teal-400 to-blue-500" },
        { name: "React.js", icon: FaReact, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "from-gray-800 to-black" },
        { name: "Angular", icon: FaAngular, color: "from-red-500 to-red-600" },
        { name: "Node.js", icon: FaNodeJs, color: "from-green-500 to-green-600" },
        { name: "Express", icon: SiExpress, color: "from-gray-600 to-gray-700" },
        { name: "Spring Boot", icon: SiSpringboot, color: "from-green-500 to-emerald-500" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "from-blue-600 to-blue-700" },
        { name: "SQLite", icon: SiSqlite, color: "from-indigo-400 to-indigo-600" },
        { name: "MongoDB", icon: SiMongodb, color: "from-green-500 to-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-400 to-indigo-600" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "from-orange-500 to-red-500" },
        { name: "GitHub", icon: FaGithub, color: "from-gray-600 to-gray-800" },
        { name: "GitLab", icon: SiGitlab, color: "from-orange-600 to-red-700" },
        { name: "Terminal", icon: "🖥️", color: "from-gray-700 to-gray-900" },
        { name: "VS Code", icon: SiVscodium, color: "from-blue-500 to-blue-700" }, // ✅ fixed
        { name: "Postman", icon: SiPostman, color: "from-orange-500 to-red-500" },
        { name: "AWS", icon: SiAwsamplify, color: "from-yellow-500 to-orange-500" },
        { name: "Qiskit", icon: SiQiskit, color: "from-purple-500 to-indigo-600" },
        { name: "Vercel", icon: SiVercel, color: "from-gray-800 to-black" },
        { name: "Netlify", icon: SiNetlify, color: "from-teal-500 to-blue-500" },
        { name: "Render", icon: SiRender, color: "from-green-500 to-emerald-600" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
  };

  return (
    <section className="min-h-screen w-full px-6 py-20 bg-gray-900">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Title */}
        <motion.div className="mb-16 text-left" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-6 text-left">
                {category.title}
              </h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                variants={containerVariants}
              >
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    className="group relative"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 shadow-lg">
                      <div className="flex flex-col items-center space-y-4">
                        {/* Skill Icon */}
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg`}
                        >
                          {typeof skill.icon === "string" ? (
                            <span className="text-2xl">{skill.icon}</span>
                          ) : (
                            <skill.icon className="text-2xl text-white" />
                          )}
                        </div>
                        {/* Skill Name */}
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition">
                          {skill.name}
                        </span>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Extra Info */}
        <motion.div className="mt-16 text-left" variants={itemVariants}>
          <p className="text-gray-400 text-lg">
            Continuously learning and exploring new technologies to stay at the
            forefront of development.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
