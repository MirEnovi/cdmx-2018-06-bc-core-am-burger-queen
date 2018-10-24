import React from 'react';
import {Row, Input, Icon, Button} from 'react-materialize';
import Logo from '../../assets/burguer4.png';
import './formLogin.css';

const FormLogin = () => {
	return (
		<section className='login'>
			<img src={Logo} className='logo' alt='logo burger' />
			<h2>Iniciar Sesión</h2>
			<Row className='form'>
				<Input s={10} xl={5} label="Usuario" validate>
					<Icon>person</Icon>
				</Input>
				<Input s={10} xl={5} label="Contraseña" type="password" validate >
					<Icon>lock</Icon>
				</Input>
			</Row>
			<Row>
				<button className='hoverable log-button yellow darken-4 waves-effect waves-light btn'>Entrar</button>
			</Row>
		</section>
	);
};

export default FormLogin;