import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'ResumePort',
    description: 'An AI-powered resume builder that automates resume creation and allows dynamic customization with real-time preview, reducing manual effort by 70%.',
    githubLink: 'https://github.com/Bhargav-Dhamshetty/resume-port',
    liveLink: 'https://resume-port-kappa.vercel.app/',
  },
  {
    title: 'Hostel360',
    description: 'An automated hostel management system that reduces manual workload by 60% with real-time room allocation, minimizing booking conflicts by 90%.',
    githubLink: 'https://github.com/Bhargav-Dhamshetty/hostel360',
    liveLink: 'https://hostel360-rosy.vercel.app/',
  },
  {
    title: 'EchoVerse',
    description: 'A full-stack blogging platform that enables dynamic content management and optimized database queries for faster load times, improving post load time by 40%.',
    githubLink: 'https://github.com/Bhargav-Dhamshetty/echo-verse',
    liveLink: 'https://echo-verse-theta.vercel.app/',
  },
  {
    title: 'Telangana Tourism',
    description: 'An interactive platform integrating Google Maps to enhance the user experience, optimized backend for faster data retrieval and seamless navigation.',
    githubLink: 'https://github.com/Bhargav-Dhamshetty/tourism-telangana',
    liveLink: 'https://tourism-telangana.vercel.app/',
  },
  {
    title: 'Dine Ease',
    description: 'A full-stack dining platform enabling seamless table reservations and custom meal pre-orders, optimizing backend logic to reduce booking conflicts by 40%.',
    githubLink: 'https://github.com/Bhargav-Dhamshetty/dine-ease',
    liveLink: 'https://dine-ease-puce.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-8 hover:scale-105 transform transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex space-x-6">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white hover:text-yellow-400 transition duration-300"
                >
                  <FaGithub size={24} />
                  <span className="text-lg">Code</span>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white hover:text-yellow-400 transition duration-300"
                >
                  <FiExternalLink size={24} />
                  <span className="text-lg">Live</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
