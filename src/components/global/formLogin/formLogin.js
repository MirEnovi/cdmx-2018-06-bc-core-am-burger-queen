import React from 'react';
import {Row, Input, Icon } from 'react-materialize';
import Logo from '../../assets/burguer4.png';
import './formLogin.css';

const FormLogin = () => {
	return (
		<section className='login'>
			<img src={Logo} className='logo' alt='logo burger' />
			<h2>Burger Queen</h2>
			<h4>Iniciar Sesión</h4>
			<Row className='form'>
				<Input s={12} xl={6} label="Usuario" validate>
					<Icon>person</Icon>
				</Input>
				<Input s={12} xl={6} label="Contraseña" type="password" validate >
					<Icon>lock</Icon>
				</Input>
			</Row>
			<Row>
				<button className='hoverable login-button yellow darken-4 waves-effect waves-light btn'>Entrar</button>
			</Row>
		</section>
	);
};

export default FormLogin;