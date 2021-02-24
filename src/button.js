import React from 'react';
import './button.css';

export default function Button(props){
	const style = {
		backgroundColor: props.color
	};

	return (
		<button type="button" style={style}>{props.name}</button>
	);
}

