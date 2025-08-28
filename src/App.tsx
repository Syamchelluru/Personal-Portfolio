import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import HomeSection from './components/sections/HomeSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  const sections = {
    home: HomeSection,
    skills: SkillsSection,
    projects: ProjectsSection,
    education: EducationSection,
    contact: ContactSection,
  };

  const ActiveComponent = sections[activeSection as keyof typeof sections];

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const sectionKeys = ['1', '2', '3', '4', '5'];
      const sectionNames = ['home', 'skills', 'projects', 'education', 'contact'];
      const keyIndex = sectionKeys.indexOf(e.key);
      
      if (keyIndex !== -1) {
        setActiveSection(sectionNames[keyIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Section transition variants
  const sectionVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      scale: 0.95,
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    },
    exit: { 
      opacity: 0,
      x: -100,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      }
    },
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Animated Background */}
            <AnimatedBackground />
            
            {/* Navigation */}
            <Navigation 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />

            {/* Main Content */}
            <main className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="min-h-screen"
                >
                  <ActiveComponent />
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Scroll Indicator */}
            <div className="fixed bottom-8 right-8 z-40">
              <motion.div
                className="hidden sm:flex flex-col space-y-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {['home', 'skills', 'projects', 'education', 'contact'].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      activeSection === section
                        ? 'bg-blue-500 border-blue-500 scale-125'
                        : 'bg-transparent border-white/40 hover:border-white/60'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title={section.charAt(0).toUpperCase() + section.slice(1)}
                  />
                ))}
              </motion.div>
            </div>

            {/* Keyboard Shortcuts Hint */}
            <motion.div
              className="fixed bottom-8 left-8 z-40 text-gray-400 text-xs sm:text-sm hidden sm:block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <p>Press 1-5 for quick navigation</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;