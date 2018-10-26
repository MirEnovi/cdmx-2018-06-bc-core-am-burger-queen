import React, {Component} from 'react';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom'

import logo from '../../assets/burguerB2.png';
import { logout } from '../../../config/firebase';
import './nav.css';

class Nav extends Component {

	offSesion = () => {
		logout()
	}

	render() {
		return (
			<header >
				<Navbar className="nav-header" 
				brand={<img src={logo} className='Nav-logo' alt='logo burger' />} 
				left>
					<div className='nav-margin'>
						<a onClick={this.offSesion} className='yellow darken-4 waves-effect waves-light btn-large'>
						<Link to = '/'>Salir</Link>
						</a>
						<a className='nav-button yellow darken-4 waves-effect waves-light btn-large'>Desayuno</a>
						<a className='nav-a yellow darken-4 waves-effect waves-light btn-large'>Almuerzo y Cena</a>
					</div>
				</Navbar>
			</header>
		);
	}
};

export default Nav;
