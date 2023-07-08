const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    memberStartDate: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', userSchema)