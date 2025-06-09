import './header.css';

function Header() {
	return (
		<header className='sectionHeader'>
			<nav className='navbar navbar-expand-md'>
				<div className='container-fluid'>
					<div
						className='collapse navbar-collapse'
						id='navbarNavAltMarkup'
					>
						<div className='navbar-nav'>
							<a className='nav-link ' aria-current='page' href='#about'>
								A propos
							</a>
							<a className='nav-link' href='#competences'>
								Compétences
							</a>
							<a className='nav-link' href='#projects'>
								Réalisations
							</a>
							<a className='nav-link' href='#contact'>
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
