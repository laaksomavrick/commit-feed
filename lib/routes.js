'use strict'

const express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  res.json({data: 'Hello, world from api!'})
})

export default router
