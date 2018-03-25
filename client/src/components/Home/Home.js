// Home.js
// Highest level component for authorized user

import React from 'react'
import { connect } from 'react-redux'

import EventList from '../Events/EventList/EventList.js'
import { get_initial_data } from '../../actions/app.js'

import './Home.css'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(get_initial_data())
  }

  render() {
    const state = this.props

    const element = state.ui.home_loaded ? (
      <EventList />
    ) : (
      <div> Loading </div>
    )

    return (
      <div className="home-container">
        { element }
      </div>
    )

  }

}

const map_state_to_props = state => {
  return state
}

export default connect(map_state_to_props)(Home)
