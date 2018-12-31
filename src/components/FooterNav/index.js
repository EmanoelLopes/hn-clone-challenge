import React from 'react';
import { Navigation, Copyrights } from './styles';

function FooterNav () {
  return (
    <div className="footer-nav">
      <Navigation>
        <a href="/" title="About">About</a>
        <a href="/" title="Contact">Contact</a>
        <a href="/" title="Sign In">Sign In</a>
      </Navigation>
      <Copyrights>&copy; 2014 - The UX Library</Copyrights>
    </div>
  );
};

export default FooterNav;