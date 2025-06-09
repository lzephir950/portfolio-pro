import './projects.css';
import logoLaravel from '../image/laravel1.png';
import logoCss from '../image/css.png';
import logoHtml from '../image/html.png';
import logoPhp from '../image/php.png';
import logoJs from '../image/js.png';
import logoJava from '../image/java.png';
import logoJavafx from '../image/javafx.png';
import logoWordpress from '../image/wordpress.png';
import logoElementor from '../image/elementor.png';
import projetImage from '../image/ohmycat.png';
import biblionest from '../image/biblionest.png';
import todolist from '../image/todolist.png';
import gefodi from '../image/gefodi.png';


function Projects() {
	return (
		<section id='projects' className='py-5'>
			<div className='container'>
				<div style={{ position: 'relative', marginBottom: '50px' }}>
					<h1 className='big2'>Réalisations</h1>
					<h1 className='mb-3 small2'>Réalisations</h1>
				</div>
				<div className='row'>
					<div className='col-md-4 mb-3'>
						<div
							className='card position-relative project-card text-white'
							style={{
								height: '165px',
								backgroundImage: `url(${projetImage})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<h4>OhMyCat</h4>

								<div className='d-flex gap-2'>
									<img
										src={logoJs}
										alt=''
										className='imgLogo'
									/>
									<img
										src={logoCss}
										alt=''
										className='imgLogo'
									/>
									<img
										src={logoHtml}
										alt=''
										className='imgLogo'
									/>
								</div>

								<a href='#' className='btn mt-3'>
									Voir sur GitHub
								</a>
							</div>
						</div>
					</div>
					<div className='col-md-4 mb-3 animate'>
						<div
							className='card h-200 position-relative project-card text-white'
							style={{
								height: '165px',
								backgroundImage: `url(${biblionest})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<h4>Biblionest</h4>

								<div className='d-flex gap-2'>
									<img
										src={logoLaravel}
										alt=''
										className='imgLogo'
									/>
									<img
										src={logoPhp}
										alt=''
										className='imgLogo'
									/>
								</div>

								<a href='#' className='btn mt-3'>
									Voir sur GitHub
								</a>
							</div>
						</div>
					</div>
					<div className='col-md-4 mb-3'>
						<div
							className='card position-relative project-card text-white'
							style={{
								height: '165px',
								backgroundImage: `url(${todolist})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<h4>OhMyCat</h4>

								<div className='d-flex gap-2'>
									<img
										src={logoJava}
										alt=''
										className='imgLogo'
									/>
									<img
										src={logoJavafx}
										alt=''
										className='imgLogo'
									/>
								</div>

								<a href='#' className='btn mt-3'>
									Voir sur GitHub
								</a>
							</div>
						</div>
					</div>
					<div className='col-md-4 mb-3'>
						<div
							className='card position-relative project-card text-white'
							style={{
								height: '165px',
								backgroundImage: `url(${gefodi})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<h4>OhMyCat</h4>

								<div className='d-flex gap-2'>
									<img
										src={logoWordpress}
										alt=''
										className='imgLogo'
									/>
									<img
										src={logoElementor}
										alt=''
										className='imgLogo'
									/>
								</div>

								<a href='#' className='btn mt-3'>
									Voir sur GitHub
								</a>
							</div>
						</div>
					</div>

					<div className='col-md-4 mb-3 animate'>
						<div
							className='card h-200 position-relative project-card'
							style={{ height: '170px' }}
						>
							<div className='card-body'>
								<h5 className='card-title'>Nom du projet</h5>
								<p className='card-text'>
									Petite description du projet ici.
								</p>
							</div>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<img
									src={logoLaravel}
									alt=''
									className='imgLogo'
								/>
								<a href='#' className='btn'>
									Voir sur GitHub
								</a>
							</div>
						</div>
					</div>
					<div className='col-md-4 mb-3 animate'>
						<div
							className='card h-200 position-relative project-card'
							style={{ height: '170px' }}
						>
							<div className='card-body'>
								<h5 className='card-title'>Nom du projet</h5>
								<p className='card-text'>
									Petite description du projet ici.
								</p>
							</div>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<img
									src={logoLaravel}
									alt=''
									className='imgLogo'
								/>
								<a href='#' className='btn'>
									Voir sur GitHub
								</a>
							</div>
						</div>
					</div>

					{/* Tu pourras ajouter plus de cartes comme ça */}
				</div>
			</div>
		</section>
	);
}

export default Projects;
