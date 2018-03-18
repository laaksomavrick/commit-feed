// routes.js

import express from 'express'
import passport from 'passport'

import { is_authenticated } from './auth/auth'
import user_controller from './controllers/user'
import ProjectController from './controllers/project'

import UserQuery from './queries/user'

let router = express.Router()

router.use(is_authenticated)

router.get('/heartbeat', async (req, res) => {
  try {
    const data = { alive: true, user: req.user, session: req.session }
    res.json(data)
  } catch (err) {
    next(err)
  }
})


router.use('/user/current', user_controller.current)

router.get('/projects', ProjectController.index)



export default router
