// queries/repo.js

import db from '../database/db'
import Query from './index'
import UserRepoQuery from './user_repo'

export default class RepoQuery extends Query {

  constructor() {
    super("repos")
  }

  sync = async (user_id, data) => {

    const user_repo_query = new UserRepoQuery()

    data.forEach( async (obj) => {
      const conditions = { external_id: obj.external_id }
      const repo = await this.create_or_update(conditions, obj)

      const map_conditions = { id: repo.id }
      const map_obj = { user_id, repo_id: repo.id }
      const user_repo_map = await user_repo_query.create_or_update(map_conditions, map_obj) 
    })

    return true

  }

}
