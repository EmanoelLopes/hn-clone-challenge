import React from 'react';
import PropTypes from 'prop-types';
import { Picture } from './styles';

function Avatar ({ source, altText, hasBadge, children }) {
  return (
    <div className="avatar">
      { (hasBadge) ? children : null }
      <Picture src={source} alt={altText}/>
    </div>
  );
};

Avatar.propTypes = {
  source: PropTypes.string,
  altText: PropTypes.string,
  hasBadge: PropTypes.bool,
  children: PropTypes.object
};

export default Avatar;