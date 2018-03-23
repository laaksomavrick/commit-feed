// services/github_client.js

import UserQuery from '../queries/user.js'

const octokit = require('@octokit/rest')()

export default class GithubClient {

  // usage: const client = await GithubClient.create(user_id)

  static async create(user_id) {
    const klass = new GithubClient()
    const client = await klass.initialize(user_id)
    return client
  }

  async initialize(user_id) {
    const query = new UserQuery()
    const user = await query.find_by_id(user_id)
    const access_token = user.access_token
    const client = octokit
    client.authenticate({type: 'token', token: access_token})
    return client
  }

}
