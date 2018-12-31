import React from 'react';
import { LogoShape, LogoContent } from './styles';

function Logo () {
  return (
    <div className="app-logo">
      <a href="/" title="UX">
        <LogoShape>
          <LogoContent>UX</LogoContent>
        </LogoShape>
      </a>
    </div>
  );
};

export default Logo;