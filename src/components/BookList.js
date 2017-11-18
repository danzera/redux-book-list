import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';

class BookList extends Component {
	renderBookList() {
		return this.props.bookList.map((book, index, bookList) => {
			return <BookListItem />
		});
	}

	render() {
		if (!this.props.bookList) {
			return <div>Loading book list...</div>;
		}

		return (
			<div>{this.renderBookList()}</div>
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