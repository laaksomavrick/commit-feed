// NavigationBar/NavigationBar.js

import React from 'react'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'

import NavigationAddButton from '../NavigationAddButton/NavigationAddButton.js'

import { set_sidebar_open } from '../../actions/ui.js'

import './NavigationBar.css'

class NavigationBar extends React.Component {

  handle_menu_click = e => {
    const { dispatch } = this.props
    dispatch(set_sidebar_open(true))
  }

  render() {
    return (
      <div className="navigation-bar-container">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={this.handle_menu_click}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className="title">
              React Kanban
            </Typography>
            <NavigationAddButton />
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}

const map_state_to_props = state => {
  return { repos: state.repos }
}

export default connect(map_state_to_props)(NavigationBar)
