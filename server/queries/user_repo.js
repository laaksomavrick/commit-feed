// queries/user_repo.js

import db from '../database/db'
import Query from './'

export default class UserRepoQuery extends Query {

  constructor() {
    super("user_repos")
  }

}
