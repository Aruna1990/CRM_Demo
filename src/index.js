import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import UserManager from './app/containers/UserManager';
import PointLogger from './app/containers/PointLogger';
import configureStore from './app/store/configureStore';
import UserDetails from './app/components/UserDetails';
import EditPoint from './app/components/EditPoint';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="user"/>
        <Route path="user">
          <IndexRedirect to="list"/>
          <Route path="list" component={UserManager}/>
          <Route path="details/:id" component={UserDetails}>
            <Route path="editPoint" component={EditPoint}/>
          </Route>
        </Route>
        <Route path="point" component={PointLogger}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
