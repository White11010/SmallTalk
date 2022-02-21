const dbAuth = require('../database/Users')

class usersController{
    async search(req, res){
        try {
            const login = req.params.login
            const users = await dbAuth.getUserSearch(login)
            return res.status(200).json(users.rows)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = new usersController()