// reducers/projects.js

import { SET_PROJECTS } from '../constants/constants.js'

const projects = (
  state = [],
  action
) => {
  switch (action.type) {
    case SET_PROJECTS:
      return Object.assign({}, state, action.new_state)
    default: 
      return state
  }
}

export default projects
