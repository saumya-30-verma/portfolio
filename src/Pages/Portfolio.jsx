import React from 'react'
import Navbar from '../Sections/Navbar'
import Hero from '../Sections/Hero'
import About from '../Sections/About'
import Skills from '../Sections/Skills'
import Contact from '../Sections/Contact'
import Footer from '../Sections/Footer'
import ProfileData from '../Data/ProfileData'

const Portfolio = () => {
  return (
    <div>
        <Navbar />
        <Hero name={ProfileData.name} role={ProfileData.role} />
        <About />
        <Skills skills={ProfileData.skills} />
        <Contact />
        <Footer />
    </div>
  )
}

export default Portfolio