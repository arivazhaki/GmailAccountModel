/* eslint-disable no-undef */
import React from 'react';
import { peek } from '@laufire/utils/debug';

const SelectBox = ({ data: { shape, shapeChange, shapes }}) => {
	peek(shape);
	return (
		<select
			value={ shape }
			onChange={ shapeChange }
		>
			{ shapes.map((newValue, index) =>
				<option
					key={ index }
					value={ newValue }
				>
					{ newValue }
				</option>) }
		</select>
	);
};

export default SelectBox;
