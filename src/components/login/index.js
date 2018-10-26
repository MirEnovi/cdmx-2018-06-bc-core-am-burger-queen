import React, {Component} from 'react';
import { initSesion, auth } from '../../config/firebase';
import { Redirect } from 'react-router-dom';
import FormLogin from '../global/formLogin/formLogin';

class Login extends Component {
	constructor () {
		super()
		this.state = {
		  uid: null,
		}
	}

	componentWillMount () {
    auth.onAuthStateChanged(user => {
			console.log(user.uid);
      this.setState({
        uid: user.uid
      })
    })
  }


	onSesion = (email, password) => initSesion(email, password);

	render() {
		const {uid} = this.state;
		if(uid) {
		return <Redirect to = '/menu'/>
		}	else {
			return (
				<section>
					<FormLogin login= {this.onSesion}/>
				</section>
			);
		}
	}
}

export default Login;