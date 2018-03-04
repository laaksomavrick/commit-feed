'use strict'

// index.js, server initialization

import dotenv from 'dotenv'
import express from 'express'
import passport from 'passport'
import cookie_parser from 'cookie-parser'
import body_parser from 'body-parser'
import express_session from 'express-session'

import routes from './routes'
import * as auth_service from './auth/auth_service'

const env = dotenv.config()

const app = express()

app.use(cookie_parser())
app.use(body_parser.urlencoded({ extended: true }))
app.use(express_session({ secret: process.env.EXPRESS_SESSION_SECRET, resave: true, saveUninitialized: true }))

passport.use(new auth_service.strategy)
passport.serializeUser(auth_service.serialize)
passport.deserializeUser(auth_service.deserialize)

app.use(passport.initialize())
app.use(passport.session())

app.use('/api', routes)

app.get('*', (req, res) => {
  const data = { error: 'Route not found'}
  res.status(404).json(data)
})

app.listen(process.env.EXPRESS_PORT, process.env.EXPRESS_HOST)
console.log(`Running server on http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`)
