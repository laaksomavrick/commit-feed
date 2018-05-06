// queries/board.js

import db from '../database/db'
import Query from './'

export default class BoardQuery extends Query {

  constructor() {
    super("boards")
  }

}
