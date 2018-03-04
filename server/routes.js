// routes.js

'use strict'

import express from 'express'
import auth_controller from './auth/auth_controller'
import passport from 'passport'

let router = express.Router()

router.get('/heartbeat', (req, res) => {
  const status = { alive: true, user: req.user, session: req.session }
  res.json(status)
})

router.get('/auth/github', passport.authenticate('github'))

router.get('/auth/github/callback', 
  passport.authenticate('github', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.redirect('/')
  }
)

export default router
