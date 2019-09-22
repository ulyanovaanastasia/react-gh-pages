import React from 'react';
import './styles.sass';
import Header from '../Header'
import ArticleList from '../ArticleList';
import articles from '../../data/articles';


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			reverted: false
		}
	}
	render(){
		return (
			<div className="app d-flex flex-column h-100">
				<Header />
				<div className="main flex-grow-1">
					<div className="container">
						<ArticleList articleList = {articles}/>
					</div>
				</div>
				<div className="footer"></div>
			</div>
		);
	}
}

export default App;
