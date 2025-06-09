import './competences.css';
import photoImage from '../image/CV.png';
function Competences() {
	return (
		<section id='competences' className='sectionAbout py-5'>
			<div className='container'>
				<div className='row align-items-center'>
					<div style={{ position: 'relative', marginBottom: '50px' }}>
						<h1 className='big2'>Compétences</h1>
						<h1 className='mb-3 small2'>Mes compétences</h1>
					</div>
					<div className='col-sm-6 mb-3 mb-sm-0'>
						<section class='skills-section'>
							<div class='skill'>
								<span>HTML</span>
								<div class='skill-bar'>
									<div class='skill-fill fill-html'></div>
								</div>
							</div>
							<div class='skill'>
								<span>CSS</span>
								<div class='skill-bar'>
									<div class='skill-fill fill-css'></div>
								</div>
							</div>
							<div class='skill'>
								<span>PHP</span>
								<div class='skill-bar'>
									<div class='skill-fill fill-js'></div>
								</div>
							</div>
							<div class='skill'>
								<span>Laravel</span>
								<div class='skill-bar'>
									<div class='skill-fill fill-php'></div>
								</div>
							</div>
							<div class='skill'>
								<span>Symfony</span>
								<div class='skill-bar'>
									<div class='skill-fill fill-php'></div>
								</div>
							</div>
						</section>
					</div>
					<div className='col-sm-6'>
						<div className='card-body position-relative'>
							<div className=''>
								<img
									src={photoImage}
									alt='Profil'
									className='img-fluid rounded image'
								/>
							</div>
							<a href='#' className='btn2 btn-primary'>
								Télécharger mon CV
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Competences;
