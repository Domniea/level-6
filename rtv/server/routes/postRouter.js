const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post')

//Post a Post
postRouter.post('/')
    req.body.user = req.auth._id
    const newPost = new Post(req.body)
    newPost.save((err, savedPost) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedPost)
    })
