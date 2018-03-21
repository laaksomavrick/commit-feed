// actions/user.js

import { get } from '../utils/http.js'
import { SET_USER } from '../constants/constants.js'

export const set_user = (new_state) => {
  return {
    type: SET_USER,
    new_state
  }
}

export const get_user = () => {
  return dispatch => {
    return get('user/current')
      .then(
        res => res.json(),
        err => console.log('Error in asyncGetUser:', err)
      )
      .then(
        json => dispatch(set_user(json.data))
      )
  }
}

//only here for example, don't use ATM
  /*export const get_user = () => {
  const Socket = new SocketSingleton()
  return dispatch => {
    Socket.emit('api/user/current', {}, (err, data) => {
      console.log(err)
      console.log(data)
    })
  }
}*/
