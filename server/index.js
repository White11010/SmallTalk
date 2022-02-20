const express = require('express')
//const WSServer = require('express-ws')(app)
const cors = require('cors')
const authRouter = require('./routes/authRoutes')
const PORT = process.env.PORT || 3333;
const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)

app.listen(PORT, (req, res) => {
    console.log(`server started on post ${PORT}`)
})

