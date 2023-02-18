import React from 'react';
import {useState} from 'react';
import * as C from './styles'
import matheusIcon from '../../assets/matheus-icon-portfolio.png'

export const Skills = () => {
	const [arrayIndex, setArrayIndex] = useState(0)

	const arraySkills = [
		"HTML",
		"CSS",
		"Javascript",
		"Typescript",
		"PHP",
		"React",
		"Firebase",
		"Bootstrap",
		"Tailwind CSS",
		"Styled Components"
	]

	const skillDesc = [
		"/* HTML is a markup language used to build web pages. HTML documents can be interpreted by browsers. */",
		"/* Cascading Style Sheets is a mechanism for adding styles to a web page, either applied directly to HTML tags or contained within <style> tags. It is also possible to add styles by adding a link to a CSS file that contains the styles. */",
		"/* JavaScript is a structured, high-level scripting, dynamically typed, multiparadigm interpreted programming language. Along with HTML and CSS, JavaScript is one of the three main technologies of the World Wide Web. */",
		"/* TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language. */",
		"/* PHP is a general-purpose scripting language aimed at web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. */",
		"/* React is an open source JavaScript front-end library focused on creating user interfaces on web pages. */",
		"/* Firebase is a mobile platform from Google that helps you grow your business and quickly develop high-quality apps. */",
		"/* Bootstrap is an open-source web framework for developing interface and front-end components for websites and web applications, using HTML, CSS and JavaScript, based on design templates for typography, improving the user experience on a friendly and responsive website. */",
		"/* Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks such as Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. */",
		"/* Styled Components is a library that makes it possible to write CSS codes inside JavaScript. With it, you can create beautiful and functional websites. In addition, gain more agility and precision in web development. */"
	]

	const mouseOver = (index: number) => {
		setArrayIndex(index);
	}

	return (
		<C.Container id="skills">
			<div className='div-name'>My <div className='underline'>Skills</div></div>
			<div className='div-skills'>
				<img src={matheusIcon} alt=""/>
				<div className='div-skillsTable'>	
					<ul>
						{arraySkills.map((item, index) => <li key={index} onMouseOver={() => mouseOver(index)}>{item}</li> )}	
					</ul>
					<div className='bio'>{skillDesc[arrayIndex]}</div>	
				</div>	
			</div>					
		</C.Container>	
	)
}

