import React from 'react';

export default ({ book, bookSelected }) => {
	return <li className="list-group-item" onClick={event => bookSelected(book)}>{book.title}</li>;
}