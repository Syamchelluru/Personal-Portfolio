import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

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
        'Strong foundation in Data Structures & Algorithms',
      ],
      icon: '🎓',
      gradient: 'from-blue-500 to-purple-600',
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
        'Science and technology enthusiast',
      ],
      icon: '📚',
      gradient: 'from-emerald-500 to-teal-600',
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
        'Early interest in computer science',
      ],
      icon: '🏫',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-7xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={{ hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic foundation that shaped my passion for technology and problem-solving.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              whileHover={{ y: -8, scale: 1.02 }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
              }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${education.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg`}
              >
                {education.icon}
              </div>

              {/* Degree & Field */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                {education.degree}
              </h3>
              <h4 className="text-base sm:text-lg text-purple-400 mb-4 font-medium">
                {education.field}
              </h4>

              {/* Institution & Details */}
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
                <h5 className="text-white font-semibold mb-3 text-sm sm:text-base">
                  Key Highlights:
                </h5>
                <ul className="space-y-2">
                  {education.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-400 text-sm sm:text-base"
                    >
                      <span className="text-blue-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gradient hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${education.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
