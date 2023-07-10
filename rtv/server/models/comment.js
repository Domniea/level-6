const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
    {
        comment: {
            type: String,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        issue: {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    }
)

module.exports = mongoose.model('Issue', commentSchema)