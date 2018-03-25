// reducers/events.js

import { SET_EVENTS } from '../constants/constants.js'

const events = (
  state = [],
  action
) => {
  switch (action.type) {
    case SET_EVENTS:
      return Object.assign([], state, action.new_state)
    default: 
      return state
  }
}

export default events
