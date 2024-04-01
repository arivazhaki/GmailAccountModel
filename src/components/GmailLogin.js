import { React } from 'react';
import Circle from './Circle';

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
			<input type="text"/></div>
		</div>
		<input type="submit" value="  Login  "/><br/>
		<button onClick={ Circle }/>
	</div></center>
</div>;

export default GmailLogin;
