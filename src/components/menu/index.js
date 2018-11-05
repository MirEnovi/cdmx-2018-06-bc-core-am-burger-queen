import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Row } from 'react-materialize';

import './style.css';
import { auth } from '../../config/firebase';
import MenuData from '../../data/menu.json';
import Nav from '../global/nav/nav';
import ButtonMenu from '../global/button/button';
import Command from '../global/cardCommand/command';

class Menu extends Component {
	constructor() {
		super()
		this.state = {
			uid: null,
			menuDesayuno: false,
			menuAlmuerzo: true
		}
	}

	componentWillMount = () => {
		const user = auth.currentUser;
		if (user) {
			this.setState({
				uid: user.uid
			})
		}
	}



	render() {
		const buttonsMenuAl = (MenuData.Almuerzo).map((item, index) => {
			return (
				<ButtonMenu index = {index}
										type = {item.type}
										price = {item.price} 
										color = 'deep-orange accent-3'
										/>
			)
		});
		const buttonsMenuDs = (MenuData.Desayuno).map((item, index) => {
			return (
				<ButtonMenu index = {index}
										type = {item.type}
										price = {item.price} 
										color = 'cyan darken-4' />
			)
		});
		const { uid } = this.state;
		if (uid) {
			return (
				<React.Fragment>
					<Nav />
					<Row className='section-menu'>
						<input className='col s10  offset-s1' type='text' placeholder='Nombre del Cliente' />
						<Row >
							{
								buttonsMenuDs
							}
						</Row>
						<div >
							{
								buttonsMenuAl
							}
						</div>
						<div>
							<Command/>
						</div>
					</Row>

				</React.Fragment>
			);
		};
		return <Redirect to = '/' /> ;
	}
}

export default Menu;
