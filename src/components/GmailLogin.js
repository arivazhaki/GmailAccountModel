/* eslint-disable no-console */
import { React } from 'react';
import ComponentNew from './ComponentNew';

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

const subscribeMsg = () =>
	<div> welcome Our GMai lAccount</div>;

const handleChange = (event) => console.log(event.target.value);

const GmailLogin = () => <div><center>
	<div style={ boxStyle }>
		<bold>
			<h1>GOOGLE ACCOUNT </h1>
		</bold>
		<h2> Welcome To Google Account</h2>
		<label htmlFor="mailId">Enter Your MailId:</label>
		<input type="text"/><br/>
		<div><div style={ ex }>
			<label htmlFor="enterpassward">Enter PassWard:</label>
			<input type="text" onChange={ handleChange }/></div>
		</div>
		<input type="submit" value="  Login  "/><br/>
		<button onClick={ subscribeMsg }/>
		<button onClick={ ComponentNew }/>
	</div></center>
</div>;

export default GmailLogin;
