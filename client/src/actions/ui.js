// actions/user.js

import { SET_HOME_LOADED } from '../constants/constants.js'

export const set_home_loaded = (new_state) => {
  return {
    type: SET_HOME_LOADED,
    new_state
  }
}
