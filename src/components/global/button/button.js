import React from 'react';
// import {Button} from 'react-materialize';

const ButtonMenu = (props) => {
	return (
		<a className={`waves-effect waves-light btn-large ${props.color}`} key = {props.index}>
			{`${props.type} - $${props.price}`}
		</a>
		// <a ClassName ='waves-effect waves-light btn pink darken-1' key = {props.index} > {`${props.type} - $${props.price}`} </a>
	);
}

export default ButtonMenu;
