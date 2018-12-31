import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { SocialList } from './styles';

function SocialMedia () {
  return (
    <SocialList className="social-media">
      <li>
        <a href="/" title="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
          <span>Facebook</span>
        </a>
      </li>
      <li>
        <a href="/" title="Twitter">
          <FontAwesomeIcon icon={faTwitterSquare} />
          <span>Twitter</span>
        </a>
      </li>
    </SocialList>
  );
};

export default SocialMedia;