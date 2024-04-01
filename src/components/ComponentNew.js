import React, { useState } from 'react';

const Counter = () => {
	// Declare a state variable named "count" and a function to update it named "setCount"
	const [count, setCount] = useState(0);

	// Event handler function to increment the count
	const increment = () => setCount(count + 1);

	// Event handler function to decrement the count
	const decrement = () => setCount(count - 1);

	return (
		<div>
			<p>Count: { count }</p>
			<button onClick={ increment }>Increment</button>
			<button onClick={ decrement }>Decrement</button>
		</div>
	);
};

export default Counter;
