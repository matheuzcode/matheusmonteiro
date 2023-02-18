import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	margin: auto;
	padding: 20px;

	@media (max-width: 768px) {
		width: auto;
	}
	
	.title {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: rgb(18, 30, 39);

	}
	
	.underline {
		display: inline;
		border-bottom: 5px solid rgb(124 91 255);
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 15px;
		padding: 0 10rem;

		@media (max-width: 875px) {
			padding: 0;
		}
	}

	.formbox {
		display: flex;
		flex-direction: column;
		gap: 15px;
		padding: 0rem 3rem;
		border-radius: 10px;

		@media (max-width: 875px) {
			padding: 0rem 8rem;
		}

		@media (max-width: 600px) {
			padding: 0rem 2rem;
		}

	}

	.input {
		outline: none;
		padding: 15px;
		border: 2px solid rgb(124 91 255);
		border-radius: 10px;
		font-size: 1rem;
		box-shadow: 5px 5px rgb(124 91 255);
		color: #7b7b7b;
		transition: all ease 0.2s;
	}

	.input:focus {
        transform: scale(1.05);
	}

	.textarea {
		font-size: 1rem;
		padding: 15px;
		outline: none;
		height: 150px;
		border: 2px solid rgb(124 91 255);
		border-radius: 10px;
		color: #7b7b7b;
		transition: all ease 0.2s;
		box-shadow: 5px 5px rgb(124 91 255);
	}

	.textarea:focus {
		transform: scale(1.05);

	}

	.button {
		margin: auto;
		padding: 15px 80px;
		font-size: 1rem;
		background: rgb(124 91 255);
		border: none;
		outline: none;
		color: #FFF;
		border-radius: 50px;
		cursor: pointer;
		transition: all ease 0.2s;

		@media (max-width: 425px) {
			padding: 15px 30px;
		}
	}

	.button:hover {
		border-radius: 50px;
		padding: 15px 120px;
		background: rgb(88 63 187);

		@media (max-width: 425px) {
			padding: 15px 50px;
		}
	}

	

`;