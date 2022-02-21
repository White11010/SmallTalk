const Router = require('express')
const convController = require('../controller/convController')

const router = new Router()

router.post('/conversation', convController.createConv)
router.get('/conversation/:userId', convController.getConv)

module.exports = router