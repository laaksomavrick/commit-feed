// services/github_poller.js
// NOTE: this only works if one server exists; use redis if scaling horizontally

import GithubSync from './github_sync'

export default class GithubPoller {

  call = async () => {
    console.log("polling for new commits...")
    const wait = 600000
    this.poll()
    setTimeout(this.call, wait)
  }

  poll = async () => {
    const syncer = new GithubSync()
    await syncer.call()
  }

}
