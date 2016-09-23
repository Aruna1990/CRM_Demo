import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UserTable from '../components/UserTable';
import * as Actions from '../actions/index';

class UserManager extends Component {
  constructor(props, context) {
    super(props, context);
    this.fetchUserList = this.fetchUserList.bind(this);
  }
  fetchUserList() {
    /*
     * TODO dispatch fetchUserList action
     */
    this.props.actions.fetchUserList();
  }

  render() {
    return (
      <div><UserTable list={this.props.users} onNextPage={this.fetchUserList}/></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManager);
