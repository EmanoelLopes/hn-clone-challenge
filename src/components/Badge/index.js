import React from 'react';
import PropTypes from 'prop-types';
import { Counter } from './styles';

function Badge ({ amount }) {
  return (
    <Counter className="badge">
      {amount}
    </Counter>
  );
};

Badge.propTypes = {
  amount: PropTypes.string
};

export default Badge;