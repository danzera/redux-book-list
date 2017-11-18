import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	render() {
		if (this.props.bookList) {
			return <div>{this.props.bookList[0].title}</div>
		}

		return (
			<div>BookList</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		bookList: state.bookList
	};
}

export default connect(mapStateToProps)(BookList);