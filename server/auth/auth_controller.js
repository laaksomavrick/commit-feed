// auth_controller.js

'use strict'

import passport from 'passport'

let controller = {}

controller.authenticate = (req, res) => {
  passport.authenticate('github')
}

controller.callback = (req, res) => {
  passport.authenticate('github')
}

export default controller
