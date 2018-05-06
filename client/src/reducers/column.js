// reducers/columns.js

import { 
  SET_COLUMNS,
} from '../constants/constants.js'

const columns = (
  state = {
    all: []
  },
  action
) => {
  switch (action.type) {
    case SET_COLUMNS:
      return Object.assign({}, state, { 
        all: action.new_state
      })
    default: 
      return state
  }
}

export default columns
