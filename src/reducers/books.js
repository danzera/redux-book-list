export default (state, action) => {
	console.log('books action creator run with state', state, 'and action', action);
	return [
		{title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.R.R. Tolkien', pages: 223, published: 1997, genre: 'Fiction'},
		{title: 'Lord of the Rings: The Fellowship of the Ring', author: 'J.K. Rowling', pages: 423, published: 1954, genre: 'Fiction'},
		{title: 'Cloud Atlas', author: 'David Mitchell', pages: 544, published: 2004, genre: 'Fiction'},
		{title: 'Walden', author: 'Henry David Thoreau', pages: 262, published: 1854, genre: 'Non-fiction'},
		{title: 'The 4-Hour Workweek', author: 'Timothy Ferris', pages: 308, published: 2007, genre: 'Non-fiction'},
	];
}