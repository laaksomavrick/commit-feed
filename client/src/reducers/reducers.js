// reducers.js

// reducers/reducers.js

import { combineReducers } from 'redux'
import authorized from './authorized.js'
import user from './user.js'
import repos from './repos.js'
import ui from './ui.js'

/*
 *
 *  {
 *    authorized: bool
 *    ui: { ... }
 *    user: { ... },
 *    repos: []
 *  }
 *
 */


const root_reducer = combineReducers({
  authorized,
  user,
  repos,
  ui
})

export default root_reducer
