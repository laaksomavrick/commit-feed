// routes.js

'use strict'

import express from 'express'
import passport from 'passport'
import { is_authenticated } from './auth/auth_service'

let router = express.Router()

router.use('/', is_authenticated)

router.get('/heartbeat', (req, res) => {
  const data= { alive: true, user: req.user, session: req.session }
  res.json(data)
})


export default router
