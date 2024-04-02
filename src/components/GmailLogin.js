/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';

const boxStyle = {
	width: '500px',
	height: '500px',
	border: '10px solid black',
	borderRadius: '10px',
	padding: '20px',
	margin: '25px',
	marginTop: '100px',
	backgroundColor: 'pink',
};

const ex = { margin: '30px' };

const GmailLogin = () => {
	const [userName, setUserName] = useState('');
	const [passWord, setPassword] = useState('');
	const [email, setEmail] = useState('example@example.com');

	const clickChange = () => {
		setUserName('');
		setPassword('');
		setEmail(`Welcome ${ userName }`);
	};

	return <div>
		<center>
			<div style={ boxStyle }>
				<h1> Welcome To Laufire Account </h1>
				<label htmlFor="mailId">Enter Your MailId:</label>
				<input
					type="text"
					value={ userName }
					onChange={ (event) =>
						setUserName(event.target.value) }
				/><br/>
				<div><div style={ ex }>
					<label htmlFor="enterpassword">Enter PassWord:</label>
					<input
						type="text"
						value={ passWord }
						onChange={ (event) =>
							setPassword(event.target.value) }
					/>
				</div>
				</div>
				<input
					type="submit"
					value="
				 Login  "
					onClick={ clickChange }
				/><br/>
				<div>{ userName }</div>
				<button
					type="button"
					onClick={ () => setPassword('blue') }
				>Blue</button>
				<p><div>{ email } @laufire.com </div></p>
			</div>
		</center>
	</div>;
};

export default GmailLogin;
