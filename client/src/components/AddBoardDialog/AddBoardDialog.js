// AddBoardDialog / AddBoardDialog.js

import React from 'react'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContextText,
  DialogTitle
} from 'material-ui/Dialog'

import Modal from '../Modal/Modal.js'

import { set_add_board_modal_open } from '../../actions/ui.js'
import { create_board } from '../../actions/board.js'

import './AddBoardDialog.scss'

class AddBoardModal extends React.Component {

  render() {

    const { open, close, submit } = this.props

    const default_state = { name: '' }

    return (
      <Modal
        open={open}
        close={close}
        submit={submit}
        default_state={default_state}
        strict={true}
        title="Create New Board"
        button="Create"
      >
        <TextField
          name="name"
          margin="normal"
          label="Board name"
          fullWidth
        />
      </Modal>
    )

  }

}

const map_state_to_props = state => {
  return { 
    open: state.ui.add_board_modal_open 
  }
}

const map_dispatch_to_props = dispatch => {
  return {
    close: () => { dispatch(set_add_board_modal_open(false)) },
    submit: (data) => { dispatch(create_board(data)) }
  }
}

export default connect(map_state_to_props, map_dispatch_to_props)(AddBoardModal)
