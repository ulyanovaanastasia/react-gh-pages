import React from 'react';
import Article from '../Article/';

export default function ArticleList (props){
	const articleList = props.articleList.map(article => 
		<Article key={article.id} article = {article}/>
	);
	return(
		<div className="articles">
			{articleList}
		</div>
	);
}