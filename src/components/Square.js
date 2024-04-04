/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';

const Square = () => {
	const [color, setColor] = useState('red');

	const changeColor = (newColor) => {
		setColor(newColor);
	};

	return (
		<div>
			<div
				style={ {
					width: '400px',
					height: '400px',
					backgroundColor: color,
					cursor: 'pointer',
				} }
			/>
			<button onClick={ () => changeColor('red') }>Red</button>
			<button onClick={ () => changeColor('blue') }>Blue</button>
			<button onClick={ () => changeColor('green') }>Green</button>
		</div>
	);
};

export default Square;
