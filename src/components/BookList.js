import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';

class BookList extends Component {
	render() {
		if (this.props.bookList) {
			return <div>{this.props.bookList[0].title}<BookListItem /></div>;
		}

		return (
			<div>Loading book list...</div>
		);
	}
}

// this function along with the connect function below is what makes pieces of application state available as props to our component
function mapStateToProps(state) {
	return {
		bookList: state.bookList
	};
}

export default connect(mapStateToProps)(BookList);