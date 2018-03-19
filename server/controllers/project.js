// controllers/project.js

import UserQuery from '../queries/user'

export default class ProjectController {

  static index = async (req, res, next) => {
    try {
      const id = req.user.id
      const query = new UserQuery()
      const data = await query.find_projects(id)
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

}

