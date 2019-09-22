import React from 'react';
import logo from './logo.svg';
import './App.sass';

function App() {
	return (
		<div className="App d-flex flex-column h-100">
			<div className="header"></div>
			<div className="main flex-grow-1">
				<div className="container">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						My app 3
					</p>
					<button className="btn btn-primary">button</button>
				</div>
			</div>
			<div className="footer"></div>
		</div>
	);
}

export default App;
