import React from 'react';
import './styles.sass';
import logo from './images/logo.svg';


export default function Header(props) {
	return(
		<div className="header navbar navbar-expand-lg navbar-light bg-light mb-5 shadow-sm py-2">
			<div className="container">
				<div className="d-flex align-items-center">
					<div className="header__logo mr-3">
						<img src={logo} className="App-logo" alt="logo" />
					</div>
					<div className="heder__title">
						<h1>Article list</h1>
					</div>
					<div className="header__button ml-4">
						<div className="btn btn-success">Revert</div>
					</div>
				</div>
			</div>
		</div>
	);
}