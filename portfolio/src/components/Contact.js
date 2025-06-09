import './contact.css';

function Contact() {
	return (
		<section className='contact-section'>
			<div className='animated-bg'></div>

			<div className='contact-container'>
				<div style={{ position: 'relative', marginBottom: '50px' }}>
					<h1 className='big2'>Réalisations</h1>
					<h1 className='mb-3 small2'>Réalisations</h1>
				</div>

				<form>
					<div className='mb-3'>
						<label
							htmlFor='exampleFormControlInput1'
							className='form-label'
						>
							Adresse mail
						</label>
						<input
							type='email'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='Exemple: joedon@gmail.com'
						/>
					</div>
					<div className='mb-3'>
						<label
							htmlFor='exampleFormControlTextarea1'
							className='form-label'
						>
							Message
						</label>
						<textarea
							class='form-control'
							id='exampleFormControlTextarea1'
							rows='3'
						></textarea>
					</div>
					<a href='#about' className='btn mt-3'>
						Envoyer
					</a>
				</form>
			</div>
		</section>
	);
}

export default Contact;
