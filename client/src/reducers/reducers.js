import { combineReducers } from 'redux'

const initial_state = {
  logged_in: false, //todo auth.loggedIn()
}

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    default: return state
  }
}

const root_reducer = combineReducers({
  reducer 
})

export default root_reducer
