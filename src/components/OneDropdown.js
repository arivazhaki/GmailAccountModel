/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
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

/* const sizes = ['small', 'medium', 'large'];*/

const sizeStyle = {
	medium: { transform: 'scale(0.7)' },
	small: { transform: 'scale(0.5)' },
	large: { transform: 'scale(1)' },
};

/* const colors = [
	'green',
	'blue',
	'indigo',
];*/

const ddProp = ['shape', 'size', 'color'];

const OneDropdown = () => {
	const [property, setproperty]
		= useState({ shape: 'circle', size: 'large', color: 'green' });

	const propertyHandler = (event, prop) => {
		setproperty({ ...property, prop: event.target.value });
	};

	return <div>
		<div style={ {
			...shapeStyles[property.shape],
			backgroundColor: property.color,
			...sizeStyle[property.size],
		} }
		/>
		{ ddProp.map((ele, index) => <SelectBox
			key={ index }
			{ ...{
				data:
			{
				prop: ele,
				value: property.shape,
				handler: propertyHandler,
				list: shapes,
			},
			}
			}
		                             />) }
	</div>;
};

export default OneDropdown;
