// services/github_sync.js
//
// Need to A) initial import and B) listen to github events for new repositories
//
// repl:
// const blah = require('/abs/path')
// const blah2 = new blah.default
// blah2.call()

import GithubClient from './github_client'
import RepoQuery from '../queries/repo'

export default class GithubSync {

  constructor(user_id) {
    this.user_id = user_id
  }

  call = async () => {
    const client = await GithubClient.create(this.user_id)
    const raw_repos = await client.repos.getAll({})
    const db_repos = raw_repos.data.map(repo => {
      return {
        external_id: repo.id,
        name: repo.full_name,
        description: repo.description,
        private: repo.private,
        url: repo.url
      }
    })

    const query = new RepoQuery()
    const success = await query.sync(this.user_id, db_repos)
    return success
  }

}
