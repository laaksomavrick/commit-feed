// actions/project.js

import { get } from '../utils/http.js'
import { SET_PROJECTS } from '../constants/constants.js'

export const set_projects = (new_state) => {
  return {
    type: SET_PROJECTS,
    new_state
  }
}

export const get_projects = () => {
  return dispatch => {
    return get('projects')
      .then(
        res => res.json(),
        err => console.log('Error in get projects action:', err)
      )
      .then(
        json => dispatch(set_projects(json.data))
      )
  }
}
