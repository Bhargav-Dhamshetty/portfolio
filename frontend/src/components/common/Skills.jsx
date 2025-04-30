import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Technical Skills',
    skills: ['C', 'C++', 'Java', 'Python', 'MySQL', 'Data Structures', 'Algorithms'],
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'NextJS'],
  },
  {
    category: 'Core Competencies',
    skills: ['Object-Oriented Programming', 'Problem Solving', 'Team Collaboration'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-800 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-blue-400/30 transition duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center border-b-2 border-blue-300 pb-2">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillCategory.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
