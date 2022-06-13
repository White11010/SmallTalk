const bcrypt = require("bcrypt");

const UserRepository = require("../repository/user")

class UserService {
  async Signup(user) {
    const {login, password} = user;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const duplicatedUsers = await UserRepository.findOne(login);
    if (!!duplicatedUsers) {
      throw new Error('duplicated');
    }

    await UserRepository.create(login, passwordHash)
  }
}

module.exports = new UserService()