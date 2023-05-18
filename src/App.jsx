import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { notificationActions } from './_actions';
import MainLayout from 'layouts/MainLayout';
import UserLayout from 'layouts/UserLayout';
import ErrorLayout from 'layouts/ErrorLayout';
import { history } from '_helpers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      notificationActions && dispatch(notificationActions.clear());
    });
  }, []);

  function getRedirectPageUrl() {
    return "/main/dashboard";
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path="/main" render={props => securePage(props)} />
        <Route path="/user" render={props => inSecurePage(props)} />
        <Route path="/error" render={props =>  <ErrorLayout {...props} />} />
        <Redirect from="/" to={getRedirectPageUrl()} />
      </Switch>
    </Router>
  );

  function inSecurePage(props) {
    return (
      localStorage.getItem('cu')
        ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        : <UserLayout {...props} />
    );
  }

  function securePage(props) {
    return (
      localStorage.getItem('cu')
        ? <MainLayout {...props} />
        : <Redirect to={{ pathname: '/user/login', state: { from: props.location } }} />
    );
  }
}

export default App;