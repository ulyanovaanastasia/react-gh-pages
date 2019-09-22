import React from 'react';
import './styles.sass';
import Header from '../Header'
import ArticleList from '../ArticleList';
import articles from '../../data/articles';


class App extends React.PureComponent {
	constructor(props){
		super(props);
		this.state = {
			reverted: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState({reverted: !this.state.reverted});
	}
	render(){
		return (
			<div className="app d-flex flex-column h-100">
				<Header listReverted={this.state.reverted} onClick={this.handleClick}/>
				<div className="main flex-grow-1">
					<div className="container">
						<ArticleList articleList = {this.state.reverted?articles.slice().reverse(): articles}/>
					</div>
				</div>
				<div className="footer"></div>
			</div>
		);
	}
}

export default App;
