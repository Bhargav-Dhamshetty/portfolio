import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl font-extrabold text-center text-blue-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Hello! I'm <span className="font-semibold text-blue-600">Dhamshetty Bhargav</span>, a passionate and highly driven <span className="font-semibold">Computer Science</span> student with a focus on developing scalable and innovative software solutions. Currently pursuing a Bachelor of Technology degree at <span className="font-semibold">BVRIT</span>, I constantly seek hands-on experience with emerging technologies and challenging opportunities that help me grow as a software engineer.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
          >
            With a strong foundation in languages like <span className="font-semibold text-blue-500">C, C++, Java, Python</span> and expertise in modern web technologies such as <span className="font-semibold text-blue-500">ReactJS, NodeJS, NextJS, TailwindCSS</span>, I strive to build solutions that address real-world problems. I am committed to continuous learning and refining my problem-solving abilities.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.9 }}
          >
            Beyond coding, I am passionate about <span className="font-semibold">competitive programming</span>, having achieved notable ratings on platforms like <span className="font-semibold text-blue-500">CodeChef, LeetCode, and Codeforces</span>. Being part of coding clubs and team projects challenges my abilities and fuels collaborative learning.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            I believe technology holds the power to transform industries and improve lives. My goal is to leverage my skills to contribute to impactful projects and continue evolving in this dynamic field. I am excited about opportunities to work with like-minded individuals and create solutions that leave a lasting mark.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
