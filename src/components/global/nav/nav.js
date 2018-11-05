import React, {Component} from 'react';
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
				<nav  className='row nav-header'>
					<div className='col s10 offset-s1 nav-margin'>
						<a onClick={this.offSesion} className='nav-button yellow darken-4 btn-large'>
						<Link to = '/'>Salir</Link>	
						</a>
						<a className='nav-button cyan darken-4 waves-effect waves-light btn-large'>Desayuno</a>
						<a className='nav-button deep-orange accent-3 waves-effect waves-light btn-large'>Almuerzo y Cena</a>
						<img src={logo} className='nav-logo ' alt='logo burger' />
					</div>
				</nav>
			</header>
		);
	}
};

export default Nav;
