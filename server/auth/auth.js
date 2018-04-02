// auth / auth.js

import Github from 'passport-github'
import UserQuery from '../queries/user'

export const strategy = () => {

  const Strategy = Github.Strategy
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
    const obj = { name, email, external_id, access_token }

    const User = new UserQuery()
    const user = await User.create_or_update(conditions, obj)

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
