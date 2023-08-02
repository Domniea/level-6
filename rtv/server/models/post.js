const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        votes: {
            type: Number,
            default: 0
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
                default: []
            }
        ]
    } 
)

module.exports = mongoose.model('Post', postSchema)