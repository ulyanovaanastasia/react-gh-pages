import React from 'react';
import Article from '../Article';

export default function ArticleList (props){
	const articleList = props.articleList.map((article, index) => 
		<Article key={article.id} article = {article} defaultOpen = {index===0}/>
	);
	return(
		<div className="articles">
			{articleList}
		</div>
	);
}