'use strict'

import express from 'express'
import auth_controller from './controllers/auth_controller'

let router = express.Router()

router.get('/', (req, res) => {
  res.json({data: 'Hello, world from api!'})
})

router.get('/login', auth_controller.index)

export default router
