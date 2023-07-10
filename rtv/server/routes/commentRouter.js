const express = require('express')
const commentRouter = express.Router()
require('dotenv').config()
const jwt = require('jsonwebtoken')
const Comment = require('../models/comment')
const { findOneAndDelete } = require('../models/user')

//Get All
commentRouter.get('/', (req, res, next) => {
    Comment.find((err, allData) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allData)
    })
})

//Post One
commentRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedComment)
    })
})

//Delete
commentRouter.delete('/:commentId', (req, res, next) => {
    req.body.user = req.auth_id
    Comment.findOneAndDelete(
        {_id: req.params._id, user: req.auth._id},
        (err, deletedComment) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedComment)
        }
    )
})

//Put
// commentRouter.put('/:commentId', (req, res, next) => {
//     Comment.findByIdAndUpdate(
//         {_id: req.params._id, user: req.auth._id},
//         (err, updatedComment), 
//     )
// })




module.exports = commentRouter