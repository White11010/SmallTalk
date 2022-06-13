const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
  login: String,
  password: String
}, {timestamps: true});

module.exports = mongoose.model("user", userSchema);