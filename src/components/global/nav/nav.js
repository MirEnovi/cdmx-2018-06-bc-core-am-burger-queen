import React from 'react';
import { Navbar } from 'react-materialize';
import logo from '../../assets/burguer2.png';

import './nav.css';

const Nav = () => {
	return (
		<header >
			<Navbar className="nav-header" 
			brand={<img src={logo} className='Nav-logo' alt='logo burger' />} 
			left>
				<div className='nav-margin'>
					<button className='yellow darken-4 waves-effect waves-light btn-large'>Salir</button>
					<button className='nav-button yellow darken-4 waves-effect waves-light btn-large'>Desayuno</button>
					<button className='nav-button yellow darken-4 waves-effect waves-light btn-large'>Almuerzo y Cena</button>
				</div>
			</Navbar>
		</header>
	);
};

export default Nav;
