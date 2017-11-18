// need to set default state = null b/c state is undefined at initial app load and Redux doesn't appreciate undefined being returned
export default (state = null, action) => {
	switch (action.type) {
		case 'BOOK_SELECTED':
			console.log('BOOK_SELECTED hit in selectedBook reducer with action', action);
			return action.payload;
		default:
			return state;
	}
}