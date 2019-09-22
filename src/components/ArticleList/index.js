import React from 'react';
import Article from '../Article';

export default class ArticleList extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			openArticleId: null
		}
	}
	handleClick(openArticleId){
		this.setState({
			openArticleId: (this.state.openArticleId===openArticleId)?null:openArticleId
		});
	}
	render(){
		const articleList = this.props.articleList.map((article, index) => 
			<Article key={article.id} article = {article} isOpen={this.state.openArticleId===article.id} onClick = {this.handleClick.bind(this, article.id)}/>
		);
		return(
			<div className="articles">
				{articleList}
			</div>
		);
	}
}