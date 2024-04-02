import React, { useState } from 'react';

const NewColor = () => {
	// Declare a state variable named "count" and a function to update it named "setCount"
	const [color, setColor] = useState('Blue');

	// Event handler function to increment the count
	const ColorGreen = () => setColor('Green');

	// Event handler function to decrement the count
	const ColorRed = () => setColor('red');

	return (
		<div>
			<p>Count: { color }</p>
			<button onClick={ ColorGreen }>Green</button>
			<button onClick={ ColorRed }>Red</button>
		</div>
	);
};

export default NewColor;
