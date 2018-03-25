// queries/commit.js

import db from '../database/db'
import Query from './index'

export default class CommitQuery extends Query {

  constructor() {
    super("commits")
  }

}
