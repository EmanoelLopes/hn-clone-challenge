import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUserCircle, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { PostData } from './styles';

function Post (props) {

  const {
    upvotes,
    url,
    title,
    category,
    categoryType,
    author,
    createdAt,
    comments,
    owner
  } = props;

  return (
    <PostData>
      <div className="up-votes">
        <span><FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon></span>
        <span>{upvotes}</span>
      </div>
      <div className="post">
        <a className="post-link" href={`http://${url}`} title={url}>{url}</a>
        <h2 className="post-title">{title}</h2>
        <div className="post-resume">
          <span className={`category ${categoryType}`}>{category}</span>
          <span className="author">
            <a href="/" title={author}>
              <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
              {author}
            </a>
          </span>
          <span className="date">
            {format(createdAt, 'MM/DD/YYYY')}
          </span>
          <span className="comments">
            <a href="/" title={`${comments} Comments`}>
              <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
              {comments} Comments
            </a>
          </span>
          <span className="edit">
            {(owner) ? <a href="/" title="Edit">Edit</a> : null}
          </span>
        </div>
      </div>
    </PostData>
  );
};

Post.propTypes = {
  upvotes: PropTypes.number,
  url: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  categoryType: PropTypes.string,
  author: PropTypes.string,
  createdAt: PropTypes.number,
  comments: PropTypes.number,
  owner: PropTypes.bool
};

export default Post;