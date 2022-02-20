const Router = require('express')
const {check} = require("express-validator")
const authController= require('../controller/authController')
//const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()

router.post('/registration', [
    check('login', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 3 символов").isLength({min:3})
], authController.registration)
router.post('/login', authController.login)

module.exports = router


