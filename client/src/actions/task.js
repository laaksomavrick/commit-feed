// actions/task.js

import { get, post } from '../utils/http.js'
import { 
  SET_TASKS,
} from '../constants/constants.js'


export const set_tasks = (new_state) => {
  return {
    type: SET_TASKS,
    new_state
  }
}

export const get_tasks = () => {
  return dispatch => {
    return get('tasks')
      .then(
        res => res.json(),
        err => console.log('Error in get_tasks:', err)
      )
      .then(
        json => dispatch(set_tasks(json.data))
      )
  }
}
