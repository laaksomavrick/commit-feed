// actions/columns.js

import { get, post } from '../utils/http.js'
import { 
  SET_COLUMNS,
} from '../constants/constants.js'


export const set_columns = new_state => {
  return {
    type: SET_COLUMNS,
    new_state
  }
}

export const get_columns = () => {
  return async dispatch => {
    try {
      const res = await get('columns')
      const json = await res.json()
      dispatch(set_columns(json.data))
    } catch (e) {
      console.log(`error in get columns: ${e}`)
    }
  }
}
