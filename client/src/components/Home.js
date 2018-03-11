// Home.js
// Highest level component for authorized user

import React from 'react'
import { connect } from 'react-redux'
import { async_get_user } from '../actions/user'

class Home extends React.Component {

  //TODO: loading mask
  
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(async_get_user())
  }

  heartbeat = () => {
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
      <button onClick={this.heartbeat}>Heartbeat</button>
    )
  }

}

const map_state_to_props = state => {
  return state
}

export default connect(map_state_to_props)(Home)
