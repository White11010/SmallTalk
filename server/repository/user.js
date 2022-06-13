const User = require("../models/user");

class UserRepository {
  create(login, password) {
    try {
      const newUser = new User({
        login: login,
        password: password
      })
      return User.create(newUser);
    } catch (e) {
      throw new Error(e);
    }

  }

  findOne(login) {
    try {
      return User.findOne({login: login});
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = new UserRepository();