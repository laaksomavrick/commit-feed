// actions/event.js

import { get } from '../utils/http.js'
import { SET_EVENTS } from '../constants/constants.js'

export const set_events = (new_state) => {
  return {
    type: SET_EVENTS,
    new_state
  }
}

export const get_events = () => {
  return dispatch => {
    return get('events')
      .then(
        res => res.json(),
        err => console.log('Error in get repos action:', err)
      )
      .then(
        json => dispatch(set_events(json.data))
      )
  }
}
