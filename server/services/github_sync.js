// services/github_sync.js

import GithubClient from './github_client'
import PushEventQuery from '../queries/push_event'
import CommitQuery from '../queries/commit'

import dotenv from 'dotenv'
const _ = dotenv.config()

export default class GithubSync {

  //TODO: clean this up

  call = async () => {

    const client = GithubClient.create()
    const push_event_query = new PushEventQuery()
    const commit_query = new CommitQuery()

    const response = await client.activity.getEventsForUser({
      username: process.env.GITHUB_USERNAME,
      per_page: 30
    })

    const push_events = response.data.filter(d => d.type === 'PushEvent')

    push_events.forEach( async event => {

      const event_obj = {
        external_id: event.id,
        username: event.actor.login,
        repo: event.repo.name,
        count: event.payload.commits.length,
        public: event.public
      }

      const push_event_record = await push_event_query.create_or_update({ external_id: event_obj.external_id }, event_obj)

      event.payload.commits.forEach( async commit => {

        const commit_obj = {
          push_event_id: push_event_record.id,
          message: commit.message,
          url: commit.url
        }

        const commit_record = await commit_query.create_or_update({url: commit_obj.url, message: commit_obj.message}, commit_obj)

      })

    })

    return true

  }

}
