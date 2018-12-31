import compareAsc from 'date-fns/compare_asc';
import initialState from '../state';
import types from '../actionTypes';

const visiblePosts = function visiblePosts(state = [...initialState.visiblePosts], action) {
  switch (action.type) {
    case types.VISIBLE_POSTS:
      return [
        ...state,
        ...action.posts
      ];
    case types.SORT_BY_UPVOTES:
      return [
        ...action.posts.sort((a, b) => {
          if (a.upvotes < b.upvotes) {
            return 1;
          }
          if (a.upvotes > b.upvotes) {
            return -1;
          }
          return 0;
        })
      ];
    case types.SORT_BY_COMMENTS:
      return [
        ...action.posts.sort((a, b) => {
          if (a.comments < b.comments) {
            return 1;
          }
          if (a.comments > b.comments) {
            return -1;
          }
          return 0;
        })
      ];
    case types.SORT_BY_DATE:
      return [
        ...action.posts.sort((a, b) => {
          return compareAsc(a.created_at, b.created_at);
        })
      ];
    default:
      return state;
  }
};

export default visiblePosts;