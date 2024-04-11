/* eslint-disable no-undef */
import React from 'react';
import { peek } from '@laufire/utils/debug';

const SelectBox = ({ data: { value, handler, list, property }}) => {
	peek(value);
	return (
		<select
			value={ value }
			onChange={ handler }
		>
			{ list.map((newValue, index) =>
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
