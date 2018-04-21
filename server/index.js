// index.js, server initialization

import dotenv from 'dotenv'
import express from 'express'
import connect_redis from 'connect-redis'
import passport from 'passport'
import cookie_parser from 'cookie-parser'
import body_parser from 'body-parser'
import express_session from 'express-session'
import http from 'http'

import db from './database/db'
import api_routes from './routes'
import auth_routes from './auth/routes'
import * as auth_service from './auth/auth'

const _ = dotenv.config()
const app = express()
const session_store = connect_redis(express_session) //TODO: should redis have some sort of .env config?
const server = http.Server(app)
const session_middleware = express_session({ 
  store: new session_store,
  secret: process.env.EXPRESS_SESSION_SECRET, 
  resave: true, 
  saveUninitialized: true,
  cookie: { expires: new Date(2147483647000) }
})

app.use(cookie_parser())
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())
app.use(session_middleware)

passport.use(new auth_service.strategy)
passport.serializeUser(auth_service.serialize)
passport.deserializeUser(auth_service.deserialize)

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', auth_routes)
app.use('/api', api_routes)

// Debug routes
// const expressListRoutes = require('express-list-routes')
// expressListRoutes({ prefix: '/auth', }, 'API:', auth_routes)

app.get('*', (req, res) => {
  console.log("HERE")
  const data = { error: 'Route not found'}
  res.status(404).json(data)
})

app.use((err, req, res, next) => {
  const error = err.toString()
  res.status(500).send({ error })
})

db.raw('SELECT 1+1 as result')
  .then(() => {
    console.log(`Running database on ${process.env.DB_USER}@${process.env.DB_HOST}`)
    server.listen(process.env.EXPRESS_PORT, process.env.EXPRESS_HOST)
    console.log(`Running server on http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`)
  })
  .catch(err => {
    console.log(`Error connecting database: \n, ${err}`) 
  })

