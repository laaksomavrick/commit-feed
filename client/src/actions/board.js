// actions/board.js

import { get } from '../utils/http.js'
import { SET_BOARDS } from '../constants/constants.js'

export const set_boards = (new_state) => {
  return {
    type: SET_BOARDS,
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
