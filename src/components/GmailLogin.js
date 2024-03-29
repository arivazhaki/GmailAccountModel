import { React } from 'react';

const boxStyle = {
	width: '300px',
	border: '1px solid #ccc',
	borderRadius: '5px',
	padding: '20px',
	margin: '0 auto',
	marginTop: '100px',
};

const GmailLogin = () => <div>
	<bold> <h1>GOOGLE ACCOUNT </h1> </bold>
	<h1> Welcome To Google Account</h1>
	<label htmlFor="fname">Enter Your MailId:</label>
	<input type="text"/>
	<h2>Enter your Passward:</h2>
	<input type="text" value="Enter Passward"/>
	<div><input type="submit" value="Submit"/></div>
	<div style={ boxStyle }/>
</div>;

export default GmailLogin;
