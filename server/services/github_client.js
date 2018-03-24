// services/github_client.js

import dotenv from 'dotenv'

export default class GithubClient {

  static create(user_id) {
    const _ = dotenv.config()
    let client = require('@octokit/rest')()
    client.authenticate({
      type: 'basic', 
      username: process.env.GITHUB_USERNAME,
      password: process.env.GITHUB_PASSWORD
    })
    return client
  }

}
