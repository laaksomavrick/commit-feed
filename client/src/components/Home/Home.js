// Home.js
// Highest level component for authorized user

import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavigationBar from '../NavigationBar/NavigationBar.js'
import BoardGrid from '../BoardGrid/BoardGrid.js'
import AddBoardDialog from '../AddBoardDialog/AddBoardDialog.js'
import SideBar from '../SideBar/SideBar.js'
import BoardContainer from '../BoardContainer/BoardContainer.js'
import { get_initial_data } from '../../actions/app.js'

import './Home.scss'

class Home extends React.Component {

  componentDidMount() {
    const { setup } = this.props
    setup()
  }

  render() {
    // TODO: SSR will remove the need for loading at some point
  
    const { ui } = this.props

    const element = ui.home_loaded ? (
        <Switch>
          <Route path="/board/:id" component={BoardContainer} />
          <Route exact path="/" component={BoardGrid} />
          <Route component={() => <Redirect to="/" /> } /> 
        </Switch>
    ) : (
      <div> Loading </div>
    )

    return (
      <div className="home">
        <NavigationBar />
        <SideBar />
        <AddBoardDialog />
        <div className="home__content">
          {element}
        </div>
      </div>
    )

  }

}

const map_state_to_props = state => {
  return { 
    ui: state.ui 
  }
}

const map_dispatch_to_props = dispatch => {
  return {
    setup: () => { dispatch(get_initial_data()) }
  }
}

export default connect(map_state_to_props, map_dispatch_to_props)(Home)
