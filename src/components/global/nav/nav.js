/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/burguerB2.png';
import { logout } from '../../../config/firebase';
import './nav.css';

const Nav = (props) => {
	const offSesion = () => {
		logout();
	};

	return (
		<header >
			<nav  className='row nav-header'>
				<div className='col s11 offset-s1 nav-margin'>
					<img src={logo} className='nav-logo col s2 right-align' alt='logo burger' />

					<h2 className= 'font-nav font-title col s3 left '>Burger <span className='font-queen'>Queen</span></h2>

					<div className='col s7'>
						<a onClick={props.desayuno} className='truncate nav-button cyan darken-4 waves-effect waves-light btn-large'>Desayuno</a>
						<a onClick={props.almuerzo} className='truncate nav-button deep-orange accent-3 waves-effect waves-light btn-large'>Almuerzo y Cena</a>
						<a onClick={offSesion} className='nav-button yellow darken-4 waves-effect waves-light btn-large '>
							<Link to = '/'>Salir</Link>	
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
