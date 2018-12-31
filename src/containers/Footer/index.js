import React from 'react';
import FooterWrapper from './styles';
import Logo from '../../components/Logo';
import SocialMedia from '../../components/SocialMedia';
import FooterNav from '../../components/FooterNav';

function Footer () {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="app-footer-left">
          <Logo />
          <div className="description">
            <p>
              <strong>The UX Libray</strong>
            </p>
            <p>Community curated design content & discusion</p>
          </div>
        </div>
        <div className="app-footer-right">
          <SocialMedia />
          <FooterNav />
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;