const express = require('express')
const voteRouter = express.Router()
const Vote = require('../models/voter')
const Post = require('../models/post')
const { rawListeners } = require('../models/comment')

//UpVote
voteRouter.put('/up/:postId', (req, res, next) => {
    req.body._id = req.auth._id
    Vote.findOneAndUpdate(
        { user: req.auth._id, post: req.params.postId},
        {user: req.auth._id, post: req.params.postId, vote: 1},
        { upsert: true },
        (err, upvote) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(upvote)

        }
    )
    
})

//Update Post Vote
// voteRouter.put('/update/:postId', (req, res, next) => {
//     Vote.find(
//         {post: req.params.postId},
//         (err,votes)=>{
//             const voteTotal = votes.reduce((acc, vote) => {
//                 acc += vote.vote
//                 return acc
//             }, 0)
//         }
//     )
// })

//DownVote
voteRouter.put('/down/:postId', (req, res, next) => {
    req.body._id = req.auth._id
    Vote.findOneAndUpdate(
        { user: req.auth._id, post: req.params.postId},
        {user: req.auth._id, post: req.params.postId, vote: 1 ? 0 : -1},
        { upsert: true },
        (err, downvote) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(downvote)
        }
    )


})

//VoteCount
voteRouter.get('/', (req, res, next) => {
    Vote.find(
        (err,votes)=>{
            console.log(votes)
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(votes)
        }
    )
})

module.exports = voteRouter