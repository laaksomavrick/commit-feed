// reducers.js

// reducers/reducers.js

import { combineReducers } from 'redux'
import events from './events.js'
import ui from './ui.js'

/*
 *
 *  {
 *    ui: { ... }
 *    events: []
 *  }
 *
 */


const root_reducer = combineReducers({
  events,
  ui
})

export default root_reducer
