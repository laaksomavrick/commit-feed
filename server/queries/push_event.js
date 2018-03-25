// queries/push_event.js

import db from '../database/db'
import Query from './index'

export default class PushEventQuery extends Query {

  constructor() {
    super("push_events")
  }

}
