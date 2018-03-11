// reducers.js

// reducers/reducers.js

import { combineReducers } from 'redux'
import authorized from './authorized.js'
import user from './user.js'

/*
 *
 *  {
 *    authorized: bool
 *    ui: { ... }
 *    user: { ... }
 *  }
 *
 */


const root_reducer = combineReducers({
  authorized,
  user
})

export default root_reducer
