'use strict'

import dotenv from 'dotenv'
import express from 'express'
import passport from 'passport'
import routes from './routes'
import auth_service from './auth/auth_service'

const env = dotenv.config()

passport.use(new auth_service.strategy)

const app = express()

app.use(passport.initialize())

app.use('/api', routes)

app.get('*', (req, res) => {
  const data = { error: 'Route not found'}
  res.status(404).json(data)
})

app.listen(process.env.EXPRESS_PORT, process.env.EXPRESS_HOST)
console.log(`Running server on http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`)
