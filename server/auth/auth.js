// auth / auth.js

import github from 'passport-github'
import Query from '../queries'

export const strategy = () => {

  const Strategy = github.Strategy
  const data = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  }

  const callback = async (access_token, refresh_token, profile, cb) => {

    const name = profile.username
    const email = profile._json.email
    const external_id = profile._json.id

    const conditions = { name, email, external_id }
    const user = { name, email, external_id, access_token }

    const Users = new Query('users')
    await Users.create_or_update(conditions, user)

    return cb(null, user)

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
