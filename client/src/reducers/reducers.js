// reducers.js

// reducers/reducers.js

import { combineReducers } from 'redux'
import authorized from './authorized.js'
import ui from './ui.js'
import user from './user.js'
import boards from './board.js'
import tasks from './task.js'

/*
 *
 *  {
 *    authorized: bool
 *    ui: { ... }
 *    user: { ... },
 *    boards: { ... }
 *    tasks: { ... }
 *  }
 *
 */


const root_reducer = combineReducers({
  authorized,
  ui,
  user,
  boards,
  tasks
})

export default root_reducer
