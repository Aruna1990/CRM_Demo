import {Link} from 'react-router';
import React, {Component} from 'react';

import '../styles/sidebar.css';

class SidebarNavs extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link className="nav-item" to="/user" activeClassName="active">用户管理</Link>
        <Link className="nav-item" to="/point" activeClassName="active">积分日志</Link>
      </div>
    );
  }
}

export default SidebarNavs;
