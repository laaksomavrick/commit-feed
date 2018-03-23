// reducers/repos.js

import { SET_REPOS } from '../constants/constants.js'

const repos = (
  state = [],
  action
) => {
  switch (action.type) {
    case SET_REPOS:
      return Object.assign([], state, action.new_state)
    default: 
      return state
  }
}

export default repos
