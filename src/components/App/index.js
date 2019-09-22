import React from 'react';
import logo from './images/logo.svg';
import './styles.sass';
import ArticleList from '../ArticleList/';
import articles from '../../data/articles';


function App() {
	return (
		<div className="App d-flex flex-column h-100">
			<div className="header"></div>
			<div className="main flex-grow-1">
				<div className="container">
					<div className="App__logo text-center">
						<img src={logo} className="App-logo" alt="logo" />
					</div>
					<ArticleList articleList = {articles}/>
				</div>
			</div>
			<div className="footer"></div>
		</div>
	);
}

export default App;
