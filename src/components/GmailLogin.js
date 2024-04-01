/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';

const boxStyle = {
	width: '500px',
	height: '500px',
	border: '10px solid #ccc',
	borderRadius: '10px',
	padding: '20px',
	margin: '25px',
	marginTop: '100px',
};

const ex = { margin: '30px' };

const GmailLogin = () => {
	const [count, setCount] = useState('Hi');

	return <div>
		<center>
			<div style={ boxStyle }>
				<div>{ count }</div>
				<label htmlFor="mailId">Enter Your MailId:</label>
				<input type="text"/><br/>
				<div><div style={ ex }>
					<label htmlFor="enterpassword">Enter PassWord:</label>
					<input
						type="text"
						onChange={ (event) =>
							setCount(event.target.value) }
					/>
				</div>
				</div>
				<input type="submit" value="  Login  "/><br/>
			</div>
		</center>
	</div>;
};

export default GmailLogin;
