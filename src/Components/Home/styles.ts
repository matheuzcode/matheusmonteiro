import styled from 'styled-components'

export const Section = styled.div`
	background: rgb(18, 30, 39);
	min-height: 100vh;
	color: #FFF;


	nav {
		text-align: center;
		padding: 20px;
	}

	.name {
		display: inline;
		font-weight: 400;
		cursor: pointer;
	}

	.menu {
		margin-top: 20px;
		display: flex;
		list-style: none;
		justify-content: space-evenly;
		margin-bottom: 20vh;
		

		@media (max-width: 766px) {
			display: grid;
			gap: 40px;
			opacity: 0;
			margin-bottom: 10vh;
		}
	}

	.menu.active {
		opacity: 1;
		visibility: visible;
	}

	.menu-container a {

	}

	.menu-icon {
		color: white;
	    position: absolute;
	    right: 2rem;
	    top: 1.2rem;
	    font-size: 1.25rem;
	    cursor: pointer;
	    opacity: 0;

	    @media (max-width: 766px) {
	    	opacity: 1;
	    }
	}

	li {
		cursor: pointer;
		border-bottom: 5px solid rgb(124 91 255);
		padding: 3px 0px;
		font-weight: 400;
		transition: all ease 0.5s;
		text-decoration: none;
		color: #FFF;
	}

	li:hover {
		border-bottom: 5px solid rgb(236 91 255);
	}

	.introduction {
		padding: 0 10rem;

		@media (max-width: 910px) {
			padding: 0 3rem;
		}

		@media (max-width: 500px) {
			padding: 0 2rem;
		}
		
	}

	.introduction h1 {
		position: relative;
		max-width: 70rem;
		font-size: 4rem;
		font-weight: 400;

		@media (max-width: 910px) {
			font-size: 2.5rem;
		}

		@media (max-width: 500px) {
			font-size: 2rem;
		}
	}

	.social-media-links {
		display: flex;
		font-size: 2rem;
		gap: 20px;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	
	.social-media-links a {
		color: rgb(124 91 255);
		transition: all ease 0.5s
	}

	.social-media-links a:hover {
		color: #FFF;
	}

	.home-description {
		font-size: 1.2rem;
		max-width: 28rem;
		color: rgb(199, 199, 199);
		font-weight: 100;

		@media (max-width: 500px) {
			font-size: 0.9rem;
		}

	}

	.underline {
		color: red;
	}

`