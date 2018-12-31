import React, { Component } from 'react';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import HeaderWrapper from './styles';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Search from '../../components/Search';
import Avatar from '../../components/Avatar';
import Badge from '../../components/Badge';
import Renan from '../../assets/images/renan.jpg';
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="container">
          <div className="app-header-left">
            <Logo />
            <Button default={true} icon={faBars} />
            <Search />
          </div>
          <div className="app-header-right">
            <Button type="primary add-post" icon={faPlus} label="Add Post" />
            <Avatar source={Renan} altText="Renan" hasBadge={true}>
              <Badge amount="9" />
            </Avatar>
          </div>
        </div>
      </HeaderWrapper>
    ); 
  }
};

export default Header;