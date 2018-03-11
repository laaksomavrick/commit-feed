// controllers/user.js

let controller = {}

controller.current = (req, res) => {
  const user = req.user
  res.send({ data: user })
}

export default controller
