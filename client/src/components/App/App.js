// App.js
// Highest level component; disjointed between login and authenticated app

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import PrivateRoute from '../PrivateRoute.js'
import Login from '../Login.js'
import Home from '../Home/Home.js'
import './App.css'

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/app" component={Home} />
            <Route exact path="/" component={() => <Redirect to="/app" />} /> 
            <Route path="/*" component={() => <Redirect to="/" />} /> 
          </Switch>
        </div>
      </Router>
    )
  }

}
