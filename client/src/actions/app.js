// actions/app.js

import { get_events } from './event.js'
import { set_home_loaded } from './ui.js'

export const get_initial_data = () => {
  return dispatch => {
    return Promise.all([
      dispatch(get_events())
    ]).then(() => {
      dispatch(set_home_loaded(true))
    })
  }
}
