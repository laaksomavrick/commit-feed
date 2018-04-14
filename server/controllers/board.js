// controllers/board.js

import BoardQuery from '../queries/board'

export default class BoardController {

  static index = async (req, res, next) => {
    try {
      const user_id = req.user.id || req.user[0].id //TODO wtf?
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
      const user_id = req.user.id || req.user[0].id //TODO wtf?
      //TODO generic way to handle temp_id transformation as convention for optimistic updates
      const temp_id = req.body.id
      const board = { name: req.body.name, user_id }
      let record = await query.create(board)
      record.temp_id = temp_id
      res.send(record)
    } catch (e) {
      next(e)
    }
  }

}

