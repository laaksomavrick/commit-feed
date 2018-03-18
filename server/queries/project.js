// queries/project.js

import db from '../database/db'

export default class ProjectQuery extends Query {

  constructor() {
    super("projects")
  }

}
