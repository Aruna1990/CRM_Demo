import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import MainSection from '../components/MainSection';
import * as Actions from '../actions/index';

import '../styles/body.css';

class App extends Component {
  render() {
    const {actions} = this.props;
    return (
      <div>
        <Header/>
        <div className="main-section">{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
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
)(App);
