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

const medium = { transform: 'scale(0.7)' };
const small = { transform: ' scale(0.5)' };
const large = { transform: 'scale(1)' };

const Square = () => {
	const [color, setColor] = useState('red');
	const [shape, setShape] = useState(Squ);
	const [size, setSize] = useState(small);

	const changeColor = (newColor) => {
		setColor(newColor);
	};

	const changeShape = (newShape) => {
		setShape(newShape);
	};
	const changeShapeSize = (newshapeSize) => {
		setSize(newshapeSize);
	};

	return (
		<div>
			<div style={ { ...shape, ...size, backgroundColor: color } }/>
			<h1><u>COLOURS</u></h1>
			<button onClick={ () => changeColor('red') }>Red</button>
			<button onClick={ () => changeColor('blue') }>Blue</button>
			<button onClick={ () => changeColor('green') }>Green</button><br/>
			<h1><u>SHAPES</u></h1>
			<button onClick={ () => changeShape(Squ) }>Square</button>
			<button onClick={ () => changeShape(rectangle) }>rectangle</button>
			<button onClick={ () => changeShape(Circle) }>Circle</button><br/>
			<h1><u>SHAPE SIZES</u></h1>
			<button onClick={ () => changeShapeSize(small) }>small</button>
			<button onClick={ () =>
				changeShapeSize(medium) }
			>medium</button>
			<button onClick={ () => changeShapeSize(large) }>large </button>
		</div>
	);
};

export default Square;
