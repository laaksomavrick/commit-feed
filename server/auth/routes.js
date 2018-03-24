// auth / routes.js

'use strict'

import express from 'express'
import passport from 'passport'

let router = express.Router()

router.get('/github', passport.authenticate('github', { scope: 'repo' } ))

router.get('/github/callback', 
  passport.authenticate('github', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.cookie("sessionIsAlive", "1", {
      httpOnly: false
    })
    res.redirect('/')
  }
)

export default router
