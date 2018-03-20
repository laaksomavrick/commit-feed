// reducers.js

// reducers/reducers.js

import { combineReducers } from 'redux'
import authorized from './authorized.js'
import user from './user.js'
import projects from './projects.js'

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
  projects
})

export default root_reducer
