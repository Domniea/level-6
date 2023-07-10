const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
    {
        description: {
            type: String,
            required: true
        },
        votes: {
            type: Number,
            default: 0
        },
        user: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
)

module.exports = mongoose.model('Post', postSchema)