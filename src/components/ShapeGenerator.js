/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React, { useState } from 'react';
import SelectBox from './SelectBox';

const shapes = ['square', 'rectangle', 'circle'];

const shapeStyles = {
	square: {
		width: '400px',
		height: '400px',
	},
	rectangle: {
		width: '400px',
		height: '300px',
	},
	circle: {
		width: '300px',
		height: '300px',
		borderRadius: '50%',
	},
};

const sizes = ['small', 'medium', 'large'];

const sizeStyle = {
	medium: { transform: 'scale(0.7)' },
	small: { transform: 'scale(0.5)' },
	large: { transform: 'scale(1)' },
};

const colors = [
	 'green',
	'blue',
	'indigo',
];

const ShapeGenerator = () => {
	const [shape, setShape] = useState('sqaure');
	const [size, setSize] = useState('small');
	const [color, setColor] = useState('green');

	const shapeHandler = (event) => {
		setShape(event.target.value);
	};

	const sizeHandler = (event) => {
		setSize(event.target.value);
	};
	const colorHandler = (event) => {
		setColor(event.target.value);
	};

	return <div>
		<div style={ {
			...shapeStyles[shape],
			backgroundColor: color,
			...sizeStyle[size],
		} }
		/>
		<SelectBox { ...{ data: { value: shape, handler: shapeHandler, list: shapes }} }/>
		<SelectBox { ...{ data: { value: size, handler: sizeHandler, list: sizes }} }/>
		<SelectBox { ...{ data: { value: color, handler: colorHandler, list: colors }} }/>
	</div>;
};

export default ShapeGenerator;
