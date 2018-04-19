// controllers/task.js

import TaskQuery from '../queries/task'

export default class TaskController {

  static index = async (req, res, next) => {
    try {
      const user_id = req.user.id
      const query = new TaskQuery()
      let data = await query.find({user_id})
      data = data === null ? [] : data
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

}

