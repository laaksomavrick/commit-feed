// Home.js
// Highest level component for authorized user

import React from 'react'
import { connect } from 'react-redux'

import NavigationBar from '../Navigation/NavigationBar/NavigationBar.js'
import { get_initial_data } from '../../actions/app.js'

import './Home.css'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(get_initial_data())
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

    const element = state.ui.home_loaded ? (
      <NavigationBar />
    ) : (
      <div> Loading </div>
    )

    return (
      <div className="home-container">
        { element }
      <button onClick={this.http_heartbeat}>http</button>
      </div>
    )

  }

}

const map_state_to_props = state => {
  return state
}

export default connect(map_state_to_props)(Home)
