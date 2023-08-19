import {useState} from 'react'
import React from 'react'
import * as C from './styles'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-scroll';

export const Home = () => {

  const [active, setActive] = useState(false);

  const menuClick = () => {
    setActive(!active);  
  }

  return (
    <C.Section className='home-section'>
      <nav>
      <div className='menu-container'>
        <a>
         Matheus Monteiro
        </a>
        <div className='menu-icon' onClick={menuClick}><HiMenu/></div>
      </div>       
        <ul className={`menu ${active ? 'active' : 'inactive'}`} >
          <li><Link to="skills" spy={true} smooth={true} offset={-80} duration={500}>Skills</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>Projects</Link></li> 
          <li><Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>Contact</Link></li>   
        </ul>   
      </nav>
        <div className='introduction'>
            <h1>
            <Typewriter 
              onInit={(typewriter) => {
                typewriter.pauseFor(700).typeString("Hi, i'm Matheus | Front-End Developer").start();
              }}
              options={{
                  delay: 80
              }}
            />    
            </h1>
            <div className='social-media-links'>
              <a href="https://instagram.com/matheuz.w" target="_blank"  rel="noreferrer"><FaInstagram/></a> 
              <a href="https://github.com/matheuzcode" target="_blank"  rel="noreferrer"><FaGithub/></a> 
              <a href="https://www.linkedin.com/in/matheusmonteirodeveloper/" target="_blank" rel="noreferrer"><FaLinkedin/></a> 
            </div>
            <div className='home-description'>
              I love learning new things every day, creating and listening to music 🚀
            </div>  
        </div>  
    </C.Section> 
  )

}

 