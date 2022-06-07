class AuthController {
  login(req, res) {
    return res.status(201).json({res: 'ok'})
  }
  signup(req, res) {
    console.log(req.body)
    return res.status(201).json({res: 'ok'})
  }
}

module.exports = new AuthController();