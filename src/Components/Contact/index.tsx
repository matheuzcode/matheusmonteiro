import React from 'react';
import { useState } from 'react';
import * as C from './styles'
import emailjs from '@emailjs/browser'

export const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const sendEmail = (e) => {
		e.preventDefault();

		if(name === '' || email === '' || message === '') {
			alert('Preencha todos os campos');
			return;
		}

		const templateParams = {
			from_name: name,
			message: message,
			email: email
		}

		emailjs.send('service_42qejlr', 'template_4cs9adh', templateParams, 'KoRitEL6NtbxylcCq')
		.then((response) => {
			alert('Email enviado com sucesso!')
			setName('')
			setEmail('')
			setMessage('')
		}, (err) => {
			console.log('ERRO: ', err)
		})
	}

	return (
		<C.Container id="contact">
			<div className='title'><div className='underline'>Contact</div></div>

			<form className='form' onSubmit={sendEmail}>
			 	<div className='formbox'>
			 		<input
					className='input'
					tabindex="0"  
					type='text'
					placeholder='Digite seu nome'
					onChange={(e) => setName(e.target.value)}
					value={name}
					/>

					<input
						className='input'
						tabindex="0"  
						type='email'
						placeholder='Digite seu email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>

					<textarea
						className='textarea' 
						type='text'
						placeholder='Digite sua mensagem...'
						onChange={(e) => setMessage(e.target.value)}
						value={message}
					/>
			 	</div>
			 		
				<input className='button' type='submit' value='Send Email' />
			</form>	
				
		</C.Container>
	)
} 