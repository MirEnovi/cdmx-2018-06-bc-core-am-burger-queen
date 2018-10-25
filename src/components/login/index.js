import React, {Component} from 'react';
import { initSesion } from '../../config/firebase';
import FormLogin from '../global/formLogin/formLogin';

class Login extends Component {

	onSesion = (email, password) => {
		initSesion(email, password)
		// .then(() => console.log('si llego hasta aquí'));
	}

	render() {
		return (
			<section>
				<FormLogin login= {this.onSesion}/>
			</section>
		);
	}
}

export default Login;