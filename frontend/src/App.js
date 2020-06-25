import React from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from 'redux/action/login';
import { Route, BrowserRouter as Router, Switch, withRouter } from "react-router-dom";
import AuthRoute from './components/session/AuthRoute';
import NotFound from './components/error/NotFound';

import Login from './components/login/Login';
import Main from './components/main/Main';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  dispatch(loginRequest());

  return (
    <Router>
      <div className="App">
        <Switch>
          <AuthRoute
            exact path="/"
            render={props => <Main {...props} />} />
          <Route 
            path="/login" 
            render={props => <Login {...props} />} />
          <AuthRoute
            path="/:type"
            render={props => <Main {...props} />} />
          <Route render={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
