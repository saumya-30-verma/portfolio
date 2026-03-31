import React from 'react'
import { Link } from 'react-router-dom';

const Hero = ({name, role}) => {
  return (
    <section className='hero' id="hero">

      <div className='hero-container'>
        <div className='hero-left'>
          <h1>{name}</h1>
          <p1>{role}</p1>
          <p>Building fast, scalable web apps with React. Skilled in modern UI frameworks and driven by a passion for clean, polished interfaces.</p>

           <div className='hero-btns'>
             <Link to= "/projects" >
              <button className='hero-btn primary'>
                 See My Work
                 </button>
            </Link>

            <a href="/Saumya_Final_Resume.pdf" target='_blank'>
              <button className='hero-btn'>
                Resume
              </button>
            </a>

            <a href="#contact">
             <button className='hero-btn secondary'>Contact Me</button>
             </a>
           </div>
            
        </div>

        <div className='hero-right'>
            <div className='card'>HTML</div>
            <div className='card'>CSS</div>
            <div className='card'>Javascript</div>
            <div className='card'>React</div>
        </div>
      </div>
        
        
    </section>
  )
}

export default Hero;