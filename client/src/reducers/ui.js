// reducers/ui.js

import { SET_HOME_LOADED } from '../constants/constants.js'

const ui = (
  state = {
    home_loaded: false
  },
  action
) => {
  switch (action.type) {
    case SET_HOME_LOADED:
      return Object.assign({}, state, {
        home_loaded: action.new_state
      })
    default: 
      return state
  }
}

export default ui
