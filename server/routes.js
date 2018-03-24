// routes.js

import express from 'express'
import passport from 'passport'

import { is_authenticated } from './auth/auth'
import UserController from './controllers/user'
import RepoController from './controllers/repo'

import UserQuery from './queries/user'

import GithubSync from './services/github_sync'

let router = express.Router()

router.use(is_authenticated)

router.get('/heartbeat', async (req, res, next) => {
  try {


    const client = new GithubSync(1)
    const test = await client.call()

    const data = { alive: true, user: req.user, session: req.session }
    res.json(data)
  } catch (err) {
    next(err)
  }
})


router.use('/user/current', UserController.current)

router.get('/repos', RepoController.index)


export default router
