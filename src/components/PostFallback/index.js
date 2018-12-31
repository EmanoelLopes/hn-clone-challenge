import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FallBack } from './styles';

function FallbackPost ({ message, icon }) {
  return (
    <FallBack>
      <p><FontAwesomeIcon icon={icon} />
        { message }
      </p> 
    </FallBack>
  );
};

FallbackPost.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.object
};

export default FallbackPost;