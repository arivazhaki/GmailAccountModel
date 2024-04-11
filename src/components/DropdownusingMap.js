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

// const sizeStyle = {
// 	medium: { transform: 'scale(0.7)' },
// 	small: { transform: 'scale(0.5)' },
// 	large: { transform: 'scale(1)' },
// };

const DropdownusingMap = () => {
	const [shape, setShape] = useState('square');

	/* const [size, setSize] = useState(''); */

	const shapeChange = (event) => {
		setShape(event.target.value);
	};

	/* const sizeChange = (event) => {
		setSize(event.target.value);
	};*/

	return <div>
		<div style={ {
			...shapeStyles[shape],
			backgroundColor: 'green',
		} }
		/>
		<SelectBox { ...{ data: { shape, shapeChange, shapes }} }/>
	</div>;
};

export default DropdownusingMap;
