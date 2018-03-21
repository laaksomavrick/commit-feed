// reducers.js

// reducers/reducers.js

import { combineReducers } from 'redux'
import authorized from './authorized.js'
import user from './user.js'
import projects from './projects.js'
import ui from './ui.js'

/*
 *
 *  {
 *    authorized: bool
 *    ui: { ... }
 *    user: { ... },
 *    projects: []
 *  }
 *
 */


const root_reducer = combineReducers({
  authorized,
  user,
  projects,
  ui
})

export default root_reducer
