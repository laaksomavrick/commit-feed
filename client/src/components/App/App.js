// App.js
// Highest level component; disjointed between login and authenticated app

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import PrivateRoute from '../Route/PrivateRoute.js'
import Login from '../Login.js'
import Home from '../Home/Home.js'
import './App.scss'

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }

}
