const errors = require("../../../errors/user.errors.json")

module.exports = function (req, res, next) {
  if (req.method === "OPTION") {
    next()
  }

  const {login, password} = req.body;

  const isBodyEmpty = !login || !password;
  const isLoginInvalid = typeof login !== 'string' || login.length < 3;
  const isPasswordInvalid = typeof password !== 'string' || password.length < 8;

  if (isBodyEmpty) {
    return res.status(errors.empty.code).json(errors.empty.message);
  }

  if (isLoginInvalid) {
    return res.status(errors.login.invalid.code).json(errors.login.invalid.message);
  }

  if (isPasswordInvalid) {
    return res.status(errors.password.invalid.code).json(errors.password.invalid.message);
  }

  next()
}