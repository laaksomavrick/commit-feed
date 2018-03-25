// queries/push_event.js

import db from '../database/db'
import Query from './index'
import CommitQuery from './commit'

export default class PushEventQuery extends Query {

  constructor() {
    super("push_events")
  }

  get_with_commits = async () => {
    const events = await this.get() 
    const event_ids = events.map(event => event.id)
    const commits = await new CommitQuery().get_where_in('push_event_id', event_ids)
    const formatted = events.map(event => {
      event.commits = commits.filter(commit => commit.push_event_id === event.id)
      return event
    })
    return formatted
  }

}
