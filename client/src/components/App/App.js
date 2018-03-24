// App.js

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import Home from '../Home/Home.js'
import './App.css'

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app-container">
          <Route path="/" component={Home} />
        </div>
      </Router>
    )
  }

}
