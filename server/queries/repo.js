// queries/repo.js

import db from '../database/db'

export default class RepoQuery extends Query {

  constructor() {
    super("repos")
  }

}
