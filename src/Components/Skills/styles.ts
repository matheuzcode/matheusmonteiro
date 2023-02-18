import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	margin: auto;
	margin-top: 5rem;
	padding: 20px;

	img {
		width: 500px;

		@media (max-width: 950px) {
			width: 400px;
		}

		@media (max-width: 500px) {
			width: 300px;
		}
	}

	.div-skills {
		display: grid;
    	grid-template-columns: 3fr 4fr;

		@media (max-width: 1000px) {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.div-skillsTable ul li {
		list-style: none;
		background: rgb(18, 30, 39);
		padding: 8px;
		color: #FFF;
		margin-bottom: 8px;
		cursor: pointer;
	}

	.div-skillsTable ul {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
		max-width: 80vh;
		justify-content: flex-start;

		@media (max-width: 768px) {
			justify-content: center;
		}
	}

	.div-name {
		font-size: 2rem;
		display: flex;
		gap: 8px;
		color: rgb(18, 30, 39);
		margin-bottom: 2rem;
	}

	.underline {
		border-bottom: 5px solid rgb(124 91 255);
	}

	.bio {
		max-width: 80vh;
		margin-top: 40px;
		font-size: 1.2rem;
		font-weight: 200;
		line-height: 30px;
		color: rgb(18, 30, 39);

		@media (max-width: 425px) {
			font-size: 1rem;
		}
	}

	
`