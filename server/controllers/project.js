// controllers/project.js

import UserQuery from '../queries/user'

export default class ProjectController {

  //TODO base class?
  //TODO this will eventually be used with sockets; need some generic middleware to provide socket???
  //TODO error handling middleware 

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

