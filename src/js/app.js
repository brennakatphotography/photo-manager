import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { makeStore } from './utils/connectStore';

import rootReducers from './reducers/root';
import middleware from './utils/middleware';
import App from './components/App';
import Login from './components/Login';
import Main from './components/Main';

const reducers = makeStore(routerReducer);
const store = createStore(reducers, applyMiddleware(...middleware));
const history = syncHistoryWithStore(browserHistory, store);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Main} />
          <Route path="/login" component={Login} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app'));
});