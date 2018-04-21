// Home.js
// Highest level component for authorized user

import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../NavigationBar/NavigationBar.js'
import BoardGrid from '../BoardGrid/BoardGrid.js'
import AddBoardDialog from '../AddBoardDialog/AddBoardDialog.js'
import SideBar from '../SideBar/SideBar.js'
import Tasks from '../Tasks/Tasks.js'
import { get_initial_data } from '../../actions/app.js'

import './Home.css'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(get_initial_data())
  }

  render() {
    // TODO: SSR will remove the need for loading at some point
  
    const { ui } = this.props

    const element = ui.home_loaded ? (
        <Switch>
          <Route exact path="/" component={BoardGrid} />
          <Route path="/board/:id" component={Tasks} />
        </Switch>
    ) : (
      <div> Loading </div>
    )

    return (
      <div className="home-container">
        <NavigationBar />
        <SideBar />
        <AddBoardDialog />
        {element}
      </div>
    )

  }

}

const map_state_to_props = state => {
  return { ui: state.ui }
}

export default connect(map_state_to_props)(Home)
