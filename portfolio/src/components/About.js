import photoImage from '../image/photo.jpeg';
import './about.css';

function About() {
	return (
		<section id='about' className='sectionAbout py-5'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-sm-6 mb-3 mb-sm-0'>
						<img
							src={photoImage}
							alt='Profil'
							className='img-fluid rounded'
						/>
					</div>
					<div className='col-sm-6'>
						<div className='card-body position-relative'>
							<h1 className='big'>À propos</h1>
							<h1 className='mb-3 small'>À propos de moi</h1>
							<p className='card-text text'>
								Titulaire d’un BTS SIO option SLAM (Solutions
								Logicielles et Applications Métiers), je suis
								passionné par le développement web et la
								conception de logiciels. Je souhaite poursuivre
								mes études avec une licence spécialisée dans ce
								domaine afin de renforcer mes compétences
								techniques et approfondir mes connaissances. Au
								cours de mes deux années de BTS, j’ai eu
								l’opportunité de réaliser plusieurs projets,
								aussi bien personnels que professionnels, qui
								m’ont permis de mettre en pratique mes acquis et
								de développer mon autonomie ainsi que ma rigueur
								de travail.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
