import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <motion.h1
          className="text-3xl font-extrabold text-yellow-300 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Dhamshetty Bhargav
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-yellow-300 cursor-pointer text-lg font-semibold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-yellow-300 cursor-pointer text-lg font-semibold"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-yellow-300 cursor-pointer text-lg font-semibold"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-yellow-300 cursor-pointer text-lg font-semibold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/bhargav-dhamshetty/ " className="hover:text-yellow-300">
            <FaLinkedinIn size={25} />
          </a>
          <a href="https://github.com/Bhargav-Dhamshetty" className="hover:text-yellow-300">
            <FaGithub size={25} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white w-full py-4 space-y-4 text-center">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-yellow-300 cursor-pointer text-lg font-semibold"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-yellow-300 cursor-pointer text-lg font-semibold"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-yellow-300 cursor-pointer text-lg font-semibold"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-yellow-300 cursor-pointer text-lg font-semibold"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
