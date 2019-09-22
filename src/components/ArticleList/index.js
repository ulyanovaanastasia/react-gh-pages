import React from 'react';
import Article from '../Article';

export default class ArticleList extends React.PureComponent{
	constructor(props){
		super(props);

	}
	render(){
		const articleList = this.props.articleList.map((article, index) => 
			<Article key={article.id} article = {article} defaultOpen = {index===0}/>
		);
		return(
			<div className="articles">
				{articleList}
			</div>
		);
	}
}