// components/SideBar/SideBar.js

import React from 'react'
import { connect } from 'react-redux'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubHeader'
import Divider from 'material-ui/Divider'
import AddIcon from 'material-ui-icons/Add'

import { set_sidebar_open, set_add_board_modal_open } from '../../actions/ui.js'

import './SideBar.css'

class SideBar extends React.Component {

  handle_close = e => {
    const { dispatch } = this.props
    dispatch(set_sidebar_open(false))
  }

  handle_add = e => {
    const { dispatch } = this.props
    this.handle_close()
    dispatch(set_add_board_modal_open(true))
  }

  render() {

    const { open } = this.props
    const { boards } = this.props
    const content = boards.map((board, index) =>
      <ListItem button key={index}>
        <ListItemText primary={board.name}></ListItemText>
      </ListItem>
    )
    const actions = (
      <ListItem button key={0} onClick={this.handle_add}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add new board"></ListItemText>
      </ListItem>
    )

    return (

        <Drawer
          className="side-bar"
          open={open}
          onClose={this.handle_close}
        >
          <List 
            className="side-bar__list"
            subheader={<ListSubheader component="div">Boards</ListSubheader>}
          >
            {content}    
          </List>
          <Divider />
          <List
            subheader={<ListSubheader component="div">Actions</ListSubheader>}
          >
            {actions}
          </List>
        </Drawer>
    )

  }

}

const map_state_to_props = state => {
  return { 
    open: state.ui.sidebar_open,
    boards: state.boards
  }
}

export default connect(map_state_to_props)(SideBar)
