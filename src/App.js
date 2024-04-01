import { React } from 'react';
import './App.scss';
import GmailLogin from './components/GmailLogin';
import ComponentNew from './components/ComponentNew' ;

const App = () =>
	<div className="App">
		<GmailLogin/>
		<ComponentNew/>
	</div>;

export default App;
