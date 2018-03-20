// actions/app.js

import { get_user } from './user.js'
import { get_projects } from './project.js'

export const get_initial_data = () => {
  return dispatch => {
    Promise.all([
      dispatch(get_user()),
      dispatch(get_projects())
    ])
  }
}
