// App.js
// Highest level component; disjointed between login and authenticated app

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import PrivateRoute from './PrivateRoute.js'
import Login from './Login.js'
import Home from './Home.js'

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={() => <Redirect to="/home" />} /> 
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
        </div>
      </Router>
    )
  }

}
