// queries/column.js

import db from '../database/db'
import Query from './'

export default class ColumnQuery extends Query {

  constructor() {
    super("columns")
  }

}
