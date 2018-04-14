// routes.js

import express from 'express'
import passport from 'passport'

import { is_authenticated } from './auth/auth'
import UserController from './controllers/user'
import BoardController from './controllers/board'

import UserQuery from './queries/user'

let router = express.Router()

router.use(is_authenticated)

router.get('/heartbeat', async (req, res, next) => {
  try {
    const data = { alive: true, user: req.user, session: req.session }
    res.json(data)
  } catch (err) {
    next(err)
  }
})


router.use('/user/current', UserController.current)

router.get('/boards', BoardController.index)
router.post('/boards', BoardController.create)

export default router
