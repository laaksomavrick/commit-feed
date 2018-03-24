// routes.js

import express from 'express'

import RepoController from './controllers/repo'

import GithubSync from './services/github_sync'

let router = express.Router()

router.get('/heartbeat', async (req, res, next) => {
  try {

    const client = new GithubSync()
    const test = await client.call()

    const data = { alive: true }
    res.json(data)
  } catch (err) {
    next(err)
  }
})

//router.get('/repos', RepoController.index)


export default router
