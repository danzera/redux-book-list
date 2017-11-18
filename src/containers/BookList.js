import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookListItem from '../components/BookListItem';
// no need to specify filename in the case of 'index.js'
// automatically looks for a file called 'index.js' if no filename is provided
import { bookSelected } from '../actions/';

class BookList extends Component {
	renderBookList() {
		return this.props.bookList.map((book, index, bookList) => {
			return <BookListItem
								key={book.title}
								book={book}
								bookSelected={book => this.props.bookSelected(book)} />
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ bookSelected }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);