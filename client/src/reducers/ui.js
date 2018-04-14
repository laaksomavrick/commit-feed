// reducers/ui.js

import { 
  SET_HOME_LOADED,
  SET_ADD_BOARD_MODAL_OPEN,
  SET_SIDEBAR_OPEN
} from '../constants/constants.js'

const ui = (
  state = {
    home_loaded: false,
    add_board_modal_open: false,
    sidebar_open: false
  },
  action
) => {
  switch (action.type) {
    case SET_HOME_LOADED:
      return Object.assign({}, state, {
        home_loaded: action.new_state
      })
    case SET_ADD_BOARD_MODAL_OPEN:
      return Object.assign({}, state, {
        add_board_modal_open: action.new_state
      })
    case SET_SIDEBAR_OPEN:
      return Object.assign({}, state, {
        sidebar_open: action.new_state
      })
    default: 
      return state
  }
}

export default ui
