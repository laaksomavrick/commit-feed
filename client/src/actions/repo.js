// actions/repo.js

import { get } from '../utils/http.js'
import { SET_REPOS } from '../constants/constants.js'

export const set_repos = (new_state) => {
  return {
    type: SET_REPOS,
    new_state
  }
}

export const get_repos = () => {
  return dispatch => {
    return get('repos')
      .then(
        res => res.json(),
        err => console.log('Error in get repos action:', err)
      )
      .then(
        json => dispatch(set_repos(json.data))
      )
  }
}
