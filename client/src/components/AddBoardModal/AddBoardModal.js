// AddBoardModal / AddBoardModal.js

import React from 'react'
import { connect } from 'react-redux'

import Modal from 'material-ui/Modal'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Fade from 'material-ui/transitions/Fade'

import { set_add_board_modal_open } from '../../actions/ui.js'

import './AddBoardModal.css'

class AddBoardModal extends React.Component {

  //TODO: generic modal component for positioning css 

  handle_close = () => {
    const { dispatch } = this.props
    dispatch(set_add_board_modal_open(false))
  }

  render() {

    const { open } = this.props

    return (
      <Modal
        open={open}
        onClose={this.handle_close}
      >
        <Fade in={open}>
          <Paper className="modal-container">
            <Typography component="p">
              Hello, world!
            </Typography>
          </Paper>
        </Fade>
      </Modal>
    )

  }

}

const map_state_to_props = state => {
  return { open: state.ui.add_board_modal_open }
}

export default connect(map_state_to_props)(AddBoardModal)
