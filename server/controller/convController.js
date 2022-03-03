const Conversation = require('../database/mongoDBmodels/conversation')
const { secret } = require("../config/config")
const jwt = require('jsonwebtoken')
const dbAuth = require('../database/Users')

class convController{

    async createConv(req, res){
        const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json( {message: 'Необходимо авторизоваться'} )
            } 
        const { id: senderId } = jwt.verify(token, secret)
        const { receiverId } = req.body 
        
        try {
            const users = await dbAuth.getUsersById(senderId, receiverId)
            const newConversation = new Conversation({
                firstUserId: users.rows[0].id,
                firstUserLogin: users.rows[0].login,
                secondUserId: users.rows[1].id,
                secondUserLogin: users.rows[1].login
            })
            const saveConv = await newConversation.save()

            const response = saveConv.firstUserId === senderId ?
            {id: saveConv.secondUserId, login: saveConv.secondUserLogin} : 
            {id: saveConv.firstUserId, login: saveConv.firstUserLogin}
            
            res.status(201).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getConv(req, res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json( {message: 'Необходимо авторизоваться'} )
            } 
            const { id: senderId } = jwt.verify(token, secret)
            const conversation = await Conversation.find({
                $or: [ {firstUserId: senderId}, {secondUserId: senderId} ]
            })
            const users = conversation.map( (elem) => {
                return elem.firstUserId === senderId ?
                 {id: elem.secondUserId, login: elem.secondUserLogin} : 
                 {id: elem.firstUserId, login: elem.firstUserLogin}
            })
            res.status(200).json(users)
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    }
}

module.exports = new convController()