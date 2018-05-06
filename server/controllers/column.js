// controllers/column.js

import ColumnQuery from '../queries/column'

export default class ColumnController {

  static index = async (req, res, next) => {
    try {
      const user_id = req.user.id
      const query = new ColumnQuery()
      let data = await query.find({user_id})
      data = data === null ? [] : data
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

}

