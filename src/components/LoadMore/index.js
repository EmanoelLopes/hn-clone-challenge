import React from 'react';
import { Loading } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

function LoadMore() {
  return (
    <Loading>
      <a href="/" title="Load More">
        <FontAwesomeIcon icon={faSyncAlt} />
        <span>Load More</span>
      </a>
    </Loading>
  );
};

export default LoadMore;