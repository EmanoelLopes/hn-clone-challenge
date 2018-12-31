import types from '../actionTypes';
import { Posts } from '../../services/data';

function getVisiblePosts(payload) {
  return {
    type: types.VISIBLE_POSTS,
    posts: payload
  };
};

function sortByUpvotes(payload) {
  return {
    type: types.SORT_BY_UPVOTES,
    posts: payload
  };
};

function sortByComments(payload) {
  return {
    type: types.SORT_BY_COMMENTS,
    posts: payload
  };
};

function sortByDate(payload) {
  return {
    type: types.SORT_BY_DATE,
    posts: payload
  };
};

function filterPosts(value) {
  return {
    type: types.FILTER_POSTS,
    value
  };
};

function fetchPosts() {
  return async dispatch => {
    const response = await Posts.get();
    const posts = response.data.links;
    dispatch(getVisiblePosts(posts));
  };
};

export {
  getVisiblePosts,
  sortByUpvotes,
  sortByComments,
  sortByDate,
  filterPosts,
  fetchPosts
};