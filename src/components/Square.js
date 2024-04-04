/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';

const Squ = {
	width: '400px',
	height: '400px',
};

const rectangle = {
	width: '400px',
	height: '300px',
};

const Circle = {
	width: '300px',
	height: '300px',
	borderRadius: '50%',
};

const Square = () => {
	const [color, setColor] = useState('red');
	const [shape, setShape] = useState(Squ);

	const changeColor = (newColor) => {
		setColor(newColor);
	};

	const changeShape = (newShape) => {
		setShape(newShape);
	};

	return (
		<div>
			<div style={ { ...shape, backgroundColor: color } }/>
			<button onClick={ () => changeColor('red') }>Red</button>
			<button onClick={ () => changeColor('blue') }>Blue</button>
			<button onClick={ () => changeColor('green') }>Green</button>
			<button onClick={ () => changeShape(Squ) }>Square</button>
			<button onClick={ () => changeShape(rectangle) }>rectangle</button>
			<button onClick={ () => changeShape(Circle) }>Circle</button>
		</div>
	);
};

export default Square;
