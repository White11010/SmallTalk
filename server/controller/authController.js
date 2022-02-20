const dbAuth = require('../database/Users')
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require('../config/config')

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class authController {
    async registration(req, res) {
        try {
            const {login, password} = req.body

            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return res.status(400).json( {message: 'Ошибка при регистрации', errors} )
            }

            const user = await dbAuth.getUser(login)
            if (user.rows.length === 1){
                return res.status(409).json( {message: 'Пользователь уже существует'} )
            }

            const hashPassword = bcrypt.hashSync(password, 7)

            const newUser = await dbAuth.newUser(login, hashPassword)
            if (newUser.rowCount === 0){
                return res.status(400).json()
            }
            return res.status(201).json( {message: 'Пользователь успешно зарегистрирован'} )
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Ошибка при регистрации'})
        }
    }

    async login(req, res){
        try {
            const {login, password} = req.body
            const user = await dbAuth.getUser(login)
            if (user.rows.length === 0){
                return res.status(409).json( {message: `Пользователь c ником ${login} не существует`} )
            }

            const validPassword = bcrypt.compareSync(password, user.rows[0].password)
            if (!validPassword){
                return res.status(401).json( {message: `Пароль неверный`} )
            }
            const token = generateAccessToken(user.rows[0].id)

            return res.status(200).json({
                token: token,
                id: user.rows[0].id,
                login: login
            })
        } catch (error) {
            console.log(error)
            res.status(400).json( {message: 'Ошибка при входе'} )
        }
    }
}

module.exports = new authController()