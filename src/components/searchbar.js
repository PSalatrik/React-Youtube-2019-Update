import React, { Component } from 'react';

class Searchbar extends Component{

	state = { term: ' ' };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	}; 

	onFormSubmit = (event) => {
		event.preventDefault();
		// Make sure we call callback from parent component - so we can tell app we submited form and issue a new API call
		this.props.onTermSubmit(this.state.term);
	}

	render(){
		return (
			<div className="search-bar ui segment">
			 <form onSubmit={ this.onFormSubmit } className="ui form">
			  <div className="field">
			   <label>Video Search</label>
			   	<input
			   		onChange={ this.onInputChange }
			   		type="text"
			   		value={this.state.term}
			   	 />
			  </div>
			 </form>
			</div>
		);
	};
}

export default Searchbar