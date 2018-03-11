// actions/user.js

import { get } from '../utils/http.js'
import { SET_USER } from '../constants/constants.js'

export const set_user = (new_state) => {
  return {
    type: SET_USER,
    new_state
  }
}

export const async_get_user = () => {
  return dispatch => {
    get('user/current')
      .then(
        res => res.json(),
        err => console.log('Error in asyncGetUser:', err)
      )
      .then(
        json => dispatch(set_user(json.data))
      )
  }
}
