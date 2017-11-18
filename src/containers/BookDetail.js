import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		const selectedBook = this.props.selectedBook;

		if (!selectedBook) {
			return (
				<div>
					<h3>Click a book for additional information...</h3>
				</div>
			);
		}

		return (
			<div>
				<h3>{selectedBook.title}</h3>
				<div>Author: {selectedBook.author}</div>
				<div>Pages: {selectedBook.pages}</div>
				<div>Published: {selectedBook.published}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps in BookDetail with state', state);
	return { selectedBook: state.selectedBook};
}

export default connect(mapStateToProps)(BookDetail);