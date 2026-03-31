import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2 className='logo'>Saumya</h2>

        <ul className='nav-links'>
            <li><a href="#about">About</a></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar