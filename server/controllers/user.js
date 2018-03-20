// controllers/project.js

export default class UserController {

  static current = async (req, res, next) => {
    try {
      const data = req.user
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

}

