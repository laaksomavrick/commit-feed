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

  static create = async (req, res, next) => {
    try {
      const query = new BoardQuery()
      const user_id = req.user.id
      const board = { name: req.body.name, user_id }
      let data = await query.create(board)
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

}

