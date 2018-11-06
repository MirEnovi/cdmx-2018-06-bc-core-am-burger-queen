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
				<div className='col s11 offset-s1 '>

					<img src={logo} className='col s3 m2 l1  right-align' alt='logo burger' />

					<p className= 'col s3 font-nav'>Burger <span className='font-queen'>Queen</span></p>

					<div className='col s6'>
						<a onClick={props.desayuno} className='truncate waves-effect waves-light btn cyan darken-4'>Desayuno</a>
						<a onClick={props.almuerzo} className='truncate waves-effect waves-light btn deep-orange accent-3'>Almuerzo y Cena</a>
						<a onClick={offSesion} className=' yellow darken-4 waves-effect waves-light btn '>
							<Link to = '/'>Salir</Link>	
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
