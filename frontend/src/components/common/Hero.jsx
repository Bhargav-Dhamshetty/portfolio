import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaUserTie } from 'react-icons/fa'; // Software Engineer style icon (professional with tie)

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center text-white px-6 relative overflow-hidden">
      <div className="max-w-7xl text-center z-10">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-yellow-400">
            <Typewriter
              words={["Hi, I'm Dhamshetty Bhargav"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={85}
              deleteSpeed={50}
              delaySpeed={1600}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Typewriter
            words={["A passionate Full-Stack Developer & Competitive Programmer"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        <motion.div
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <span className="text-yellow-400">
            <Typewriter
              words={[
                'Building Scalable Solutions',
                'Optimizing Algorithms',
                'Creating Impactful Projects'
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-gray-800 py-3 px-8 rounded-lg shadow-lg text-xl font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Big Software Engineer Icon */}
      <motion.div 
        className="absolute top-32 right-10 text-white opacity-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <FaUserTie className="text-[250px]" /> {/* Huge Icon */}
      </motion.div>
    </section>
  );
};

export default Hero;
