// controllers/board.js

import UserQuery from '../queries/user'

export default class BoardController {

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

}

