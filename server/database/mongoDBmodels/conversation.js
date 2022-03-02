const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema(
    {
        firstUserId: {
            type: Number,
        },
        firstUserLogin: {
            type: String,
        },
        secondUserId:{
            type: Number,
        },
        secondUserLogin: {
            type: String,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("conversation", conversationSchema)