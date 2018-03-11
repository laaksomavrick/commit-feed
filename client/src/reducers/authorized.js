// reducers/authorized.js

import { is_logged_in } from '../utils/auth.js'

const authorized = (
  state = is_logged_in(),
  action
) => {
  switch (action.type) {
  default: return state
  }
}

export default authorized
