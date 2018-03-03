// routes.js

'use strict'

import express from 'express'
import auth_controller from './auth/auth_controller'
import passport from 'passport'

let router = express.Router()

router.get('/auth', passport.authenticate('github'))
router.get('/auth/callback', auth_controller.callback)

export default router
