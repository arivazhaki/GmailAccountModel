/* eslint-disable max-lines-per-function */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable object-shorthand */
import React, { useState } from 'react';

const square = {
	width: '400px',
	height: '400px',
};

const rectangle = {
	width: '400px',
	height: '300px',
};

const circle = {
	width: '300px',
	height: '300px',
	borderRadius: '50%',
};

const Dropdown = () => {
	// State to manage the selected value of the dropdown
	const [color, setColor] = useState('blue');
	const [shape, setShape] = useState('square');
	const [size, setSize] = useState('small');

	// Function to handle the change event of the dropdown
	const changeColor = (event) => {
		setColor(event.target.value);
	};

	const shapeChange = (event) => {
		setShape(event.target.value);
	};

	const sizeChange = (event) => {
		setSize(event.target.value);
	};

	const shapeStyle = {
		square: square,
		rectangle: rectangle,
		circle: circle,
	};
	const shapeSize = {
		medium: { transform: 'scale(0.7)' },
		small: { transform: 'scale(0.5)' },
		large: { transform: 'scale(1)' },
	};

	return (
		<div>
			<div style={ {
				...shapeStyle[shape],
				 backgroundColor: color, ...shapeSize[size],
			} }
			/>
			<div>
				<select
					value={ color }
					onChange={ changeColor }
				>
					<option value="">COLOURS</option>
					<option value="red">red</option>
					<option value="indigo">indigo</option>
					<option value="green">green</option>
					<option value="yellow">yellow</option>
				</select>
				<select
					value={ shape }
					onChange={ shapeChange }
				>
					<option value="">Select a shape</option>
					<option value="square">Square</option>
					<option value="rectangle">rectangle</option>
					<option value="circle">Circle</option>
				</select>
				<select
					value={ size }
					onChange={ sizeChange }
				>
					<option value="small">small</option>
					<option value="medium">medium</option>
					<option value="larger">large</option>
				</select>
			</div>
		</div>
	);
};

export default Dropdown;
