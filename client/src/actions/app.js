// actions/app.js

import { get_user } from './user.js'
import { set_home_loaded } from './ui.js'

export const get_initial_data = () => {
  return dispatch => {
    return Promise.all([
      dispatch(get_user()),
    ]).then(() => {
      dispatch(set_home_loaded(true))
    })
  }
}
