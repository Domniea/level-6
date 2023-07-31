const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post')


// Get All Todos
postRouter.get("/", (req, res, next) => {
    Post.find((err, posts) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(posts)
    })
})

//Get Users Posts
postRouter.get('/user', (req,res,next) => {
    Post.find(
        { user: req.auth._id },
        (err, posts) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res. status(200).send(posts)
        }
    )
})

//Post a Post
postRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const newPost = new Post(req.body)
    newPost.save((err, savedPost) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedPost)

    })
})

//Delete a Post
postRouter.delete('/:postId', (req, res, next) => {
    Post.findOneAndDelete(
        {
            _id: req.params.postId, user: req.auth._id
        },
        (err, deletedPost) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedPost)
        }
    )
    
})

module.exports = postRouter