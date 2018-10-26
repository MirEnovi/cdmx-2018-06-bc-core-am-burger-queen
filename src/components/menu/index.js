import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { auth } from '../../config/firebase';
import MenuData from '../../data/menu';
import Nav from '../global/nav/nav';
import ButtonMenu from '../global/button/button';

class Menu extends Component {
	constructor() {
		super()
		this.state={
			uid:null
		}
	}

	componentWillMount = () => {
    console.log('componentWillMount menu');
    const user = auth.currentUser;
    if (user) {   
      this.setState({ uid:user.uid })
    }
	}
	
	componentDidMount = () => {
		MenuData.map((item, index) => {
			// for (let i = 0; i>2; i++) {
			// 	return console.log(item[i][index])
			// }
			return (
				console.log(index)
				);
		});
	}


	render () {

		const { uid } = this.state;
		if(uid) {
			return (
				<section>
					<Nav />
					{
						
						MenuData.map((item, index) => <ButtonMenu 
								key = {index}
								type = {item.Desayuno[index].type}
							/>
						)
					}
				</section>
			);
		} return <Redirect to = '/'/>;
	}
}

export default Menu;
