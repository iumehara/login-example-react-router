import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Route, Router, Link, withRouter } from 'react-router'
import About from './About'
import App from './App'
import Dashboard from './Dashboard'
import Login from './Login'
import Logout from './Logout'

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="about" component={About} />
      <Route path="dashboard" component={Dashboard} name={'hello'} />
    </Route>
  </Router>,
  document.getElementById('login-example')
)
