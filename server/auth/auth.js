// auth / auth.js

'use strict'

import github from 'passport-github'
import user from '../models/user'

export const strategy = () => {

  const Strategy = github.Strategy
  const data = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  }

  const callback = (access_token, refresh_token, profile, cb) => {

    const name = profile.username
    const email = profile._json.email
    const external_id = profile._json.id

    //TODO: need to update access_token
    user.findOrCreate(
      {
        where: { name, email, external_id }, 
        defaults: { name, email, access_token, external_id }
      })
      .spread((user, created) => {
        return cb(null, user)
      })
      .catch(err => {
        console.log(err)
      })

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
