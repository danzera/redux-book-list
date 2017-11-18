import React from 'react';

export default ({ book }) => {
	return <li className="list-group-item" onClick={event => {console.log(book.title, 'clicked')}}>{book.title}</li>;
}