// reducers/board.js

import { 
  SET_BOARDS,
  ADD_BOARD,
  UPDATE_BOARD
} from '../constants/constants.js'

const boards = (
  state = [],
  action
) => {
  switch (action.type) {
    case SET_BOARDS:
      return Object.assign([], state, action.new_state)
    case ADD_BOARD:
      return Object.assign([], state, [...state, action.new_state])
    case UPDATE_BOARD:
      const filtered = state.filter(board => board.id !== action.new_state.temp_id)
      delete action.new_state.temp_id
      return Object.assign([], state, [...filtered, action.new_state])
      return {}
    default: 
      return state
  }
}

export default boards
