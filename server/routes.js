// routes.js

'use strict'

import express from 'express'
import passport from 'passport'

import { is_authenticated } from './auth/auth'
import user_controller from './controllers/user'

import user from './models/user'

let router = express.Router()

router.use(is_authenticated)

router.get('/heartbeat', async (req, res) => {
  //const data= { alive: true, user: req.user, session: req.session }
  
  try {
  
    const test = await user.findAll({ where: { id: 2 } })

    const data = { test }

    res.json(data)

  } catch (err) {

  }
})

router.use('/user/current', user_controller.current)



export default router
