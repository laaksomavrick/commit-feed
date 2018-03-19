// Home.js
// Highest level component for authorized user

import React from 'react'
import { connect } from 'react-redux'

import NavigationBar from '../NavigationBar/NavigationBar.js'
import { async_get_user } from '../../actions/user.js'

import './Home.css'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(async_get_user())
  }

  http_heartbeat = () => {
    fetch('/api/heartbeat', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  render() {
    const state = this.props
    return (
      <div className="home-container">
        <NavigationBar />
        <button onClick={this.http_heartbeat}>http</button>
      </div>
    )
  }

}

const map_state_to_props = state => {
  return state
}

export default connect(map_state_to_props)(Home)
