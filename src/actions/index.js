export function bookSelected(book) {
	console.log('bookSelected action creator called', book);
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}