import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import MainWrapper from './styles';
import LoadMore from '../../components/LoadMore';
import Post from '../../components/Post';
import Sort from '../../components/Sort';
import PostFallback from '../../components/PostFallback';
import { fetchPosts } from '../../store/actions';

class MainContent extends Component {
  getVisiblePosts(posts) {
    const visiblePosts = posts
      .filter(post => post.meta.title
        .toLowerCase()
        .includes(this.props.search.toLowerCase()))
      .map(post => (
        <Post
          key={Math.ceil(Math.random() * post.created_at)}
          upvotes={post.upvotes}
          url={post.meta.url}
          title={post.meta.title}
          categoryType={post.category}
          category={post.category.replace('_', ' ')}
          author={post.meta.author}
          createdAt={post.created_at}
          comments={post.comments}
          owner={post.isOwner}>
        </Post>
      ));

    return (visiblePosts.length) 
      ? visiblePosts 
      : <PostFallback icon={faFrown} message="No post found!" />;
  }

  componentDidMount() {
    const { dispatch, getPosts } = this.props;
    dispatch(fetchPosts(getPosts));
  }

  render() {
    return (
      <MainWrapper>
        <div className="container">
          <Sort />
          <div className="post">
            <ReactCSSTransitionGroup
              transitionName="post-item"
              transitionEnterTimeout={250}
              transitionLeaveTimeout={150}>
              { this.getVisiblePosts(this.props.visiblePosts) }
            </ReactCSSTransitionGroup>
          </div>
          <LoadMore />
        </div>
      </MainWrapper>
    );
  }
};

function mapStateToProps (state) {
  const { visiblePosts, search } = state;
  return {
    visiblePosts,
    search
  };
};

MainContent.propTypes = {
  visiblePosts: PropTypes.array,
  search: PropTypes.string,
  dispatch: PropTypes.func,
  getPosts: PropTypes.func
};

export default connect(
  mapStateToProps
)(MainContent);
