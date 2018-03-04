// auth_service.js

'use strict'

import github from 'passport-github'

export const strategy = () => {

  const Strategy = github.Strategy
  const data = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  }

  const callback = (access_token, refresh_token, profile, cb) => {
    return cb(null, profile)
  }

  return new Strategy(data, callback)

}

export const serialize = (user, cb) => {
  cb(null, user)
}

export const deserialize = (obj, cb) => {
  cb(null, obj)
}

export const is_authenticated = (req, res, next) => {
  req.isAuthenticated() ? next() : res.status(401).send({ message: "Authentication is required" })
}
