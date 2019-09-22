import React from 'react';

class Article extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isOpen: this.props.defaultOpen
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	componentWillMount(){
		
	}
	render(){
		const article = this.props.article;
		const body = this.state.isOpen && <div className="article__text card-body">{article.text}</div>;
		return(
			<div className="article mb-4 card">
				<div className="article__header card-header d-flex">
					<h2 className="article__title">{article.title}</h2>
					<div className="btn btn-primary ml-auto" onClick={this.handleClick}>{this.state.isOpen?'Close':'Open'}</div>
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