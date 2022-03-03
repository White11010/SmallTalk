const Router = require('express')
const messagesController = require('../controller/messagesController')

const router = new Router()

router.post('/messages', messagesController.newMessage)
router.get('/messages/:receiverId', messagesController.getMessages)

module.exports = router