import {Link} from 'react-router';
import React, {Component} from 'react';
// import classnames from 'classnames';

class HeaderNavs extends Component {
  render() {
    return (
      <nav>
        <a href="http://www.baidu.com">模块1</a>
        <a href="http://www.baidu.com">模块2</a>
        <Link to="/user" className="active">CRM</Link>
      </nav>
    );
  }
}

export default HeaderNavs;
