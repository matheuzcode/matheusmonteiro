import React from 'react';
import * as C from './styles';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';

export const Projects = () => {
	return (
		<C.Container id="projects">
			<div className='div-name'><div className='underline'>Projects</div></div>
			
			<div className='div-skillsimg'>
				<div className='div-flex'>
					<div className='div-projectname'>Rare Clothing</div>
					<div className='div-skillstable'>
						<ul>
							<li>HTML</li>
							<li>SCSS</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>Redux Toolkit</li>
							<li>Redux Persist</li>
							<li>Strapi</li>
							<li>Stripe</li>	
						</ul>		
					</div>
					<div className='div-buttons'>
						<a href="https://matheuzcode.github.io/expense-tracker/" target="_blank" rel="noreferrer">Live Demo</a>
						<a href="https://github.com/matheuzcode/expense-tracker" target="_blank" rel="noreferrer">Github Code</a>
					</div>
					<div className='div-projectdesc'>Rare Clothing is a clothing eccomerce project. In the development of the front-end, redux toolkit was used to store the states so that the shopping cart can be viewed at the same time by all components in a shared way. In the back-end, Strapi was used to create the REST API for the store items, redux persist to store the data when updating the page and the Stripe platform to make the payment.</div>	
				</div>
				<div className='img'>
					<img src={img5} alt="" />	
				</div>	
					
			</div>

			<div className='div-skillsimg'>
				<div className='div-flex'>
					<div className='div-projectname'>Whatsapp Clone</div>
					<div className='div-skillstable'>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Material UI</li>
							<li>Javascript</li>
							<li>React</li>
							<li>Firebase</li>	
						</ul>		
					</div>
					<div className='div-buttons'>
						<a href="https://wappclone-1.netlify.app" target="_blank"  rel="noreferrer">Live Demo</a>
						<a href="https://github.com/matheuzcode/react-whatsappclone" target="_blank" rel="noreferrer">Github Code</a>
					</div>
					<div className='div-projectdesc'>The project is a whatsapp clone with the chat between two people working simultaneously, and to register the user a login with facebook was implemented. In this project was used typescript, react framework and firebase database to store user conversations.</div>	
				</div>
				<div className='img'>
					<img src={img1} alt="" />	
				</div>	
					
			</div>

			<div className='div-skillsimg'>
				<div className='div-flex'>
					<div className='div-projectname'>Shopping Cart</div>
					<div className='div-skillstable'>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Bootstrap</li>
							<li>Typescript</li>
							<li>React</li>
							<li>Context Api</li>	
						</ul>		
					</div>
					<div className='div-buttons'>
						<a href="" target="_blank" rel="noreferrer">Live Demo</a>
						<a href="https://github.com/matheuzcode/react-shoppingcart" target="_blank" rel="noreferrer">Github Code</a>
					</div>
					<div className='div-projectdesc'>Shopping cart. One of the main tools of e-commerce sites. It is a secondary application that allows the customer to add several desired items and still continue browsing the site.</div>	
				</div>
				<div className='img'>
					<img src={img4} alt="" />	
				</div>		
			</div>

			<div className='div-skillsimg'>
				<div className='div-flex'>
					<div className='div-projectname'>Expense Tracker</div>
					<div className='div-skillstable'>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Styled-components</li>
							<li>Typescript</li>
							<li>React</li>	
						</ul>		
					</div>
					<div className='div-buttons'>
						<a href="https://matheuzcode.github.io/expense-tracker/" target="_blank" rel="noreferrer">Live Demo</a>
						<a href="https://github.com/matheuzcode/expense-tracker" target="_blank" rel="noreferrer">Github Code</a>
					</div>
					<div className='div-projectdesc'>This project is a expense tracker that aims to facilitate the organization of your finances, registering each item by category, date and controlling the income and expenses of your money.</div>	
				</div>
				<div className='img'>
					<img src={img2} alt="" />	
				</div>	
					
			</div>

			<div className='div-skillsimg'>
				<div className='div-flex'>
					<div className='div-projectname'>Memory Game</div>
					<div className='div-skillstable'>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Styled-components</li>
							<li>Typescript</li>
							<li>React</li>	
						</ul>		
					</div>
					<div className='div-buttons'>
						<a href="https://matheuzcode.github.io/react-memoria-deploy/" target="_blank" rel="noreferrer">Live Demo</a>
						<a href="https://github.com/matheuzcode/react-memoria" target="_blank" rel="noreferrer">Github Code</a>
					</div>
					<div className='div-projectdesc'>The memory game is a classic game made up of pieces that have a figure on one side and the goal is to find all the same pairs of that figure. Whoever completes all the pairs in less time and less moves wins the game.</div>	
				</div>
				<div className='img'>
					<img src={img3} alt="" />	
				</div>	
					
			</div>						   						
		</C.Container>	
	)
}