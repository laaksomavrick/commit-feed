// reducers/board.js

import { SET_BOARDS } from '../constants/constants.js'

const boards = (
  state = [],
  action
) => {
  switch (action.type) {
    case SET_BOARDS:
      return Object.assign([], state, action.new_state)
    default: 
      return state
  }
}

export default boards
