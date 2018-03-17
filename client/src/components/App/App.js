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

import PrivateRoute from '../PrivateRoute.js'
import Login from '../Login.js'
import Home from '../Home/Home.js'
import './App.css'

export default class App extends React.Component {

  //TODO: socket; singleton; don't bother with http

  render() {
    return (
      <Router>
        <div className="app-container">
          <Route exact path="/" component={() => <Redirect to="/home" />} /> 
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
        </div>
      </Router>
    )
  }

}