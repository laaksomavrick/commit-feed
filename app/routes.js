// routes.js

'use strict'

import express from 'express'
import auth_controller from './auth/auth_controller'

let router = express.Router()

router.get('/auth', auth_controller.authenticate)
router.get('/auth/callback', auth_controller.callback)

export default router
