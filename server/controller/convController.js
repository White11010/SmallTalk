const Conversation = require('../database/mongoDBmodels/conversation')

class convController{

    async createConv(req, res){
        const newConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId]
        })
        try {
            const savedConversation = await newConversation.save()
            res.status(200).json(savedConversation)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getConv(req, res){
        try {
            const conversation = await Conversation.find({
                members: { $in: [req.params.userId] }
            })
            res.status(200).json(conversation)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = new convController()