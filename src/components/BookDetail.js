import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		return (
			<div>
				BookDetail
			</div>
		);
	}		
}

function mapStateToProps(state) {
	console.log('mapStateToProps in BookDetail with state', state);
	return { selectedBook: state.selectedBook};
}

export default connect(mapStateToProps)(BookDetail);