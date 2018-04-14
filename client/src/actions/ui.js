// actions/ui.js

import { 
  SET_HOME_LOADED,
  SET_ADD_BOARD_MODAL_OPEN,
  SET_SIDEBAR_OPEN
} from '../constants/constants.js'

export const set_home_loaded = new_state => {
  return {
    type: SET_HOME_LOADED,
    new_state
  }
}

export const set_add_board_modal_open = new_state => {
  return {
    type: SET_ADD_BOARD_MODAL_OPEN,
    new_state
  }
}

export const set_sidebar_open = new_state => {
  return {
    type: SET_SIDEBAR_OPEN,
    new_state
  }
}
