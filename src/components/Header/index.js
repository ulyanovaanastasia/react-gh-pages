import React from 'react';
import './styles.sass';
import logo from './images/logo.svg';


export default function Header(props) {
	return(
		<div className="header navbar navbar-expand-lg navbar-light bg-light mb-5 shadow-sm py-1">
			<div className="container">
				<div className="d-flex align-items-center flex-wrap">
					<div className="header__logo mr-1 py-15">
						<img src={logo} className="App-logo" alt="logo" />
					</div>
					<div className="heder__title py-15">
						<h1>Article list</h1>
					</div>
					<div className="header__button ml-2 py-15">
						<button className="btn btn-success" onClick={props.onClick}>{(props.listReverted)?'Normal':'Revert'}</button>
					</div>
				</div>
			</div>
		</div>
	);
}