// controllers/board.js

import BoardQuery from '../queries/board'

export default class BoardController {

  static index = async (req, res, next) => {
    try {
      const user_id = req.user.id
      const query = new BoardQuery()
      let data = await query.find({user_id})
      data = data === null ? [] : data
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

}

