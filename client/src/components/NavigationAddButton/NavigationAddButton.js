// NavigationAddButton / NavigationAddButton.js

import React from 'react'
import { connect } from 'react-redux'

import AddCircleIcon from 'material-ui-icons/AddCircle'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'

import { set_add_board_modal_open } from '../../actions/ui.js'

class NavigationAddButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      anchor_el: null
    }
  }

  handle_add_click = e => {
    this.setState({ anchor_el: e.currentTarget })
  }

  handle_add_close = () => {
    const { dispatch } = this.props
    this.setState({ anchor_el: null })
    dispatch(set_add_board_modal_open(true))
  }

  render() {

    const { anchor_el } = this.state
    const open = Boolean(anchor_el)

    return (
      <div>
        <IconButton 
          color="inherit"
          onClick={this.handle_add_click}
        >
          <AddCircleIcon /> 
        </IconButton>
        <Menu
          id="navigation-bar-menu"
          anchorEl={anchor_el}
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          transformOrigin={{vertical: 'top', horizontal: 'right'}}
          open={open}
          onClose={this.handle_add_close}
        >
          <MenuItem onClick={this.handle_add_close}>Add new board</MenuItem>
        </Menu>
      </div>
    )

  }

}

export default connect()(NavigationAddButton)
