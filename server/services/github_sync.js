// services/github_sync.js
//
// Need to A) initial import and B) listen to github events for new repositories
//
// repl:
// const blah = require('/abs/path')
// const blah2 = new blah.default
// blah2.call()

import GithubClient from './github_client'
import dotenv from 'dotenv'
const _ = dotenv.config()

export default class GithubSync {

  constructor() {
  }

  call = async () => {

    const client = GithubClient.create()
    const response = await client.activity.getEventsForUser({
      username: process.env.GITHUB_USERNAME,
      per_page: 30
    })

    console.log(response.data[1].payload.commits) //commit msg?

    //a push event has many commits...

    const push_events = response.data.filter(d => d.type === 'PushEvent')

    const events = (
      push_events
        .map(e => { 
          return {
            external_id: e.id,
            username: e.actor.login,
            repo: e.repo.name,
            count: e.payload.commits.length,
            public: e.public
          }
        })
    )

    let commits = []

    for (let i = 0; i < events.length; i++) {
      let event = push_events[i]
      let event_commits = event.payload.commits
      for (let j = 0; j < event_commits.length; j++) {
        let event_commit = event_commits[j]
        commits.push({
          event_external_id: event.id,
          message: event_commit.message
        })
      }
    } //TODO: need url as well

    console.log("here")
    console.log(events)
    console.log("here2")
    console.log(commits)

      /*

    const query = new RepoQuery()
    const success = await query.sync(this.user_id, db_repos)
    return success*/
    return true
  }

}
