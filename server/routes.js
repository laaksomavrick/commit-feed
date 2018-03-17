// routes.js

import express from 'express'
import passport from 'passport'

import { is_authenticated } from './auth/auth'
import user_controller from './controllers/user'

let router = express.Router()

router.use(is_authenticated)

router.get('/heartbeat', async (req, res) => {
  
  try {

    const data= { alive: true, user: req.user, session: req.session }
    res.json(data)

  } catch (err) {
    console.log(err)
    res.status(500).send({ err })
  }
})

router.use('/user/current', user_controller.current)



export default router
