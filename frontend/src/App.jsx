import React, { useEffect } from 'react'
import Header from './components/common/Header'
import Hero from './components/common/Hero'
import About from './components/common/About'
import Skills from './components/common/Skills'
import Projects from './components/common/Projects'
import Contact from './components/common/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    })
  }, [])

  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
