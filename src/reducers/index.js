import { combineReducers } from 'redux';
import BookList from './books';
import SelectedBook from './selectedBook';

const rootReducer = combineReducers({
  bookList: BookList,
  selectedBook: SelectedBook
});

export default rootReducer;
