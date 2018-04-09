// Home.js
// Highest level component for authorized user

import React from 'react'
import { connect } from 'react-redux'

import NavigationBar from '../NavigationBar/NavigationBar.js'
import BoardGrid from '../BoardGrid/BoardGrid.js'
import AddBoardModal from '../AddBoardModal/AddBoardModal.js'
import { get_initial_data } from '../../actions/app.js'

import './Home.css'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(get_initial_data())
  }

  render() {
    // TODO: SSR will remove the need for loading at some point
    // TODO: side bar, router for board list / active bar
    const state = this.props

    const element = state.ui.home_loaded ? (
      <div className="home-container">
        <NavigationBar />
        <BoardGrid />
        <AddBoardModal />
      </div>
    ) : (
      <div> Loading </div>
    )

    return (
      element 
    )

  }

}

const map_state_to_props = state => {
  return state
}

export default connect(map_state_to_props)(Home)
