/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import { Modal } from 'react-materialize';
import { PasswordReset } from '../../../config/firebase';
class ResetPass extends Component {
	constructor(){
		super();
		this.email = React.createRef()
	}

	resetP = () => {		
		const emailSend = this.email.current.value;
		PasswordReset(emailSend);
	}


	render() {
		const { email } = this
		return (
			<Modal
				header='Restablecer Contraseña'
				trigger={<a className='font-s'>¿Olvidaste tu contraseña?</a>}
				className='card-panel grey darken-4'>
				<input type='email' placeholder='Escribe el email con el que te registraste ' className='col s8 offset-s2' ref={email}/>
				<button className='hoverable yellow darken-4 waves-effect waves-light btn' onClick={this.resetP}>Restablecer</button>
			</Modal>
		);
	}
};

export default ResetPass;