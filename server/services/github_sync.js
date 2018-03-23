// services/github_sync.js
//
// Need to A) initial import and B) listen to github events for new repositories
//
// repl:
// const blah = require('/abs/path')
// const blah2 = new blah.default
// blah2.call()

import GithubClient from './github_client'

export default class GithubSync {

  constructor(user_id) {
    this.user_id = user_id
  }

  async call() {
    const client = await this.get_client()
    //TODO: get user repos
    const repos = await client.repos.getForOrg({
      org: 'octokit',
      type: 'public'
    })
    return repos
  }

  // private

  async get_client() {
    return await GithubClient.create(this.user_id)
  }
  

}
