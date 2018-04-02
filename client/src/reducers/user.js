// reducers/user.js

import { SET_USER } from '../constants/constants.js'

const user = (
  state = {
    id: null,
    name: null,
    email: null
  },
  action
) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        id: action.new_state.id,
        name: action.new_state.name,
        email: action.new_state.email
      })
    default: 
      return state
  }
}

export default user
