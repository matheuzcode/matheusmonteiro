import styled from 'styled-components';

export const Container = styled.div`
	background: rgb(18, 30, 39);
	padding: 40px;
	margin-top: 5rem;

	.footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		gap: 0 2rem;

	}

	.name {
		font-size: 1.5rem;
		color: #FFF;
	}

	.topicsname, .mediastitle {
		color: #b7b4b9;
		font-weight: 700;
	}

	.linkstitle {
		display: grid;
	}

	.title {
		color: rgb(124 91 255);
		padding: 5px 0px;
		font-weight: 700;
		cursor: pointer;
		transition: all ease 0.2s;
	}

	.mediaslogo a {
		font-size: 1.9rem;
		color: #b7b4b9;
		transition: all ease 0.2s;
		cursor: pointer;
	}

	.mediaslogo a:hover {
		color: #FFF;
	}

	.title:hover {
		opacity: 0.9;
	}

	.copy {
		font-size: 0.8rem;
		color: #b7b4b9;
		font-weight: 100;
	}

	.name, .topicsname, .mediastitle {
		margin-bottom: 20px;
	}

	.copyright {
		width: 200px;
	}

	.topics {
		width: 200px;
	}

	.medias {
		width: 200px;
	}

	.copyright, .topics, .medias {
		margin-top: 20px;
	}

	.mediaslogo {
		display: flex;
		gap: 15px;

	}

	

`;