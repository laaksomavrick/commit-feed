// controllers/project.js

export default class UserController {


  static current = async (req, res, next) => {
    try {
      const user = req.user
      res.send({ data: user })
    } catch (e) {
      next(e)
    }
  }

}

