'use strict'

import dotenv from 'dotenv'
import express from 'express'
import routes from './routes'

const env = dotenv.config()
const app = express()

app.use('/api', routes)

app.get('*', (req, res) => {
  const data = { error: 'Route not found'}
  res.status(404).json(data)
})

app.listen(process.env.EXPRESS_PORT, process.env.EXPRESS_HOST)
console.log(`Running server on http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`)
