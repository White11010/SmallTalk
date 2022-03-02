const mongoose = require('mongoose')

const messagesSchema = new mongoose.Schema(
    {
        receiver: {
            type: Number,
        },
        sender: {
            type: Number,
        },
        text: {
            type: String,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("messages", messagesSchema)