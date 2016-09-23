import React, {Component} from 'react';
import HeaderNavs from './HeaderNavs';
import SidebarNavs from './Sidebar';

import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo"><span>rtmap</span></div>
        <HeaderNavs/>
        <SidebarNavs/>
      </header>
    );
  }
}

export default Header;
