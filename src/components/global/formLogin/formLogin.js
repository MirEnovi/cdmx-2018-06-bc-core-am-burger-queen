import React, { Component } from 'react';
import {Row } from 'react-materialize';
import Logo from '../../assets/burguerB3.png';
import './formLogin.css';

class FormLogin extends Component {
	constructor(props) {
		super(props);
		this.user = React.createRef();
    this.password = React.createRef();
	};

	// componentWillMount = () => {
  //   console.log(this.props);
  // }

	signIn = () => {
		const u = {
			user:this.user.current.value,
			password:this.password.current.value
		};
		this.props.login(u.user, u.password);
	};

	render() {
		const { user, password } = this;
		return (
			<section className='login'>
				<img src={Logo} className='logo' alt='logo burger' />
				<h2 className= 'font-title'>Burger <span className='font-queen'>Queen</span></h2>
				<h4 >Iniciar Sesión</h4>
				<Row className='form'>
					<input className=' col s12 l6 offset-l3' type='email' placeholder='Usuario' ref = {user}/>
					<input className=' col s12 l6 offset-l3' type='password' placeholder='Contraseña' ref = {password}/>
				</Row>
				<Row>
					<button className='hoverable login-button yellow darken-4 waves-effect waves-light btn' onClick={this.signIn}>Entrar</button>
				</Row>
				<Row>
					{/* <a>
						¿Olvidaste tu Contraseña?
					</a> */}
				</Row>
			</section>
		);
	}
};

export default FormLogin;