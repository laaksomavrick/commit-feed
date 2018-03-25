// routes.js

import express from 'express'
import EventController from './controllers/event'

let router = express.Router()

router.get('/heartbeat', async (req, res, next) => {
  try {
    //TODO: remove when dev is done
    const data = { alive: true }
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/events', EventController.index)


export default router
