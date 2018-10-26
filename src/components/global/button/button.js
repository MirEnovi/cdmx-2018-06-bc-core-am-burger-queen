import React from 'react';
import {Button} from 'react-materialize';

const ButtonMenu = (props) => {
    return(
			<Button key = {props.index} ClassName =' blue '>{props.type}</Button>
    );
}

export default ButtonMenu;
