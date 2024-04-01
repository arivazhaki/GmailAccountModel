import { React } from 'react';

const Circle = () => {
	const circleStyle = {
		width: '100px',
		height: '100px',
		backgroundColor: 'red',
		borderRadius: '50%',
	};

	return <div style={ circleStyle }/>;
};

export default Circle;
