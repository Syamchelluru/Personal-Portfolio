import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EducationSection: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science Engineering',
      institution: 'Engineering College',
      year: '2022 - Present',
      grade: 'CGPA: 8.7',
      location: 'Paralakhemundi, Odisha',
      highlights: [
        'Specialized in Full-Stack Development',
        'Active participant in coding competitions',
        'Led multiple technical projects',
        'Strong foundation in Data Structures & Algorithms'
      ],
      icon: '🎓',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      degree: 'Intermediate (12th Grade)',
      field: 'Mathematics, Physics, Chemistry',
      institution: 'Sri Chaitanya Jr.College',
      year: '2020 - 2022',
      grade: 'Percentage: 95%',
      location: 'Palasa, Andhra Pradesh',
      highlights: [
        'Mathematics Excellence Award',
        'Strong analytical thinking skills',
        'Foundation in logical reasoning',
        'Science and technology enthusiast'
      ],
      icon: '📚',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      degree: 'Matriculation (10th Grade)',
      field: 'Secondary Education',
      institution: 'Z.P High School',
      year: '2016 - 2020',
      grade: 'Percentage: 90%',
      location: 'Gonakapadu, Andhra Pradesh',
      highlights: [
        'Academic Excellence Award',
        'Class Representative',
        'Active in science exhibitions',
        'Early interest in computer science'
      ],
      icon: '🏫',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic foundation that shaped my passion for technology and problem-solving.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>

          <div className="space-y-12">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-purple-500 z-10">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-white text-xs" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 shadow-xl hover:shadow-2xl"
                    whileHover={{ y: -5 }}
                  >
                    {/* Education Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${education.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                      {education.icon}
                    </div>

                    {/* Degree and Field */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                      {education.degree}
                    </h3>
                    <h4 className="text-base sm:text-lg text-purple-400 mb-4 font-medium">
                      {education.field}
                    </h4>

                    {/* Institution and Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-300 text-sm sm:text-base">
                        <FaMapMarkerAlt className="mr-2 text-sm" />
                        <span>{education.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm sm:text-base">
                        <FaCalendarAlt className="mr-2 text-sm" />
                        <span>{education.year}</span>
                      </div>
                      <div className="text-emerald-400 font-semibold text-sm sm:text-base">
                        {education.grade}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h5 className="text-white font-semibold mb-3 text-sm sm:text-base">Key Highlights:</h5>
                      <ul className="space-y-2">
                        {education.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start text-gray-400 text-sm sm:text-base">
                            <span className="text-blue-400 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${education.gradient} opacity-0 hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          variants={itemVariants}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Beyond formal education, I continuously enhance my skills through online courses, 
              certifications, and hands-on projects. I believe in lifelong learning and staying 
              updated with the latest technologies and industry trends.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationSection;