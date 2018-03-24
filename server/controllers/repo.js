// controllers/repo.js

import UserQuery from '../queries/user'
import GithubSync from '../services/github_sync'

export default class RepoController {

  static index = async (req, res, next) => {
    try {
      const id = req.user.id
      const query = new UserQuery()
      const data = await query.find_repos(id)
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

  static sync = async (req, res, next) => {
    try {
      const id = req.user.id
      const syncer = new GithubSync(id)
      const data = await syncer.call()
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

}

