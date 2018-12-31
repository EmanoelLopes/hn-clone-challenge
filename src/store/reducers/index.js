import { combineReducers } from 'redux';
import visiblePosts from './visiblePosts';
import search from './search';

const reducers = combineReducers({
  visiblePosts,
  search
});

export default reducers;
