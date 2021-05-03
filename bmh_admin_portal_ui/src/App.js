import React, { useState,useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './util/oidc';
import PrivateRoute from "./components/private-route"
import NavBar from './components/nav-bar';
import WorkspaceAccounts from './views/workspace-accounts';
import RequestWorkspace from './views/request-workspace';
import LoginForm from './views/login-form';
import LoginCallback from './views/login-callback';
import './App.css';

export default function App() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  return (
    <div className="App">
    <NavBar isAuthenticated={authenticated}/>
    <div className="container">
      <Switch>
        
        {/* Public routes meant for login */}
        <Route exact path="/login/callback">
          <LoginCallback setParentAuthenticated={setAuthenticated} />
        </Route>
        <Route exact path="/login" component={LoginForm}/>
        
        {/* React Router protected routes */}
        <PrivateRoute path="/request-workspace" component={RequestWorkspace} />
        <PrivateRoute path="/" component={WorkspaceAccounts} />

      </Switch>
    </div>
  </div>
  )
}