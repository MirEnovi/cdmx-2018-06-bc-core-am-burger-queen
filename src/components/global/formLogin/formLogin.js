import React, { Component } from 'react';
import { Row } from 'react-materialize';

import Logo from '../../assets/burguerB3.png';
import ResetPass from '../resetPass/resetPass';

import './formLogin.css';

class FormLogin extends Component {
	constructor(props) {
		super(props);
		this.user = React.createRef();
  	this.password = React.createRef();
	};

	signIn = () => {
		const u = {
			user:this.user.current.value,
			password:this.password.current.value
		};
		this.props.login(u.user, u.password);
	};

	menuDesayuno

	render() {
		const { user, password } = this;
		return (
			<section className='login'>
				<form>
					<img src={Logo} className='logo' alt='logo burger' />
					<h2 className= 'font-title'>Burger <span className='font-queen'>Queen</span></h2>
					<h4 >Iniciar Sesión</h4>
					<Row className='form'>
						<input className='col s10 l6 offset-s1 offset-l3' type='email' placeholder='Usuario' ref = {user}/>
						<input className=' col s10 l6 offset-s1 offset-l3' type='password' placeholder='Contraseña' ref = {password}/>
						<Row>
							<button type ='button' className='hoverable yellow darken-4 waves-effect waves-light btn-large col s10 l6 offset-s1 offset-l3 login-button' onClick={this.signIn}>
							Entrar
							</button>
						</Row>
						<Row>
							<ResetPass/>
						</Row>
					</Row>
				</form>
			</section>
		);
	}
};

export default FormLogin;