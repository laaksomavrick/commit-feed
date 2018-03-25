// controllers/event.js

import PushEventQuery from '../queries/push_event'

export default class EventController {

  static index = async (req, res, next) => {
    try {
      const query = new PushEventQuery()
      const data = await query.get_with_commits()
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

}

