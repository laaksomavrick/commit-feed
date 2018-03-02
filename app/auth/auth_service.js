// auth_service.js

'use strict'

import passport from 'passport'
import github from 'passport-github'

let service = {}

service.strategy = () => {

  const Strategy = github.Strategy
  const data = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  }

  const callback = (access_token, refresh_token, profile, cb) => {
    //todo: database stuff
    return cb(null, profile)
  }

  return new Strategy(data, callback)

}

export default service



