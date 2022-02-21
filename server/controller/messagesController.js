const Message = require('../database/mongoDBmodels/messages')

class convController{

    async newMessage(req, res){
        const newMessage = new Message(req.body)
        try {
            const savedMessage = await newMessage.save()
            res.status(200).json(savedMessage)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getMessages(req, res){
        try {
            const messages = await Message.find({
                conversationId: req.params.conversationId
            })
            res.status(200).json(messages)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = new convController()