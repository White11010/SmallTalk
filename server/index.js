const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const authRouter = require('./routes/authRoutes')
const conversationRoutes = require('./routes/conversationRoutes')
const messagesRoutes = require('./routes/messagesRoutes')
const usersController = require('./routes/usersRoutes')

const PORT = process.env.PORT || 3333;
const app = express()


app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/chat', conversationRoutes)
app.use('/chat', messagesRoutes)
app.use('/users', usersController)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://ValentinKavrin:dashadom74@cluster0.qtwef.mongodb.net/chat_mongo?retryWrites=true&w=majority`)
        .then(() => {
            console.log('Mongo - Ok');
        })
        app.listen(PORT, (req, res) => {
            console.log(`server started on post ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()




