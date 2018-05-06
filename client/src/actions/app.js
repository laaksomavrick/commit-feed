// actions/app.js

import { get_user } from './user.js'
import { get_boards } from './board.js'
import { get_tasks } from './task.js'
import { get_columns } from './column.js'
import { set_home_loaded } from './ui.js'

//TODO: make this one route versus multiple separate calls?

export const get_initial_data = () => {
  return dispatch => {
    return Promise.all([
      dispatch(get_user()),
      dispatch(get_boards()),
      dispatch(get_tasks()),
      dispatch(get_columns())
    ]).then(() => {
      dispatch(set_home_loaded(true))
    })
  }
}
