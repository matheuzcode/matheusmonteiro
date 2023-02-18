import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	margin: auto;
	margin-top: 2rem;
	padding: 20px;

	@media (max-width: 768px) {
			padding: 2rem;
			
	}
	
	.div-name {
		font-size: 2rem;
		display: flex;
		color: rgb(18, 30, 39);
		margin-bottom: 2rem;
	}

	.underline {
		border-bottom: 5px solid rgb(124 91 255);
	}

	.div-skillsimg {
		margin-bottom: 5rem;
		display: grid;
    	grid-template-columns: 3fr 2fr;

		@media (max-width: 1000px) {
			display: flex;
			flex-direction: column;
			
		}
	}

	.div-flex {
		flex: 1;
	}

	.div-projectname {
		font-size: 3rem;
		color: rgb(18, 30, 39);
	}

	.div-skillstable {
		margin-top: 40px;
	}

	ul {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	li {
		list-style: none;
		background: rgb(18, 30, 39);
		padding: 8px;
		color: #FFF;
		margin-bottom: 8px;
		font-size: 0.9rem;
	}

	.div-buttons {
		margin-top: 40px;
	}

	.div-projectdesc {
		margin-top: 40px;
		width: 50vh;
		color: rgb(18, 30, 39);
		line-height: 32px;

		@media (max-width: 1000px) {
			font-size: 1rem;
			line-height: 32px;
			width: 500px;
		}

		@media (max-width: 570px) {
			font-size: 1rem;
			line-height: 32px;
			width: auto;
		}
	}

	a {
		margin-right: 5px;
		background: rgb(124 91 255);
		color: #FFF;
		text-decoration: none;
		padding: 10px;
		transition: all ease 0.3s;
	}

	a:hover {
		background: rgb(88 63 187);
	}

	img {
		top: 0;
		flex: 1;
		height: 300px;
		width: 450px;
		border-radius: 20px;
		aspect-ratio: 16:9;
		cursor: pointer;
		box-shadow: 3px 4px 10px rgb(185 183 191);
		transition: all ease 0.2s;

		@media (max-width: 1000px) {
			margin-top: 20px;
		}

		@media (max-width: 570px) {
			height: 250px;
			width: 400px;
		}

		@media (max-width: 460px) {
			height: 200px;
			width: 350px;
		}

		@media (max-width: 405px) {
			height: 190px;
			width: 280px;
		}

		@media (max-width: 335px) {
			height: 160px;
			width: 240px;
		}
	}

	img:hover {
		transform: scale(1.2);

		@media (max-width: 1000px) {
			transform: scale(1.1);
		}
	}
`;