// queries/user.js

import db from '../database/db'
import Query from './'

export default class UserQuery extends Query {

  constructor() {
    super("users")
  }

    /*find_repos = async (id) => {
    const results = await db('user_repos').where({ user_id: id }).select('repo_id')
    if (results.length === 0) { return null }
    const ids = results.map(r => r.repo_id )
    const repos = await db('repos').select('id', 'name', 'description').whereIn('id', ids)
    return repos
  }*/

}
