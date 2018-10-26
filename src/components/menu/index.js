import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Nav from '../global/nav/nav';
import { auth } from '../../config/firebase';

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


	render () {
		const { uid } = this.state;
		if(uid) {
			return (
				<section>
					<Nav />
				</section>
			);
		} return <Redirect to = '/'/>;
	}
}

export default Menu;
