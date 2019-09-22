import React from 'react';

class Article extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		};
	}
	render(){
		const {article, isOpen} = this.props;
		const body = isOpen && <div className="article__text card-body">{article.text}</div>;
		return(
			<div className="article mb-4 card">
				<div className="article__header card-header d-flex">
					<h2 className="article__title">{article.title}</h2>
					<div className="btn btn-primary ml-auto" onClick={this.props.onClick}>{isOpen?'Close':'Open'}</div>
				</div>
				<div className="card-body">
					<div className="card-subtitle article__date text-gray">Date: {article.date}</div>
					{body}
				</div>
				
			</div>
		);
	}
}


export default Article