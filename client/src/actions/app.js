// actions/app.js

import { get_user } from './user.js'
import { get_projects } from './project.js'
import { set_home_loaded } from './ui.js'

export const get_initial_data = () => {
  return dispatch => {
    return Promise.all([
      dispatch(get_user()),
      dispatch(get_projects())
    ]).then(() => {
      dispatch(set_home_loaded(true))
    })
  }
}
