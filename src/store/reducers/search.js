import initialState from '../state';
import types from '../actionTypes';

const search = function (state = initialState.search, action) {
  switch (action.type) {
    case types.FILTER_POSTS:
      return action.value;
    default:
      return state;
  }
};

export default search;