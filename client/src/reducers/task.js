// reducers/task.js

import { 
  SET_TASKS,
} from '../constants/constants.js'

const tasks = (
  state = {
    all: [],
    filtered: []
  },
  action
) => {
  switch (action.type) {
    case SET_TASKS:
      return Object.assign({}, state, { 
        all: action.new_state,
        filtered: action.new_state
      })
    default: 
      return state
  }
}

export default tasks
