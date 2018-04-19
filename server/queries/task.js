// queries/task.js

import db from '../database/db'
import Query from './'

export default class TaskQuery extends Query {

  constructor() {
    super("tasks")
  }

}
