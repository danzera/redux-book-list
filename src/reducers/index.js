import { combineReducers } from 'redux';
import BookList from './books';

const rootReducer = combineReducers({
  bookList: BookList
});

export default rootReducer;
