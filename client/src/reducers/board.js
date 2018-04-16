// reducers/board.js

import { 
  SET_BOARDS,
  ADD_BOARD,
  UPDATE_BOARD,
  SET_FILTERED_BOARDS
} from '../constants/constants.js'

const boards = (
  state = {
    all: [],
    filtered: []
  },
  action
) => {
  switch (action.type) {
    case SET_BOARDS:
      return Object.assign({}, state, { 
        all: action.new_state,
        filtered: action.new_state
      })
    case ADD_BOARD:
      return Object.assign({}, state, {
        all: [...state.boards.all, action.new_state]
      })
    case UPDATE_BOARD:
      const filtered = state.all.filter(board => board.id !== action.new_state.temp_id)
      delete action.new_state.temp_id
      return Object.assign({}, state, {
        all: [...filtered, action.new_state]
      })
    case SET_FILTERED_BOARDS:
      return Object.assign({}, state, {
        filtered: action.new_state
      })
    default: 
      return state
  }
}

export default boards
