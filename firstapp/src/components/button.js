import React from 'react';

// Create the Button component s a function

const Button = (props) => {
	return (
		<input type="button" value={props.label}/>
	);
}

export default Button;