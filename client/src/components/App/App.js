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

  // <Route exact path="/" component={() => <Redirect to="/home" />} /> 

  render() {
    return (
      <Router>
        <div className="app-container">
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Home} />
        </div>
      </Router>
    )
  }

}
