// actions/board.js

import { get, post } from '../utils/http.js'
import { 
  SET_BOARDS,
  ADD_BOARD,
  UPDATE_BOARD,
  SET_FILTERED_BOARDS
} from '../constants/constants.js'

export const add_board = (new_state) => {
  return {
    type: ADD_BOARD,
    new_state
  }
}

export const update_board = (new_state) => {
  return {
    type: UPDATE_BOARD,
    new_state
  }
}

export const set_boards = (new_state) => {
  return {
    type: SET_BOARDS,
    new_state
  }
}

export const set_filtered_boards = new_state => {
  return {
    type: SET_FILTERED_BOARDS,
    new_state
  }
}

export const get_boards = () => {
  return dispatch => {
    return get('boards')
      .then(
        res => res.json(),
        err => console.log('Error in get_boards:', err)
      )
      .then(
        json => dispatch(set_boards(json.data))
      )
  }
}

export const create_board = (board) => {
  return dispatch => {
    return post('boards', board)
      .then(
        res => res.json(),
        err => console.err('Error in create_board:', err)
      )
      .then(
        json => dispatch(add_board(json.data))
      )
  }
}
