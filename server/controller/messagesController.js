const Message = require('../database/mongoDBmodels/messages')
const { secret } = require("../config/config")
const jwt = require('jsonwebtoken')

class convController{

    async newMessage(req, res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json( {message: 'Необходимо авторизоваться'} )
            } 

            const { id: senderId } = jwt.verify(token, secret)
            const { receiverId, text } = req.body

            const newMessage = new Message({
                receiver: receiverId,
                sender: senderId,
                text: text
            })
            const savedMessage = await newMessage.save()

            const chats = {
                sender: savedMessage.sender,
                receiver: savedMessage.receiver,
                text: savedMessage.text,
                date: savedMessage.createdAt
            }

            res.status(200).json(chats)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getMessages(req, res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json( {message: 'Необходимо авторизоваться'} )
            } 

            const { id: senderId } = jwt.verify(token, secret)
            const receiverId = req.params.receiverId

            const messages = await Message.find({
                $and: [
                {$or: [ {receiver: senderId}, {sender: senderId} ] },
                {$or: [ {receiver: receiverId}, {sender: receiverId} ] }
                ]
            })

            const chats = messages.map( (elem) => {
                return {
                    sender: elem.sender,
                    text: elem.text,
                    data: elem.createdAt
                }
            })

            res.status(200).json(chats)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = new convController()