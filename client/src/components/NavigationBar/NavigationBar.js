// NavigationBar/NavigationBar.js

import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import './NavigationBar.css'

class NavigationBar extends React.Component {

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            React Kanban
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }

}

const map_state_to_props = state => {
  return { repos: state.repos }
}

export default connect(map_state_to_props)(NavigationBar)
