import React from 'react ';
import NewColor from './NewColor';

const squareStyle = {
	width: '100px',
	height: '100px',
	backgroundColor: 'blue',
	cursor: 'pointer',
};

const Colorchangeprogram = () => <div>
	<div style={ squareStyle }/><div>{ NewColor }</div>;
</div>;

export default Colorchangeprogram;
