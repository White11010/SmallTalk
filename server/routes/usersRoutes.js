const Router = require('express')
const usersController= require('../controller/usersController')

const router = new Router()

router.get('/search/:login', usersController.search)

module.exports = router