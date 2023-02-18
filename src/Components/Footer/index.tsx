import React from 'react';
import * as C from './styles'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-scroll';

export const Footer = () => {


	return (
		<C.Container>
		 	<div className='footer'>
			 	<div className='copyright'>
			 		<div className='name'>Matheus Monteiro</div>
					<div className='copy'>© 2023, Built and designed by Matheus Monteiro</div>
			 	</div>	
					
				<div className='topics'>
					<div className='topicsname'>Links</div>
					<div className='linkstitle'>
						<Link className='title' to="skills" spy={true} smooth={true} offset={-80} duration={500}>Skills</Link>
						<Link className='title' to="projects" spy={true} smooth={true} offset={-80} duration={500}>Projects</Link>
						<Link className='title' to="contact" spy={true} smooth={true} offset={-80} duration={500}>Contact</Link>
					</div>	
				</div>

				<div className='medias'>
					<div className='mediastitle'>Get in touch</div>
					<div className='mediaslogo'>
						<a href="https://instagram.com/matheuz.w" target="_blank" rel="noreferrer"><FaInstagram/></a> 
              			<a href="https://github.com/matheuzcode" target="_blank" rel="noreferrer"><FaGithub/></a> 
              			<a href="https://www.linkedin.com/in/matheusmonteiro23/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
					</div>		
				</div>
		 	</div>										
		</C.Container>
	)
}