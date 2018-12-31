import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonDefault } from './styles';

function Button ({ icon, label, type, click }) {
  return (
    <ButtonDefault
      className={(type) ? `button ${type}` : 'button default'}
      arial-label={label}
      onClick={click}>
      { (icon) ? <FontAwesomeIcon icon={icon} /> : null }
      { (label) ? <span>{ label }</span> : null }
    </ButtonDefault>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.object,
  label: PropTypes.string,
  click: PropTypes.func
};

export default Button;