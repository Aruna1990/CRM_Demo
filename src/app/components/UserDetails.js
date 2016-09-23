import React, {Component} from 'react';
import {Link} from 'react';

class UserDetails extends Component {
  render() {
    console.log(this.props.location);
    return (
      <div>
        <h1>用户详情页</h1>
        用户ID：
        <div>{this.props.routeParams.id}</div>
      </div>
    );
  }
}

export default UserDetails;
