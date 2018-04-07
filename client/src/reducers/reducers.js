// reducers.js

// reducers/reducers.js

import { combineReducers } from 'redux'
import authorized from './authorized.js'
import ui from './ui.js'
import user from './user.js'
import boards from './board.js'

/*
 *
 *  {
 *    authorized: bool
 *    ui: { ... }
 *    user: { ... },
 *    boards: []
 *  }
 *
 */


const root_reducer = combineReducers({
  authorized,
  ui,
  user,
  boards
})

export default root_reducer
