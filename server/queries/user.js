// queries/user.js

import db from '../database/db'
import Query from './'

export default class UserQuery extends Query {

  constructor() {
    super("users")
  }

  find_projects = async (id) => {
    const results = await db('user_projects').where({ user_id: id }).select('project_id')
    if (results.length === 0) { return null }
    const ids = results.map(r => r.project_id )
    const projects = await db('projects').select('id', 'name', 'description').whereIn('id', ids)
    return projects
  }

}
