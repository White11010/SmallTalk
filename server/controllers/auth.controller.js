const UserService = require("../services/user.service")
const userErrors = require("../errors/user.errors.json")
const globalErrors = require("../errors/global.errors.json")

class AuthController {
  login(req, res) {
    return res.status(201).json({res: 'ok'})
  }

  async signup(req, res) {
    try {
      await UserService.Signup(req.body)
      return res.status(201).send('User created')
    } catch (e) {
      if (e.message === 'duplicated') {
        return res.status(userErrors.login.duplicated.code).json(userErrors.login.duplicated.message);
      } else {
        return res.status(globalErrors.internal.code).json(globalErrors.internal.message);
      }
    }
  }
}

module.exports = new AuthController();